import message_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import Button from '../Button';
import React from 'react';

function Contact() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '03a154c0-198b-40d4-917d-5ecb11f11980');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact justify-self-center md:flex-row my-[80px] gap-6 px-[20px] lg:w-[90%] w-[100%] flex flex-col justify-between">
      <div className="md:w-[48%] text-[#676767]">
        <h3 className="text-[#000f38] flex items-center gap-4 font-medium mb-[20px] text-[25px]">
          Send us a message <img src={message_icon} className="w-[35px]" />
        </h3>
        <p className="max-w-[450px]">
          Feel free to reach out through contact form or find our contact information below. Your
          feedback, questions, and suggestions are important to us as we strive to provide
          exceptional service to our university community.
        </p>
        <ul>
          <li className="flex gap-3 items-center my-4">
            <img src={mail_icon} className="w-[25px]" /> Contact@GreatStack.dev
          </li>
          <li className="flex gap-2 items-center my-4">
            <img src={phone_icon} className="w-[25px]" /> +1 123-456-7890
          </li>
          <li className="flex gap-2 items-center my-4">
            <img src={location_icon} className="w-[25px]" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="md:w-[48%] text-[#676767]">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            className="block w-full bg-[#ebecfe] p-3.5 mb-[15px] mt-[5px] resize-none"
            type="text"
            placeholder="Enter your Name"
            required
            name="name"
          />
          <label htmlFor="">Phone Number</label>
          <input
            className="block w-full bg-[#ebecfe] p-3.5 mb-[15px] mt-[5px] resize-none"
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            className="block w-full bg-[#ebecfe] p-3.5 mb-[15px] mt-[5px] resize-none"
            name="message"
            rows={6}
            placeholder="Enter Your Message"
            required
          ></textarea>
          <Button
            text={'Submit Now'}
            cn={'!bg-[#212ea0] text-white'}
            rightIcon={<img src={white_arrow} className="w-[20px]" />}
          />
        </form>
        <span className="block my-5">{result}</span>
      </div>
    </div>
  );
}

export default Contact;

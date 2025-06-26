import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

function Testimoials() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const data = [
    {
      id: 1,
      src: user_1,
      name: 'Emily Williams',
      role: 'Edusity, USA',
      desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 2,
      src: user_2,
      name: 'William Jackson',
      role: 'Edusity, USA',
      desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 3,
      src: user_3,
      name: 'Emily Williams',
      role: 'Edusity, USA',
      desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 4,
      src: user_4,
      name: 'William Jackson',
      role: 'Edusity, USA',
      desc: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
  ];

  const handlePrevious = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
    if (currentSlide === 1) {
      setCurrentSlide(data.length);
    }
  };

  const handleNext = () => {
    if (currentSlide < data.length) {
      setCurrentSlide(currentSlide + 1);
    }
    if (currentSlide === data.length) {
      setCurrentSlide(1);
    }
  };
  console.log(currentSlide);
  return (
    <div className="testimonials flex w-[90%] justify-self-center items-center justify-center min-h-[50vh]">
      <div className="relative flex justify-center px-[20px] md:px-[80px] items-center w-full md:w-[500px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="cursor-pointer text-[#212ea0] bg-white absolute w-6 h-6 rounded-full left-1"
        />
        {data.map((item) => {
          return (
            <div key={item.id}>
              {currentSlide === item.id && (
                <div className="shadow-md flex flex-col gap-4 rounded-lg p-6 bg-white">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[60px] rounded-full border-[4px] border-[#212ea0]"
                      src={item.src}
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      <h3>{item.name}</h3>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          );
        })}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="cursor-pointer text-[#212ea0] bg-white absolute w-6 h-6 rounded-full right-1"
        />
      </div>
    </div>
  );
}

export default Testimoials;

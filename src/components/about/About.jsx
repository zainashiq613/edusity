import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

function About() {
  return (
    <div className="about my-[100px] px-[20px] justify-self-center flex flex-col-reverse lg:flex-row items-center justify-between w-[90%]">
      <div className="basis-[40%] relative">
        <img src={about_img} className="w-full rounded-md" />
        <img
          src={play_icon}
          className="w-[60px] absolute top-[50%] left-[50%] translate-[-50%,-50%]"
        />
      </div>
      <div className="basis-[56%]">
        <h3 className="font-semibold text-base text-[#212ea0]">ABOUT UNIVERSITY</h3>
        <h2 className="text-[35px] text-[#000f38] my-[10px] max-w-[400px]">
          Nurturing Tomorrow's Leaders Today
        </h2>
        <p className="text-[#676767] mb-4">
          Embark on a transformative educational journey with our university's comprehensive
          education programs. Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-[#676767] mb-4">
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs
          prepare aspiring educators to make a meaningful impact in classrooms, schools, and
          communities.
        </p>
        <p className="text-[#676767] mb-4">
          Whether you aspire to become a teacher, administrator, counselor, or educational leader,
          our diverse range of programs offers the perfect pathway to achieve your goals and unlock
          your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;

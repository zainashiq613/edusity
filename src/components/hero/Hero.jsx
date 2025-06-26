import Button from '../Button';
import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

function Hero() {
  return (
    <div className="hero px-[20px] lg:px-[120px] flex items-center justify-center">
      <div className="text-center max-w-[800px]">
        <h1 className="md:text-[60px] text-[27px] font-semibold">
          We ensure better education for a better world
        </h1>
        <p className="max-w-[700px] text-[13px] mt-2.5 my-auto mb-5">
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
          and experiences needed to excel in the dynamic field of education
        </p>
        <Button text={'Explore More'} rightIcon={<img className="w-[20px]" src={dark_arrow} />} />
      </div>
    </div>
  );
}

export default Hero;

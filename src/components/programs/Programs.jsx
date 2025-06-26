import programe_1 from '../../assets/program-1.png';
import programe_2 from '../../assets/program-2.png';
import programe_3 from '../../assets/program-3.png';
import programe_icon_1 from '../../assets/program-icon-1.png';
import programe_icon_2 from '../../assets/program-icon-2.png';
import programe_icon_3 from '../../assets/program-icon-3.png';

function Programs() {
  return (
    <div className="programs my-[80px] px-[20px] lg:px-[120px] gap-6 w-[90%] flex flex-col md:flex-row items-center justify-between justify-self-center">
      <div className="group basis-[100%] md:basis-[31%] relative">
        <img className="w-full rounded-md block" src={programe_1} alt="" />
        <div className="flex items-center justify-center flex-col text-white cursor-pointer opacity-0 rounded-md absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] group-hover:opacity-100 transition-opacity duration-700">
          <img className="w-[60px] mb-2.5" src={programe_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="group basis-[100%] md:basis-[31%] relative">
        <img className="w-full rounded-md block" src={programe_2} alt="" />
        <div className="flex items-center justify-center flex-col text-white cursor-pointer opacity-0 rounded-md absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] group-hover:opacity-100 transition-opacity duration-700">
          <img className="w-[60px] mb-2.5" src={programe_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="group basis-[100%] md:basis-[31%] relative">
        <img className="w-full rounded-md block" src={programe_3} alt="" />
        <div className="flex items-center justify-center flex-col text-white cursor-pointer opacity-0 rounded-md absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] group-hover:opacity-100 transition-opacity duration-700">
          <img className="w-[60px] mb-2.5" src={programe_icon_3} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;

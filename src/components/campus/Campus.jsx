import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';
import Button from '../Button';

function Campus() {
  return (
    <div className="campus flex px-[30px] flex-col items-center justify-center gap-5 lg:px-[120px] justify-self-center my-[80px] lg:w-[90%] text-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 w-[100%] items-center justify-between gap-10">
        <img className="w-full rounded-md" src={gallery_1} />
        <img className="w-full rounded-md" src={gallery_2} />
        <img className="w-full rounded-md" src={gallery_3} />
        <img className="w-full rounded-md" src={gallery_4} />
      </div>
      <Button
        text={'See More here'}
        cn={'!bg-[#212ea0] text-white'}
        rightIcon={<img src={white_arrow} className="w-[20px]" />}
      />
    </div>
  );
}

export default Campus;

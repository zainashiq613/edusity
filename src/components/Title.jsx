function Title({ title, subTitle }) {
  return (
    <div className="flex flex-col text-[#212ea0] text-[15px] font-semibold uppercase mt-[70px] items-center justify-center">
      <p>{title}</p>
      <h2 className="text-[32px] text-[#000f38] mt-1">{subTitle}</h2>
    </div>
  );
}

export default Title;

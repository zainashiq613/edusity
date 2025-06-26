function Button({ text, cn, onClick, leftIcon, rightIcon }) {
  return (
    <div>
      <button
        className={`bg-white inline-flex gap-2 justify-center items-center text-[#212121] py-3.5 px-6.5 rounded-4xl cursor-pointer ${cn}`}
      >
        {leftIcon && leftIcon}
        {text}
        {rightIcon && rightIcon}
      </button>
    </div>
  );
}

export default Button;

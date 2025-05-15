const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="bg-button-bg text-button-color h-10 w-28 cursor-pointer rounded-lg "
    >
      {text}
    </button>
  );
};
export default Button;

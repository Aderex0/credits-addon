import "./Buttons.scss";

const Button = ({ text, onClick, btnColor }) => {
  return (
    <button style={{ backgroundColor: btnColor }} className="button-outline" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

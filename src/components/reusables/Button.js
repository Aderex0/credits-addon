import "./Buttons.scss";

const Button = ({ text, onClick, btnColor, testId }) => {
  return (
    <button data-testid={testId} style={{ backgroundColor: btnColor }} className="button-outline" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

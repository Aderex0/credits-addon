// Components
import Button from "./Button";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/credits.action";
// Styles
import "./Error.scss";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.credits.error);

  console.log(error);
  return (
    <div className="error-container">
      <p>{error}</p>
      <Button text="OK" btnColor="rgb(250, 111, 0)" onClick={() => dispatch(closeModal())} />
    </div>
  );
};

export default Error;

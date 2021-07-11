// Components
import Button from "../reusables/Button";
import CreditsEditor from "./CreditsEditor";
import CreditsLog from "./CreditsLog";
import EditorSlider from "./EditorSlider";
import Loading from "../reusables/Loading";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addCredits, closeModal, triggerSlider } from "../../redux/actions/credits.action";
// Styles
import "./ManageCredits.scss";

const CreditsPanel = () => {
  const dispatch = useDispatch();
  const organisation = useSelector((state) => state.credits.organisation);
  const openSlider = useSelector((state) => state.credits.openSlider);
  const loading = useSelector((state) => state.credits.loading);

  // Handles opening of slider in credits panel. If operator is has add or edit, credits get adjusted
  const handleSliderOpening = (operator) => {
    if (operator.add || operator.edit) dispatch(addCredits(operator.add ? 0 : organisation.credits));
    dispatch(triggerSlider({ ...openSlider, ...operator }));
  };

  return (
    <>
      <div className="credits-panel-container">
        {/*Display company data container*/}
        <div className="cp-text-area">
          {/* Displays loading after ADD/EDIT */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <h3>{organisation.name}</h3>
              <h2>{organisation.credits}</h2>
              <p>Available credits</p>
            </>
          )}
        </div>
        {/*Opens a slider either for log or for Adding/Editing credits*/}
        <EditorSlider>
          {(openSlider.add || openSlider.edit) && <CreditsEditor />}
          {openSlider.log && <CreditsLog />}
        </EditorSlider>
        {/* Add / Edit / Log / Back buttons */}
        <div className="cp-buttons">
          <Button text="Add Credits" btnColor="rgb(250, 111, 0)" onClick={() => handleSliderOpening({ add: true })} />
          <Button text="Edit Credits" btnColor="rgb(250, 111, 0)" onClick={() => handleSliderOpening({ edit: true })} />
          <Button text="Log" btnColor="rgb(0, 62, 76)" onClick={() => handleSliderOpening({ log: true })} />
          <Button text="Back" btnColor="rgb(0, 62, 76)" onClick={() => dispatch(closeModal())} />
        </div>
      </div>
    </>
  );
};

export default CreditsPanel;

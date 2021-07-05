// Components
import Button from "../reusables/Button";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addCredits, triggerSlider, updateCreditsRequest } from "../../redux/actions/companies.action";

const CreditsEditor = () => {
  const dispatch = useDispatch();
  const companyObj = useSelector((state) => state.companies.company);
  const credits = useSelector((state) => state.companies.credits);
  const openSlider = useSelector((state) => state.companies.openSlider);

  // Manages component text.
  const editorText = openSlider.add ? "Add" : "Edit";

  // Changes credits string into integer before updating controlled form
  const handleSetCredits = (int) => {
    const newCredits = parseInt(int, 10);
    dispatch(addCredits(newCredits));
  };

  // Submit ADD/EDIT credits
  const handleConfirm = (e) => {
    e.preventDefault();

    //  ADD : EDIT
    const newCredits = {
      id: companyObj.id,
      credits: openSlider.add ? parseInt(companyObj.credits, 10) + credits : credits,
    };

    dispatch(updateCreditsRequest(newCredits));
    dispatch(triggerSlider({ ...openSlider, open: false }));
  };

  return (
    <div className="cp-editor-container">
      <form onSubmit={handleConfirm}>
        <label htmlFor="amount">{editorText} credits</label>
        <input id="amount" type="number" value={credits} onChange={(e) => handleSetCredits(e.target.value)} />
        {/* OK button */}
        <Button text={`OK, ${editorText}`} btnColor="rgb(250, 111, 0)" />
      </form>
      {/* Back button */}
      <Button
        text="Back"
        btnColor="rgb(0, 62, 76)"
        onClick={() => dispatch(triggerSlider({ open: false, add: undefined }))}
      />
    </div>
  );
};

export default CreditsEditor;

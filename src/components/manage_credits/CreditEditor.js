// Components
import Button from "../reusables/Button";
// React
import { useEffect, useState } from "react";

const CreditEditor = ({ dataObj, initCredits, inputText, setOpenEditor }) => {
  const [credits, setCredits] = useState(initCredits);
  useEffect(() => setCredits(initCredits), [initCredits]);

  // Submit ADD/EDIT credits
  const handleConfirm = (e) => {
    e.preventDefault();

    // Create updated credits object based on function
    const updatedObj = {
      credits: initCredits === 0 ? dataObj.credts + credits : credits,
      id: dataObj.id,
    };

    // TODO: FETCHER
  };

  return (
    <div className="cp-editor-container">
      <form onSubmit={handleConfirm}>
        <label htmlFor="amount">{inputText} credits</label>
        <input id="amount" type="number" value={credits} onChange={(e) => setCredits(e.target.value)} />
        {/* OK button */}
        <Button text={`OK, ${inputText}`} btnColor="rgb(250, 111, 0)" />
      </form>
      {/* Back button */}
      <Button text="Back" btnColor="rgb(0, 62, 76)" onClick={() => setOpenEditor({ open: false, add: undefined })} />
    </div>
  );
};

export default CreditEditor;

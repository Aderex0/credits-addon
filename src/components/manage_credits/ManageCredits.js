// Components
import Button from "../reusables/Button";
import Modal from "../reusables/Modal";
import CreditsPanel from "./CreditsPanel";
// React
import { useState } from "react";
// Styles
import "./ManageCredits.scss";

// Manage Credits(api call) => Modal({children}) => Credits Panel(child) / CreditEditor

/* Colors
  WL Orange = rgb(250, 111, 0)
  WL Teal = rgb(0, 62, 76)
*/

const ManageCredits = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataObj, setDataObj] = useState({});

  return (
    <div className="manage-credits-btn-container">
      <Button text="Manage credits" btnColor="rgb(250, 111, 0)" onClick={() => setOpenModal(true)} />
      <p>Available credits: {dataObj.credits}</p>
      {/* Components displayed in modal are passed as children */}
      <Modal open={openModal} setOpenModal={setOpenModal} dataObj={dataObj}>
        <CreditsPanel dataObj={dataObj} setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
};

export default ManageCredits;

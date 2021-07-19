// Components
import Button from "../../reusables/Button";
// React
import React from "react";

const ManageCredits = ({ handleModalOpening, organisation }) => {
  const { credits } = organisation;

  return (
    <div className="manage-credits-btn-container">
      <Button
        text="Manage credits"
        testId="open-modal"
        btnColor="rgb(250, 111, 0)"
        onClick={() => handleModalOpening({ openModal: true })}
      />
      <p data-testid="credits">{`Available credits: ${credits}`}</p>
      {/* Components displayed in modal are passed as children */}
    </div>
  );
};

export default ManageCredits;

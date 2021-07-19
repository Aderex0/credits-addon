// Components
import CreditsPanel from "./interfaces/CreditsPanel";
// React
import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getLogsByOrganisationRequest,
  addCredits,
  triggerSlider,
  updateCreditsRequest,
} from "../../redux/actions/credits.action";
// Styles
import "./CreditsPanel.scss";

const CreditsPanelContainer = ({ organisation, handleModalOpening }) => {
  const dispatch = useDispatch();
  const credits = useSelector((state) => state.credits.credits);
  const openSlider = useSelector((state) => state.credits.openSlider);
  const log = useSelector((state) => state.credits.log);
  const loading = useSelector((state) => state.credits.loading);

  /***** 1. Handle the opening of slides *****/
  const handleSliderOpening = (operator) => {
    // If log opens, then a dispatch request is send to get the logs
    if (operator.log && organisation.id) dispatch(getLogsByOrganisationRequest({ organisationId: organisation.id }));

    // Opens the editor for add/edit functionality
    if (operator.add || operator.edit) dispatch(addCredits(operator.add ? 0 : organisation.credits));
    dispatch(triggerSlider({ ...openSlider, ...operator }));
  };

  /***** 2. Manages component text *****/
  const editorText = openSlider.add ? "Add" : "Edit";

  /***** 3. Changes credits string into integer before updating controlled form *****/
  const handleSetCredits = (int) => {
    const newCredits = parseInt(int, 10);
    dispatch(addCredits(newCredits));
  };

  /***** 4. Handles the submition of ADD/EDIT credits *****/
  const handleConfirm = (e) => {
    e.preventDefault();

    const oldCredits = parseInt(organisation.credits, 10);
    //  Add : Edit
    const newCredits = openSlider.add ? oldCredits + credits : credits;

    const responseObj = {
      id: organisation.id,
      oldValue: oldCredits,
      credits: newCredits,
    };

    dispatch(updateCreditsRequest(responseObj));
    dispatch(
      triggerSlider({
        add: false,
        edit: false,
        log: false,
      })
    );
  };

  return (
    <CreditsPanel
      handleModalOpening={handleModalOpening}
      handleSliderOpening={handleSliderOpening}
      handleConfirm={handleConfirm}
      organisation={organisation}
      editorText={editorText}
      handleSetCredits={handleSetCredits}
      openSlider={openSlider}
      log={log}
      loading={loading}
      credits={credits}
    />
  );
};

export default CreditsPanelContainer;

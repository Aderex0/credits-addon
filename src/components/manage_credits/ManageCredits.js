// API
import { getOrganisationRequest, openModal } from "../../redux/actions/credits.action";
// Components
import Button from "../reusables/Button";
import Modal from "../reusables/Modal";
import CreditsPanel from "./CreditsPanel";
import Error from "../reusables/Error";
// React
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Styles
import "./ManageCredits.scss";

// Manage Credits(api call) => Modal({children}) => Credits Panel(child) => CreditEditor

/* Colors
  WL Orange = rgb(250, 111, 0)
  WL Teal = rgb(0, 62, 76)
*/

const ManageCredits = () => {
  const dispatch = useDispatch();
  const id = window.location.pathname.split("/")[1];
  // Organisation state
  const organisation = useSelector((state) => state.credits.organisation);
  const error = useSelector((state) => state.credits.error);

  useEffect(() => {
    if (id) dispatch(getOrganisationRequest({ id }));
  }, [id]);

  return (
    <div className="manage-credits-btn-container">
      <Button text="Manage credits" btnColor="rgb(250, 111, 0)" onClick={() => dispatch(openModal())} />
      <p>Available credits: {organisation.credits}</p>
      {/* Components displayed in modal are passed as children */}
      <Modal>{error ? <Error /> : <CreditsPanel />}</Modal>
    </div>
  );
};

export default ManageCredits;

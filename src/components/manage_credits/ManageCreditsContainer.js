// API
import { getOrganisationRequest, handleModal } from "../../redux/actions/credits.action";
// Components
import Modal from "../reusables/Modal";
import Error from "../reusables/Error";
import ManageCredits from "./interfaces/ManageCredits";
import CreditsPanelContainer from "../credits_panel/CreditsPanelContainer";
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

const ManageCreditsContainer = () => {
  const dispatch = useDispatch();
  // State
  const organisation = useSelector((state) => state.credits.organisation);
  const error = useSelector((state) => state.credits.error);

  // API call getOrganisation
  const id = window.location.pathname.split("/")[1];
  useEffect(() => {
    if (id) dispatch(getOrganisationRequest({ id }));
  }, [id]);

  // Opens Modal
  const handleModalOpening = (operator) => dispatch(handleModal(operator));

  return (
    <>
      <ManageCredits handleModalOpening={handleModalOpening} organisation={organisation} />
      <Modal>
        {error ? (
          <Error />
        ) : (
          <CreditsPanelContainer organisation={organisation} handleModalOpening={handleModalOpening} />
        )}
      </Modal>
    </>
  );
};

export default ManageCreditsContainer;

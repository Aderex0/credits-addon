// Styling
import "./Modal.scss";

const Modal = ({ children, open, setOpenModal }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal" onClick={() => setOpenModal(false)}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

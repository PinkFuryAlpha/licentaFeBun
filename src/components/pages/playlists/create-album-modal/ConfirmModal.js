import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  content: {
    background: "black",
    height: "25%",
    width: "25%",
    marginLeft: "45%",
    marginTop: "15%",
    alignItems: "center",
  },
};

Modal.setAppElement("#root");
const ConfirmModal = ({
  playlistId,
  modalQuestion,
  isOpen,
  closeModal,
  handleFunction,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => closeModal(false)}
        style={customStyles}
      >
        <p>{modalQuestion}</p>
        <div className="modal_control_buttons">
          <button
            className="submit_button modal_button_album"
            onClick={() => {
              handleFunction();
              closeModal(false);
            }}
          >
            Confirm
          </button>
          <button
            className="submit_button modal_button_album"
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmModal;

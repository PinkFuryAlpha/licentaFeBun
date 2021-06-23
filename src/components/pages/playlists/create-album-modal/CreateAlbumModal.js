import React, {useState} from "react";
import Modal from "react-modal";
import {ToastContainer, toast} from "react-toastify";
import {url} from "../../../../Constants";
import {
  FieldLabel,
  FormFieldWrapper,
  RegisterInput,
} from "../../register/RegisterElements";

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
const CreateAlbumModal = ({
  authAxios,
  isModalOpen,
  closeModal,
  setPlaylists,
}) => {
  const [albumName, setAlbumName] = useState("");

  const handleCreateAlbum = () => {
    authAxios
      .post(`${url}/playlist`, {
        name: albumName,
      })
      .then((res) => {
        closeModal(false);
        authAxios
          .get(`${url}/playlist/getUserPlaylists`)
          .then((res) => {
            setPlaylists(res.data);
          })
          .catch((error) => {
            toast.error(
              `${error.response.data.status}: ${error.response.data.message}`,
              {
                position: toast.POSITION.BOTTOM_LEFT,
              }
            );
          });
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal(false)}
        style={customStyles}
      >
        <FormFieldWrapper>
          <FieldLabel>Album Name:</FieldLabel>
          <RegisterInput
            type="text"
            placeholder="Album Name..."
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
          />
        </FormFieldWrapper>
        <div className="modal_control_buttons">
          <button
            className="submit_button modal_button_album"
            onClick={handleCreateAlbum}
          >
            Submit
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

export default CreateAlbumModal;

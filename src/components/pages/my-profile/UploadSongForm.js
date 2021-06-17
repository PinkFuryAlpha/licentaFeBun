import React, {useState, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
import {url} from "../../../Constants";
import Modal from "react-modal";
import "./MyProfile.css";
import {
  ErrorMessage,
  FieldLabel,
  FormFieldWrapper,
} from "../register/RegisterElements";

const customStyles = {
  content: {
    background: "black",
    height: "60%",
    width: "50%",
    marginLeft: "25%",
    alignItems: "center",
  },
};

const songGenres = [
  "Classical",
  "Country",
  "EDM",
  "Hip_Hop",
  "Indie_Rock",
  "Jazz",
  "K_Pop",
  "Pop",
  "Metal",
  "Rock",
  "Rhythm_Blues",
  "Techno",
];

Modal.setAppElement("#root");
const UploadSongForm = ({
  isModalOpen,
  modalHandler,
  authAxios,
  setUserSongs,
  username,
}) => {
  const [songDetails, setSongDetails] = useState(null);
  const [songPhoto, setSongPhoto] = useState(null);
  const [songFile, setSongFile] = useState(null);
  const [errors, setErrors] = useState({});
  const initialRender = useRef(true);

  const songInfoHandle = (event) => {
    setSongDetails(event.target.files[0]);
  };

  const songPhotoHandle = (event) => {
    setSongPhoto(event.target.files[0]);
  };

  const songFileHandle = (event) => {
    setSongFile(event.target.files[0]);
  };

  const formHandle = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("cover-photo", songPhoto);
      formData.append("music-file", songFile);
      formData.append("song-details", songDetails);
      const config = {
        headers: {
          "content-type": "multipart/formData",
        },
      };
      authAxios
        .post(`${url}/songs`, formData, config)
        .then((response) => {
          toast.success("Registered song succsesfully", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          authAxios
            .get(`${url}/songs/getUserSongs`, {
              params: {username: username},
            })
            .then((res) => {
              setUserSongs(res.data);
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
    } else {
      toast.error(`The Form has some errors!`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          modalHandler();
          setErrors({});
          setSongDetails({
            songName: "",
            genre: "",
          });
          initialRender.current = true;
        }}
        style={customStyles}
      >
        <h1>Song Form</h1>
        <form onSubmit={(e) => formHandle(e)}>
          <FormFieldWrapper>
            <FieldLabel>Song JSON:</FieldLabel>
            <input
              type="file"
              placeholder="Upload photo"
              onChange={songInfoHandle}
            />
            {errors.songInfo && <ErrorMessage>{errors.songInfo}</ErrorMessage>}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FieldLabel>Song Photo:</FieldLabel>
            <input
              type="file"
              placeholder="Upload photo"
              onChange={songPhotoHandle}
            />
            {errors.photoError && (
              <ErrorMessage>{errors.photoError}</ErrorMessage>
            )}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FieldLabel>Song File:</FieldLabel>
            <input type="file" onChange={songFileHandle} />
            {errors.songFileError && (
              <ErrorMessage>{errors.songFileError}</ErrorMessage>
            )}
          </FormFieldWrapper>
          <button className="submit_button" type="submit">
            Submit
          </button>
        </form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default UploadSongForm;

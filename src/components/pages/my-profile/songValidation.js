const nameRegex = /^[a-zA-Z\s]+$/;

export default function validateForm(values, songPhoto, songFile) {
  let errors = {};

  if (!values.songName) {
    errors.songName = "Song Name should not be empty.";
  } else if (!nameRegex.test(values.songName)) {
    errors.songName = "Song name should not contain special characters.";
  }

  if (!values.genre) {
    errors.genre = "There should be a genre selected for the song.";
  }

  if (!songPhoto.name.match(/.(jpg|jpeg|png)$/i) || !songPhoto){
      errors.photoError="The file doesn't have a photo format."
  }

  if (!songFile.name.match(/.(mp3)$/i) || !songFile){
    errors.songFileError="The file doesn't have a mp3 format."
}

  return errors;
}

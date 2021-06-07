const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name required";
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName = "First Name should not contain special characters";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name required";
  } else if (!nameRegex.test(values.lastName)) {
    errors.lastName = "Last Name should not contain special characters";
  }

  if (!values.username.trim()) {
    errors.username = "Username required";
  } else if (!usernameRegex.test(values.username)) {
    errors.username = "Invalid Username";
  }

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email is not valid!";
  }

  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be at least 8 characters long";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Invalid password. It should contain one special character, one upper case letter, one number at least.";
  }

  return errors;
}

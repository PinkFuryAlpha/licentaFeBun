const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function validateForm(values) {
  let errors = {};

  if (!values.password.trim()) {
    errors.password = "Field required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be at least 8 characters long";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Invalid password. It should contain one special character, one upper case letter, one number at least.";
  }

  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "Field required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!values.link.trim()) {
    errors.link = "Field required";
  }

  return errors;
}

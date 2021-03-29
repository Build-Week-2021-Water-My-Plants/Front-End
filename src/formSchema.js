import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(4, "username must be 4 chars long"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be 8 chars long"),
  phone: yup
    .string()
    .required("phone number is required")
    .min(10, "phone number must be 10 numbers long (including area code)"),
});

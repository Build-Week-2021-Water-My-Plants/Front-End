import * as yup from 'yup';

const phoneRegex = /^\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$/;

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(6, "username must be at least 6 chars long")
    .max(16, "username cannot be more than 16 chars long"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be at least 8 chars long"),
  phone: yup
    .string()
    .required("phone number is required")
    .matches(phoneRegex, "invalid phone number; provide 10 digits without spaces"),
});

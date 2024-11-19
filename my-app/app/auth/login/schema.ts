import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().trim().required("Enter email"),
  password: yup
    .string()
    .min(6, "Password must have at least 6 characters")
    .required("Enter password"),
});
export default schema;

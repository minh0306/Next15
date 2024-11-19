import * as yup from "yup";

const schema = yup.object().shape({
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("please enter phone number"),
  name: yup.string().when("$isNextClicked", {
    is: true,
    then: (schema) => schema.trim().required("Enter userName"),
  }),
  email: yup.string().when("$isNextClicked", {
    is: true,
    then: (schema) =>
      schema.email("Invalid email").trim().required("Enter email"),
  }),
  address: yup.string().when("$isNextClicked", {
    is: true,
    then: (schema) => schema.trim().required("Enter address"),
  }),
  password: yup.string().when("$isNextClicked", {
    is: true,
    then: (schema) =>
      schema
        .min(6, "Password must have at least 6 characters")
        .required("Enter password"),
  }),
});
export default schema;

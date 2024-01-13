import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username or Phone Number is required"),
  // phoneNumber: Yup.string().when("username", {
  //   is: (val) => !val,
  //   then: Yup.string().required("Phone Number is required"),
  // }),
  phoneNumber: Yup.string()
  .matches(/^\d{11}$/, "Invalid phone number")
  .required("Phone number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  dob: Yup.date().required("Date of Birth is required"),
  // password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one small letter, one cap letter, and one number"
    )
});

export default validationSchema;
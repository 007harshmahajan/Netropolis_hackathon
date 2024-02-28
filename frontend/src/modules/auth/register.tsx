import * as Yup from "yup";
import { Form, Formik } from "formik";
import { RiMailLine, RiUser3Line } from "@remixicon/react";
import { InputField, PasswordInputField } from "../../components/fields";
import { IconLabelButton } from "@/components/buttons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginPreview from "@/assets/login/login_preview.svg";
import { NumberInputField } from "@/components/fields/number-input-field";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("Please enter your first name"),
  last_name: Yup.string().required("Please enter your last name"),
  email: Yup.string()
    .email("Please use a valid email address")
    .required("Please enter your email address"),
  phone_number: Yup.string()
    .required("Please enter your phone number")
    .max(10, "Phone number must be 10 digits"),
  password: Yup.string().required("Please enter your password"),
  username: Yup.string().required("Please enter your username"),
});

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative p-5 grid grid-flow-col grid-cols-[40%_60%] overflow-hidden">
      <div className="flex flex-col justify-between">
        <div className="w-full grid grid-cols-1 px-16 pt-10">
          <div className="logo flex gap-2 items-center mb-[60px]">
            <span className="prose-t3-semibold text-neutral-5">Netropolis</span>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span className="prose-t1-bold text-black">
              Welcome To Netropolis
            </span>
            <div className="prose-t4-medium">
              <span className="text-neutral-40">Already have an account? </span>
              <Link to="/auth/login" className="text-primary-10">
                Login here
              </Link>
            </div>
          </div>

          <Formik
            initialValues={{
              email: "",
              first_name: "",
              last_name: "",
              username: "",
              password: "",
              phone_number: "",
              role: null,
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              console.log(values);
              axios
                .post("http://127.0.0.1:8000/register/", values)
                .then((response) => {
                  const data = response.data;
                  console.log(data);
                  navigate("/auth/login");
                });
            }}
          >
            <Form className="mt-7 flex flex-col gap-4">
              <div className="flex gap-2 w-full">
                <InputField
                  // InputIcon={RiUser3Line}
                  label="First Name"
                  name="first_name"
                  placeholder="Enter Your First Name"
                  required
                  className="w-full"
                />
                <InputField
                  // InputIcon={RiMailLine}
                  label="Last Name"
                  name="last_name"
                  placeholder="Enter Your Last Name"
                  className="w-full"
                  required
                />
              </div>
              <div className="flex gap-2 w-full">
                <InputField
                  InputIcon={RiUser3Line}
                  label="User Name"
                  name="username"
                  placeholder="Enter Your User Name"
                  className="w-full"
                  required
                />
                <NumberInputField
                  required
                  label="Phone Number"
                  name="phone_number"
                  placeholder="Enter your number"
                />
              </div>

              <InputField
                InputIcon={RiMailLine}
                label="Email"
                name="email"
                placeholder="johndoe@example.com"
                type="email"
                required
              />
              <PasswordInputField
                label="Password"
                name="password"
                required={true}
              />
              <IconLabelButton type="submit" label="Create Account" />
            </Form>
          </Formik>
        </div>
      </div>
      <div className="flex flex-col gap-[60px] h-[78%] bg-primary-90 border pt-[60px] pl-[60px] relative border-neutral-70 rounded-2xl text-primary-5">
        <div className="w-full h-full ">
          <img
            src={loginPreview}
            className="w-full h-full  object-left-top rounded-tl-[20px] border-l-8 border-t-8 border-primary-70"
            alt="Login app preview"
          />
        </div>
      </div>
    </div>
  );
}

import * as Yup from "yup";
import { Form, Formik } from "formik";
import { RiMailLine } from "@remixicon/react";
import { InputField, PasswordInputField } from "../../components/fields";
import { IconLabelButton } from "@/components/buttons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please use a valid email address")
    .required("Please type in your email address"),
  password: Yup.string().required("Please type in your password"),
});

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between">
      <div className="w-full grid grid-cols-1 px-16 pt-10">
        <div className="logo flex gap-2 items-center mb-[60px]">
          <span className="prose-t3-semibold text-neutral-5">Netropolis</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="prose-t1-bold text-black">Welcome Back</span>
          <div className="prose-t4-medium">
            <span className="text-neutral-40">You’re new here? </span>
            <Link to="/auth/register" className="text-primary-10">
              Create an account
            </Link>
          </div>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            axios
              .post("http://127.0.0.1:8000/login/", values)
              .then((response) => {
                const data = response.data;
                console.log(data);
                navigate("/");
              });
          }}
        >
          <Form className="mt-7 flex flex-col gap-4">
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
            <div className="flex gap-1 prose-c1-medium">
              <span className="text-neutral-40">Forgot your password?</span>
              <span className="text-success-10">Reset it here.</span>
            </div>

            <IconLabelButton type="submit" label="Sign in" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

import { IconLabelButton } from "@/components/buttons";
import { InputField } from "@/components/fields";
import InputImage from "@/components/fields/input-image";
import acitvityImg from "@/assets/activity/activity.svg";
import {
  RiCalendar2Line,
  RiHome7Line,
  RiMailLine,
  RiMessage3Line,
  RiMoneyDollarCircleLine,
  RiTextSnippet,
  RiTimeLine,
} from "@remixicon/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const activityValidationSchema = Yup.object().shape({
  user: Yup.string().email("Invalid email").required("Email is required"),
  title: Yup.string().required("Title is required"),
  image: Yup.string().required("Image is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  address: Yup.string().required("Address is required"),
  start_date: Yup.date().required("Start date is required"),
  end_date: Yup.date().required("End date is required"),
  duration: Yup.number().required("Duration is required"),
});

export default function Activity() {
  return (
    <Formik
      initialValues={{
        user: "",
        image: "",
        title: "",
        description: "",
        price: "",
        address: "",
        start_date: "",
        end_date: "",
        duration: "",
      }}
      validationSchema={activityValidationSchema}
      onSubmit={(values) => {
        axios
          .post("http://127.0.0.1:8000/activity/", values)
          .then((response) => {
            const data = response.data;
            console.log(data);
          });
      }}
    >
      <div className="mt-4">
        <div className="flex justify-center items-center w-full">
          <div className="container mx-auto my-4 px-4 xl:px-20">
            <div className="w-full p-8  my-4 lg:px-12 xl:w-9/12 xl:pl-20 xl:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-3xl">Activity</h1>
              </div>
              <Form className="grid gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <InputField
                    required
                    name="user"
                    placeholder="Enter your Email"
                    InputIcon={RiMailLine}
                    type="email"
                    label="User Email"
                  />
                  <InputField
                    required
                    name="title"
                    placeholder="Enter title for activity"
                    InputIcon={RiTextSnippet}
                    type="text"
                    label="Title"
                  />

                  <InputField
                    name="price"
                    optional
                    placeholder="Enter the Price"
                    InputIcon={RiMoneyDollarCircleLine}
                    type="number"
                    label="Price"
                  />
                  <InputField
                    name="duration"
                    optional
                    placeholder="Enter Total Duration to Complete the Task"
                    InputIcon={RiTimeLine}
                    type="number"
                    label="Duration"
                  />
                  <InputField
                    required
                    name="start_date"
                    placeholder="Enter Start Date"
                    InputIcon={RiCalendar2Line}
                    type="datetime-local"
                    label="Start Date"
                  />
                  <InputField
                    required
                    name="end_date"
                    placeholder="Enter End Date"
                    InputIcon={RiCalendar2Line}
                    type="datetime-local"
                    label="End Date"
                  />
                  <InputField
                    required
                    name="address"
                    placeholder="Enter Full Address"
                    InputIcon={RiHome7Line}
                    type="text"
                    label="Address"
                  />
                  <InputImage name="image" label="Upload Image" required />
                </div>
                <InputField
                  required
                  name="description"
                  className="w-full"
                  placeholder="Enter Full Description"
                  InputIcon={RiMessage3Line}
                  type="text"
                  label="Description"
                />
                <div className="w-full">
                  <IconLabelButton
                    label="Create Activity"
                    className="w-full"
                    type="submit"
                  />
                </div>
              </Form>
            </div>

            <div className="w-full xl:-mt-[20rem] xl:-mr-[8rem] lg:w-[40%] max-xl:hidden px-8 py-12 ml-auto bg-white rounded-2xl bg-primary-90 outline outline-offset-4 outline-primary-60 ">
              <img src={acitvityImg} />
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import loginPreview from "@/assets/login/login_preview.svg";

export default function Auth() {
  return (
    <div className="min-h-screen relative p-5 grid grid-flow-col grid-cols-[40%_60%]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <div className="flex flex-col gap-[60px] bg-primary-90 border pt-[60px] pl-[60px] relative border-neutral-70 rounded-2xl text-primary-5">
        <div className="w-full h-full ">
          <img
            src={loginPreview}
            className="w-full h-[820px] object-cover object-left-top rounded-tl-[20px] border-l-8 border-t-8 border-primary-70"
            alt="Login app preview"
          />
        </div>
      </div>
    </div>
  );
}

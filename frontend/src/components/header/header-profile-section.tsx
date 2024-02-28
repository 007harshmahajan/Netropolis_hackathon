import { useDispatch, useSelector } from "react-redux";
import { DropDown } from "../drop-down";
import { DropdownMenuItem } from "../ui/dropdown-menu.tsx";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "@/modules/auth/_redux/auth-slice.ts";

export function HeaderProfileSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, firstName, lastName } = useSelector((state) => state.auth);

  return (
    <DropDown
      buttonClassName="border-none enabled:hover:bg-neutral-100 enabled:shadow-none enabled:focus:ring-0 enabled:focus:ring-offset-0"
      dropDownlabel={
        <div className="flex">
          <div className="flex flex-col text-right mr-[10px]">
            <span className="text-sm font-semibold text-neutral-5">
              {firstName + " " + lastName}
            </span>
            <span className="text-xs text-neutral-40 font-medium">{email}</span>
          </div>
          <div className="rounded-full w-10 h-10 mr-[6px]">
            <img
              className="rounded-full w-full h-full object-contain"
              src={"/src/assets/common/blank-profile-picture.webp"}
              referrerPolicy="no-referrer"
              alt="profile"
            />
          </div>
        </div>
      }
    >
      <DropdownMenuItem
        onClick={() => {
          dispatch(logoutUser());
          navigate("/auth/login");
        }}
      >
        Logout
      </DropdownMenuItem>
    </DropDown>
  );
}

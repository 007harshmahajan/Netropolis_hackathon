import { PropsWithChildren } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { RiArrowDownSLine } from "@remixicon/react";

type DropDownProps = {
  label?: React.ReactNode | string;
  dropDownlabel: React.ReactNode | string;
  className?: string;
  dropDownIcon?: boolean;
  required?: boolean;
  optional?: boolean;
  size?: string;
  buttonClassName?: string;
  buttonLabelClassName?: string;
};

export function DropDown({
  label,
  dropDownlabel,
  dropDownIcon = true,
  children,
  required,
  optional,
  size,
  buttonClassName,
  buttonLabelClassName,
}: PropsWithChildren<DropDownProps>) {
  return (
    <div className={`flex w-full flex-col items-center gap-2 ${size}`}>
      {label && (
        <div className="prose-b2-medium text-neutral-5 flex gap-1 items-center">
          <span>{label}</span>
          {required && <span className="text-error-20">*</span>}
          {optional && (
            <span className="text-sm font-normal text-neutral-40">
              {"(optional)"}
            </span>
          )}
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className={buttonClassName}>
            <div
              className={`flex justify-between items-center w-full ${buttonLabelClassName}`}
            >
              <span className="text-neutral-40 prose-b2-medium">
                {dropDownlabel}
              </span>
              {dropDownIcon && (
                <RiArrowDownSLine size={20} className="text-neutral-40" />
              )}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>{children}</DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

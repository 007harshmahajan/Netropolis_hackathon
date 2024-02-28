import classNames from "classnames";
import { InputInfo } from "./input-field";
import { useField } from "formik";
import { useState } from "react";
import InputLabel from "@/components/fields/input-label.tsx";
import japanLogo from "@/assets/common/japan.svg";

type ContactInputFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  info?: string;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
  variant?: "outline" | "filled";
  size?: "sm" | "lg";
};
export function NumberInputField({
  label,
  name,
  placeholder,
  info = "",
  optional = false,
  required = false,
  disabled = false,
}: ContactInputFieldProps) {
  const [, { touched, error }, { setValue, setTouched }] = useField(name);
  const [number, setNumber] = useState<string>();

  return (
    <div className="flex flex-col gap-2 w-full">
      <InputLabel
        name={name}
        required={required}
        optional={optional}
        label={label}
      />
      <div className="flex relative focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-neutral-80 rounded-xl ">
        <span
          className={classNames(
            "flex whitespace-nowrap p-2.5 gap-1 w-24 items-center text-neutral-40 bg-neutral-100 rounded-l-xl prose-b2-medium",
            {
              "border border-error-30 border-r-neutral-70": touched && error,
            },
            {
              "border border-neutral-70": !(touched && error),
            }
          )}
        >
          <img src={japanLogo} alt="" className="size-5" />
          +81
        </span>
        <input
          type="number"
          name={name}
          disabled={disabled}
          className={classNames(
            "w-full ps-2.5 pe-2.5 outline-none prose-b2-regular placeholder:text-neutral-40 text-neutral-5 rounded-r-xl border-l-0 rounded-l-none",
            {
              "border border-error-30 border-l-neutral-70": touched && error,
            },
            { "border border-neutral-70": !(touched && error) }
          )}
          placeholder={placeholder}
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            setValue(e.target.value);
          }}
          onBlur={() => {
            setTouched(true, false);
          }}
        />
      </div>
      <InputInfo info={info} error={error} touched={touched} />
    </div>
  );
}

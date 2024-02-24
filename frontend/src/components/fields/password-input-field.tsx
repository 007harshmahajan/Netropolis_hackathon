import { useState } from "react";
import { InputInfo } from "./input-field";
import { Field, useField } from "formik";
import { RiEyeLine, RiEyeOffLine, RiLockLine } from "@remixicon/react";
import { getInputClassNames } from "./utils/get-input-class-names";

type PasswordInputFieldProps = {
  label: string;
  name: string;
  info?: string;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
  variant?: "outline" | "filled";
  size?: "sm" | "lg";
};
export function PasswordInputField({
  label,
  name,
  info = "",
  optional = false,
  required = false,
  disabled = false,
  variant = "outline",
  size = "lg",
}: PasswordInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [, { touched, error }, { setValue }] = useField(name);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label className="prose-b2-medium text-neutral-5 flex gap-1 items-center">
          {label}
          {required && <span className="text-error-20">*</span>}
          {optional && (
            <span className="text-sm font-normal text-neutral-40">
              {"(optional)"}
            </span>
          )}
        </label>
        <span
          className="text-neutral-40 font-semibold text-sm cursor-pointer"
          onClick={() => setValue("")}
        >
          Clear
        </span>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-neutral-40">
          <RiLockLine size={size === "sm" ? 16 : 20} />
        </div>
        <Field
          name={name}
          type={showPassword ? "text" : "password"}
          disabled={disabled}
          className={getInputClassNames({
            variant,
            touched,
            error: !!error,
            size,
          })}
          placeholder="• • • • • • • • •"
        />
        <div className="absolute inset-y-0 end-0 pe-3 flex items-center text-neutral-40">
          {!showPassword ? (
            <RiEyeLine
              size={20}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <RiEyeOffLine
              size={20}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>

      <InputInfo info={info} error={error} touched={touched} />
    </div>
  );
}

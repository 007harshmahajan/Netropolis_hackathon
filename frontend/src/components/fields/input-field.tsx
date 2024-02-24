import { RiInformationFill } from "@remixicon/react";

import { Field, useField } from "formik";
import { getInputClassNames } from "./utils/get-input-class-names";
import classNames from "classnames";
import InputLabel from "./input-label";

type InputInfoProps = {
  touched?: boolean;
  error?: string;
  info?: string;
};

export function InputInfo({ touched, error, info }: InputInfoProps) {
  return (
    <>
      {error && (touched || touched === undefined) ? (
        <div className="prose-c2-regular text-error-30 flex gap-1 items-center">
          <RiInformationFill size={16} />
          {error}
        </div>
      ) : (
        info && (
          <div className="prose-c2-regular text-neutral-50 flex gap-1 items-center">
            <RiInformationFill size={16} />
            <span className="text-neutral-30">{info}</span>
          </div>
        )
      )}
    </>
  );
}

type InputFieldProps = {
  InputIcon?: any | string;
  RightIcon?: any | string;
  label?: string;
  name: string;
  type?: string;
  placeholder: string;
  info?: string;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
  variant?: "outline" | "filled";
  size?: "sm" | "lg";
  className?: string;
  inputClassName?: string;
};

export function InputField({
  InputIcon,
  RightIcon,
  label,
  name,
  type = "text",
  placeholder,
  info = "",
  optional = false,
  required = false,
  disabled = false,
  variant = "outline",
  size = "lg",
  className,
  inputClassName,
}: InputFieldProps) {
  const { touched, error } = useField(name)[1];

  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      <InputLabel
        name={name}
        label={label}
        required={required}
        optional={optional}
      />
      <div className="relative">
        {InputIcon && (
          <div
            className={
              "absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-neutral-40"
            }
          >
            {typeof InputIcon === "string" ? (
              <img src={InputIcon} alt="icon" />
            ) : (
              <InputIcon size={size === "sm" ? 16 : 20} />
            )}
          </div>
        )}
        <Field
          type={type}
          name={name}
          disabled={disabled}
          className={getInputClassNames({
            variant,
            touched,
            error: !!error,
            size,
            className: [{ "ps-3": !InputIcon }, inputClassName],
          })}
          placeholder={placeholder}
        />
        {RightIcon && (
          <div
            className={
              "absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none text-neutral-40"
            }
          >
            {typeof RightIcon === "string" ? (
              <img src={RightIcon} alt="icon" />
            ) : (
              <RightIcon size={size === "sm" ? 16 : 20} />
            )}
          </div>
        )}
      </div>

      <InputInfo info={info} error={error} touched={touched} />
    </div>
  );
}

import { RiCloseLine, RiImageAddLine, RiImageLine } from "@remixicon/react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { useField, useFormikContext } from "formik";
import InputLabel from "./input-label";
import classNames from "classnames";
import { InputInfo } from ".";

type InputImageProps = {
  InputIcon?: any | string;
  RightIcon?: any | string;
  label?: string;
  name: string;
  optional?: boolean;
  required?: boolean;
  size?: "sm" | "lg";
  className?: string;
  info?: string;
};

export default function InputImage({
  InputIcon,
  RightIcon,
  label,
  name,
  optional = false,
  required = false,
  size = "lg",
  className,
  info,
}: InputImageProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const { setFieldValue } = useFormikContext();
  const [imageValues, setImageValues] = useState({});
  const [, { error, touched }] = useField(name);
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
        <input
          type="file"
          ref={fileRef}
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            const file = event.currentTarget?.files?.[0];
            setFieldValue(`${name}`, event.target.value);
            console.log(event.target.value);
            setImageValues(file);
          }}
        />
        {imageValues?.name ? (
          <span className="btn-secondary">
            <RiImageLine size={20} className="text-neutral-40" />
            <span className="flex gap-1.5 mx-1 items-center">
              <span className="max-w-20 truncate">{imageValues.name}</span>
              <span className="size-1 rounded-full bg-neutral-40"></span>
              <span className="text-neutral-40">
                {(imageValues.size / 1024 / 1024).toFixed(3)} MB
              </span>
            </span>
            <RiCloseLine
              size={20}
              className="text-neutral-40 cursor-pointer"
              onClick={() => {
                setFieldValue(`${name}`, "");
                setImageValues({});
              }}
            />
          </span>
        ) : (
          <Button
            onClick={() => fileRef.current?.click()}
            variant="tertiary"
            type="button"
            className={classNames({
              "border border-error-20": error && touched,
            })}
          >
            <RiImageAddLine size={20} className="text-primary-20" />
            <span className="mx-1">Upload an image</span>
          </Button>
        )}
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

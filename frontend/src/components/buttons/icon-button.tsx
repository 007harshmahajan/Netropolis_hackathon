import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { Ri24HoursFill, RiLoader4Line } from "@remixicon/react";

type RemixiconComponentType = typeof Ri24HoursFill;

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "stroke" | "ghost" | "filled";
  to?: string;
  size?: "xsm" | "sm" | "md" | "lg";
  icon: RemixiconComponentType | string;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullRadius?: boolean;
}

function getSize(size: IconButtonProps["size"] = "lg") {
  return {
    lg: 20,
    md: 20,
    sm: 18,
    xsm: 18,
  }[size];
}

export function IconButton({
  variant = "stroke",
  icon,
  to,
  onClick,
  size = "lg",
  active,
  fullRadius = true,
  disabled,
  className,
  loading,
  ...props
}: IconButtonProps) {
  const navigate = useNavigate();
  let Component;
  if (typeof icon !== "string") {
    Component = icon as RemixiconComponentType;
  }
  return (
    <button
      className={classNames(
        "flex justify-center items-center enabled:focus:ring-2 disabled:opacity-60",
        {
          "bg-neutral-100 hover:bg-neutral-90 border shadow-xsm text-neutral-40 border-neutral-70 enabled:focus:ring-offset-2 enabled:focus:ring-neutral-80":
            variant === "stroke",
          "bg-transparent border-0 text-neutral-40": variant === "ghost",
          "bg-primary-20 text-neutral-100 hover:bg-primary-10 enabled:focus:ring-offset-2 enabled:focus:ring-primary-70 disabled:bg-neutral-80 disabled:text-neutral-50":
            variant === "filled",
          "w-6 h-6 p-[3px]": size === "xsm",
          "w-7 h-7 p-[5px]": size === "sm",
          "w-9 h-9 p-2": size === "md",
          "w-10 h-10 p-2.5": size === "lg",
          "enabled:bg-primary-80 enabled:text-primary-10 enabled:border-primary-80":
            active,
          "rounded-full": fullRadius,
          "rounded-xl": size === "lg" && !fullRadius,
          "rounded-[10px]": size === "md" && !fullRadius,
          "rounded-lg": size === "sm" && !fullRadius,
          "rounded-md": size === "xsm" && !fullRadius,
        },
        className,
      )}
      disabled={disabled}
      onClick={(e) => {
        onClick && onClick(e);
        to && navigate(to);
      }}
      type="button"
      {...props}
    >
      {loading ? (
        <RiLoader4Line size={getSize(size)} className="animate-spin" />
      ) : Component ? (
        <Component size={getSize(size)} />
      ) : (
        <img src={icon as string} alt="icon" />
      )}
    </button>
  );
}

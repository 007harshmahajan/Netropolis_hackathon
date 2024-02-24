import classNames from "classnames";

export const getInputClassNames = ({
  variant,
  size,
  touched,
  error,
  className,
}: {
  variant: "outline" | "filled";
  size: "sm" | "lg";
  touched?: boolean;
  error?: boolean;
  className?: classNames.ArgumentArray;
}) =>
  classNames(
    "w-full ps-10 px-3 border text-neutral-5 enabled:shadow-xsm enabled:focus:ring-2 enabled:focus:ring-offset-2 enabled:focus:ring-neutral-80 disabled:opacity-60 outline-none pe-10",
    {
      "border-error-30": touched && error,
      "bg-neutral-100 border-neutral-70 enabled:hover:bg-neutral-80 enabled:hover:border-neutral-100":
        variant === "outline",
      "bg-neutral-80 border-neutral-80 enabled:hover:bg-neutral-100 enabled:hover:border-neutral-70":
        variant === "filled",
      "prose-c2-regular py-2 rounded-lg": size === "sm",
      "prose-b2-regular py-2.5 rounded-xl placeholder:text-neutral-40":
        size === "lg",
    },
    className,
  );

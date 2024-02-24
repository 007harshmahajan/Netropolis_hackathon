import classNames from "classnames";
import { ReactNode } from "react";
import { RiLoader4Line } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "../../components/ui/button";

export interface IconLabelButtonProps extends ButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  label: ReactNode;
  to?: string;
}

export function IconLabelButton({
  variant,
  leftIcon,
  rightIcon,
  label,
  loading,
  to,
  onClick,
  ...props
}: IconLabelButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      variant={variant}
      onClick={(e) => {
        onClick && onClick(e);
        to && navigate(to);
      }}
      {...props}
    >
      {leftIcon ||
        (loading && <RiLoader4Line size={20} className="animate-spin" />)}
      <span
        className={classNames(
          { "mr-1": leftIcon && !rightIcon },
          { "ml-1": rightIcon && !leftIcon }
        )}
      >
        {label}
      </span>
      {rightIcon}
    </Button>
  );
}

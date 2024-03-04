import React, { ReactNode } from "react";
import "./style.css";
import { HtmlAttributes } from "./types";
import Progress from "../Progress";

interface ButtonProps extends HtmlAttributes {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  styles?: string;
  variant?: "default" | "outline";
  width?: number;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  title,
  isDisabled = false,
  isLoading,
  variant = "default",
  width,
  className,
}) => {
  let buttonWrapperStyle = "";
  if (variant === "default") {
    buttonWrapperStyle = `bg-primaryColor md:min-h-[44px] h-[36px] rounded-xl text-white hover:bg-primaryColor`;
  } else if (variant === "outline") {
    buttonWrapperStyle = `md:h-[44px] h-[36px] rounded-xl text-primary border-[1px] bg-white border-borderColorSecondary hover:bg-white`;
  }

  return (
    <button
      tabIndex={1}
      disabled={isDisabled}
      onClick={onClick}
      className={`${
        className || ""
      } btn px-12 text-base ${buttonWrapperStyle} justify-center items-center whitespace-nowrap`}
      style={{ width }}
    >
      {isLoading ? <Progress /> : title}
    </button>
  );
};

import { RiArrowLeftLine, RiNotification3Line } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import LOGO from "../../../assets/logos/logo.svg";
import { HeaderProfileSection } from "./header-profile-section.tsx";
import React from "react";
import { IconButton } from "@/components/buttons";

interface TitleHeaderProps {
  children: React.ReactNode;
  backButtonText?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

function HeaderRightSection() {
  return (
    <div className="flex items-center justify-between gap-6">
      <IconButton icon={RiNotification3Line} />
      <HeaderProfileSection />
    </div>
  );
}

export const TitleHeader: React.FC<TitleHeaderProps> = ({
  children,
  backButtonText = "Back",
  leftComponent,
  rightComponent = <HeaderRightSection />,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[var(--header-width)] p-5 justify-between items-center border-b border-neutral-70 bg-neutral-100">
      <div className="flex flex-col justify-between items-start">
        <div className="flex p-[10px] justify-center items-center gap-[10px]">
          <RiArrowLeftLine
            className="w-5 h-5 text-neutral-40 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div className="text-neutral-5 text-center prose-b2-semibold">
            {backButtonText}
          </div>
          {leftComponent}
        </div>
      </div>
      <div className="flex h-6 justify-center items-center gap-2">
        {/* <img className="w-5 h-5" src={LOGO} alt="logo" /> */}
        <div className="text-neutral-5 prose-b2-semibold">{children}</div>
      </div>
      {rightComponent}
    </div>
  );
};

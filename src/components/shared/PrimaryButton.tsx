import React from "react";

interface PrimaryButtonProps {
  children?: React.ReactNode;
  customClass?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children = "Ripple Fill",
  customClass = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-primary text-white cursor-pointer rounded px-6 py-3 group ${customClass} text-center`}
    >
      <span className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-in-out z-0"></span>
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {children}
      </span>
    </div>
  );
};

export default PrimaryButton;

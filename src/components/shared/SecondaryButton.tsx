import React from "react";

interface SecondaryButtonProps {
  children?: React.ReactNode;
  customClass?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children = "Hover Me",
  customClass = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-secondary text-white cursor-pointer rounded px-3 py-2 md:px-6 md:py-3 group transition-colors duration-500 ${customClass} text-center`}
    >
      <span className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-in-out z-0"></span>
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {children}
      </span>
    </div>
  );
};

export default SecondaryButton;

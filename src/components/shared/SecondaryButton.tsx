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
    <button
      className={`relative overflow-hidden bg-secondary text-white cursor-pointer rounded px-6 py-3 group transition-colors duration-500 ${customClass}`}
    >
      <span className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-in-out z-0"></span>
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;

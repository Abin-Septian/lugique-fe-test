import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputSearch: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <input
      type="text"
      className="rounded-[20px] w-full text-center text-blueGray-500 focus:outline-none py-[13px] text-xs"
      placeholder={placeholder || "Artist / Album / Title"}
      {...props}
    />
  );
};

export default InputSearch;

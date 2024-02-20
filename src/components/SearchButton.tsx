import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded-[20px] w-full text-center text-white py-[13px] text-xs bg-white/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SearchButton;

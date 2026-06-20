import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-[#071B3B] text-white px-4 py-2 rounded-lg hover:bg-[#0A2552] transition ${className}`}
    >
      {children}
    </button>
  );
}
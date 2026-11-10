import React from "react";
import { RefreshCw } from "lucide-react";

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
}

export function FormButton({
  children,
  variant = "primary",
  loading = false,
  loadingText = "Processing...",
  icon,
  className = "",
  disabled,
  ...props
}: FormButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const variantClasses = {
    primary:
      "bg-[#FF8A24] text-white shadow-lg shadow-orange-500/25 hover:bg-[#e67718] hover:shadow-orange-500/35 active:scale-[0.99]",
    secondary:
      "bg-[#351650] text-white shadow-md hover:bg-[#241038] active:scale-[0.99]",
    outline:
      "border border-purple-900/20 bg-white text-[#351650] hover:bg-[#F7F3FC] hover:border-[#351650] active:scale-[0.99]",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <RefreshCw className="h-4 w-4 animate-spin shrink-0" />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {children}
          {icon && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
}


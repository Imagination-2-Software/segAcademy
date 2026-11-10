import React from "react";
import { AlertCircle } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

export function FormInput({
  label,
  required,
  error,
  helperText,
  id,
  className = "",
  ...props
}: FormInputProps) {
  const inputId = id || `field-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <div className="space-y-1.5" id={`container-${inputId}`}>
      <label
        htmlFor={inputId}
        className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between"
      >
        <span>
          {label} {required && <span className="text-[#FF8A24]">*</span>}
        </span>
      </label>

      <input
        id={inputId}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "border-[#E5DDF0]"
        } ${className}`}
        {...props}
      />

      {helperText && !error && (
        <p className="text-[11px] text-muted-foreground">{helperText}</p>
      )}

      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}


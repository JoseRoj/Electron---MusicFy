import React from "react";

interface InputFormProps {
  onChange: (value: string) => void;
  placeholder?: string;
  icon: React.ReactNode;
  type?: string;
}

export const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  ({ onChange, placeholder, icon, type = "text" }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          ref={ref}
          className="form-input rounded-md text-white w-full p-1 my-1 "
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {icon && (
          <div className=" absolute right-2 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    );
  },
);

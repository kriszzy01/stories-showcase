import React, { ChangeEvent } from "react";
import Icon from "./Icon";

interface InputProps {
  label: string;
  type: "text" | "password" | "number";
  value: string | number;
  name: string;
  placeholder?: string;
  toggleShowPassword?: boolean;
  error?: string;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
  handleToggleShowPassword?: () => void;
  handleBlur?: () => void;
}

const Input: React.FC<InputProps> = ({
  handler,
  label,
  error,
  handleBlur,
  handleToggleShowPassword,
  toggleShowPassword,
  ...rest
}) => {
  const EyeButton = (
    <button type="button" onClick={handleToggleShowPassword}>
      <span className="visually-hidden">
        {toggleShowPassword ? "hide password" : "show password"}
      </span>
      <Icon icon={toggleShowPassword ? "eyeOpen" : "eyeClosed"} />
    </button>
  );

  const toggleInputType = toggleShowPassword ? "text" : "password";
  const inputType = handleToggleShowPassword ? toggleInputType : rest.type;

  return (
    <div className="input">
      <label htmlFor={rest.name}>{label}</label>
      <div className="input-field">
        <input
          onChange={handler}
          {...rest}
          id={rest.name}
          type={inputType}
          onBlur={handleBlur}
        />
        {handleToggleShowPassword && EyeButton}
      </div>
      <span className="input-error-message">{error}</span>
    </div>
  );
};

export default Input;

import React from "react";

export interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  heading: string;
  subheading: string;
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  heading,
  subheading,
  children,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-header">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
      {children}
    </form>
  );
};

export default Form;

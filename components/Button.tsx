interface ButtonProps {
  label: string;
  handler?: () => void;
  variant?: "primary" | "secondary";
  type: "button" | "submit";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  type = "button",
  size = "medium",
  handler,
}) => {
  return (
    <button
      type={type}
      onClick={handler}
      className={`button button-${variant} button-${size}`}
    >
      {label}
    </button>
  );
};

export default Button;

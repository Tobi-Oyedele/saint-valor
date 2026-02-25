import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  size?: "sm" | "md";
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loadingText?: string;
};

const Button = ({
  label,
  size = "md",
  variant = "primary",
  fullWidth = false,
  loading = false,
  type = "button",
  disabled = false,
  loadingText,
  ...rest
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full cursor-pointer transition disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-10 py-3 text-sm sm:text-base",
    md: "px-4 py-3 text-sm font-medium",
  };

  const variantStyles = {
    primary: "bg-gold text-ivory",
    outline: "bg-white text-gold",
  };

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
      )}
    >
      {loading ? loadingText || "Please wait..." : label}
    </button>
  );
};

export default Button;

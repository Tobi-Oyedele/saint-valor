import clsx from "clsx";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  label: string;
  size: "sm" | "md";
  variant: "primary" | "outline";
  fullWidth?: boolean;
};

const LinkButton = ({
  href,
  label,
  size,
  variant,
  fullWidth = false,
}: LinkButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full cursor-pointer";

  // Size styles
  const sizeStyles = {
    sm: "px-10 py-3 text-sm sm:text-base", // mobile button
    md: "px-4 py-3 text-xs font-semibold", // hero buttons
  };

  const variantStyles = {
    primary: "bg-gold text-ivory",
    outline: "border border-gold bg-transparent text-gold",
  };

  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
      )}
    >
      {label}
    </Link>
  );
};

export default LinkButton;

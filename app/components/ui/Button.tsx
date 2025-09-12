import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "black";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Generic button component that renders either an anchor (Next.js Link) or a <button>.
 * – primary: solid orange background on yellow theme
 * – secondary: outlined style
 */
const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold capitalize transition-colors duration-200 rounded-md  tracking-wide font-sans text-lg";
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base lg:text-lg",
    lg: "px-12 py-6 text-xl",
  };

  const variants: Record<string, string> = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-400/80",
    secondary:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400/80 hover:text-black",
    white:
      "bg-transparent border border-yellow-400 text-white hover:bg-yellow-400/80 hover:text-black",
    black: "border border-black text-black hover:bg-black/80 hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};

export default Button;

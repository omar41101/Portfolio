"use client";
import { useState } from "react";
import type React from "react";

import Loader from "./loader";
interface LoadingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  loadingText?: string;
  disabled?: boolean;
}

const LoadingButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  loadingText = "Loading...",
  disabled = false,
}: LoadingButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (onClick && !isLoading && !disabled) {
      setIsLoading(true);
      try {
        await onClick();
      } finally {
        // Simulate minimum loading time for better UX
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
  };

  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const variantClasses = {
    primary:
      "bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600",
    secondary:
      "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white",
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading || disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? (
        <>
          <Loader size={16} className="text-current" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;

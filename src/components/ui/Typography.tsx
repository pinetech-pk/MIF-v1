// src/components/ui/Typography.tsx - Reusable typography components
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// Heading Components (Montserrat)
export const H1 = ({ children, className }: TypographyProps) => (
  <h1
    className={cn(
      "font-montserrat text-heading-3xl font-bold text-gray-900",
      className
    )}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className }: TypographyProps) => (
  <h2
    className={cn(
      "font-montserrat text-heading-2xl font-bold text-gray-900",
      className
    )}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className }: TypographyProps) => (
  <h3
    className={cn(
      "font-montserrat text-heading-xl font-bold text-gray-900",
      className
    )}
  >
    {children}
  </h3>
);

export const H4 = ({ children, className }: TypographyProps) => (
  <h4
    className={cn(
      "font-montserrat text-heading-lg font-semibold text-gray-900",
      className
    )}
  >
    {children}
  </h4>
);

export const H5 = ({ children, className }: TypographyProps) => (
  <h5
    className={cn(
      "font-montserrat text-heading-md font-semibold text-gray-900",
      className
    )}
  >
    {children}
  </h5>
);

export const H6 = ({ children, className }: TypographyProps) => (
  <h6
    className={cn(
      "font-montserrat text-heading-sm font-semibold text-gray-900",
      className
    )}
  >
    {children}
  </h6>
);

// Body Text Components (Nunito)
export const P = ({ children, className }: TypographyProps) => (
  <p
    className={cn(
      "font-nunito text-body-base text-gray-700 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);

export const PLarge = ({ children, className }: TypographyProps) => (
  <p
    className={cn(
      "font-nunito text-body-lg text-gray-700 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);

export const PSmall = ({ children, className }: TypographyProps) => (
  <p
    className={cn(
      "font-nunito text-body-sm text-gray-600 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);

// Special Components
export const Lead = ({ children, className }: TypographyProps) => (
  <p
    className={cn(
      "font-nunito text-body-xl text-gray-600 leading-relaxed",
      className
    )}
  >
    {children}
  </p>
);

export const Muted = ({ children, className }: TypographyProps) => (
  <p className={cn("font-nunito text-body-sm text-gray-500", className)}>
    {children}
  </p>
);

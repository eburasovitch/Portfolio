import type { ReactNode } from "react";

interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface BackgroundElementProps {
  position: Position;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "custom";
  shape?: "circle" | "square";
  color?: "blue" | "purple" | "green" | "red" | "yellow" | "pink" | "white";
  customBackground?: string; // 🔹 pour dégradé personnalisé
  opacity?: "low" | "medium" | "high";
  animation?: "none" | "float";
  blur?: "none" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  className?: string;
}

export const BackgroundElement = ({
  position,
  size = "md",
  shape = "circle",
  color = "blue",
  customBackground,
  opacity = "medium",
  animation = "float",
  blur = "md",
  children,
  className = ""
}: BackgroundElementProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
    "2xl": "w-64 h-64",
    custom: "" // tu définis la taille via className
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-none"
  };

  const colorClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    pink: "bg-pink-500",
    white: "bg-white"
  };

  const opacityClasses = {
    low: "opacity-10",
    medium: "opacity-20",
    high: "opacity-30"
  };

  const animationClasses = {
    none: "",
    float: "animate-float"
  };

  const blurClasses = {
    none: "",
    sm: "blur-sm",
    md: "blur-md",
    lg: "blur-lg",
    xl: "blur-xl"
  };

  const positionStyle = {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right
  };

  return (
    <div
      className={`
        absolute pointer-events-none
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${opacityClasses[opacity]}
        ${animationClasses[animation]}
        ${blurClasses[blur]}
        ${className}
      `}
      style={{
        ...positionStyle,
        background: customBackground ? customBackground : colorClasses[color]
      }}
    >
      {children}
    </div>
  );
};

export const BackgroundGroup = ({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    {children}
  </div>
);

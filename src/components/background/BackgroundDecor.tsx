// src/components/background/BackgroundDecorator.tsx
import type { ReactNode } from "react";
import { BackgroundGroup, BackgroundElement } from "./CustomBackgroundElements";

interface BackgroundDecoratorProps {
  variant?: "bubblesGradient" | "stripes" | "bubblesMinimal"; // 🔹 ajout "bubblesMinimal"
  children?: ReactNode;
  className?: string;
}

const BackgroundDecorator = ({
  variant = "bubblesGradient",
  children,
  className = ""
}: BackgroundDecoratorProps) => {
  const renderBackground = () => {
    switch (variant) {
      case "bubblesGradient":
        return (
          <BackgroundGroup>
            {/* Grandes boules avec dégradé linéaire */}
            <BackgroundElement
              position={{ top: "10%", left: "5%" }}
              size="2xl"
              shape="square"
              opacity="low"
              blur="xl"
              customBackground="linear-gradient(135deg, #1DCF8E 0%, #5AE4AA 100%)"
            />
            <BackgroundElement
              position={{ top: "30%", left: "70%" }}
              size="2xl"
              shape="square"
              opacity="low"
              blur="xl"
              customBackground="linear-gradient(135deg, #5AE4AA 0%, #1DCF8E 100%)"
            />
            <BackgroundElement
              position={{ bottom: "20%", left: "30%" }}
              size="2xl"
              shape="square"
              opacity="low"
              blur="xl"
              customBackground="linear-gradient(135deg, #1DCF8E 0%, #5AE4AA 100%)"
            />
            <BackgroundElement
              position={{ bottom: "50%", right: "10%" }}
              size="2xl"
              shape="square"
              opacity="low"
              blur="xl"
              customBackground="linear-gradient(135deg, #5AE4AA 0%, #1DCF8E 100%)"
            />

            {/* Boules plus petites */}
            <BackgroundElement
              position={{ top: "50%", left: "50%" }}
              size="xl"
              shape="square"
              opacity="medium"
              blur="md"
              customBackground="linear-gradient(135deg, #1DCF8E 0%, #5AE4AA 100%)"
            />
            <BackgroundElement
              position={{ top: "70%", left: "80%" }}
              size="lg"
              shape="square"
              opacity="medium"
              blur="md"
              customBackground="linear-gradient(135deg, #5AE4AA 0%, #1DCF8E 100%)"
            />
            <BackgroundElement
              position={{ bottom: "10%", right: "60%" }}
              size="lg"
              shape="square"
              opacity="medium"
              blur="md"
              customBackground="linear-gradient(135deg, #1DCF8E 0%, #5AE4AA 100%)"
            />
          </BackgroundGroup>
        );

      case "bubblesMinimal": // 🔹 Nouveau fond plus discret
        return (
          <BackgroundGroup>
            {/* Deux grandes formes espacées */}
            <BackgroundElement
              position={{ top: "15%", left: "15%" }}
              size="2xl"
              shape="square"
              opacity="low"
              blur="xl"
              customBackground="linear-gradient(135deg, #1DCF8E 0%, #5AE4AA 100%)"
            />
            <BackgroundElement
              position={{ bottom: "15%", right: "20%" }}
              size="2xl"
              shape="square"
              opacity="low"
              blur="xl"
              customBackground="linear-gradient(135deg, #5AE4AA 0%, #1DCF8E 100%)"
            />

            {/* Une petite forme subtile */}
            <BackgroundElement
              position={{ top: "60%", left: "70%" }}
              size="lg"
              shape="square"
              opacity="low"
              blur="md"
              customBackground="linear-gradient(135deg, #1DCF8E 0%, #5AE4AA 100%)"
            />
          </BackgroundGroup>
        );

      case "stripes":
        return (
          <BackgroundGroup>
            {/* Traits diagonaux */}
            <BackgroundElement
              position={{ top: "0", left: "0" }}
              size="custom"
              shape="square"
              color="white"
              opacity="low"
              blur="sm"
              className="w-px h-full rotate-45"
            />
            <BackgroundElement
              position={{ top: "0", left: "15%" }}
              size="custom"
              shape="square"
              color="white"
              opacity="low"
              blur="sm"
              className="w-px h-full rotate-45"
            />
            <BackgroundElement
              position={{ top: "0", left: "30%" }}
              size="custom"
              shape="square"
              color="white"
              opacity="low"
              blur="sm"
              className="w-px h-full rotate-45"
            />
          </BackgroundGroup>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {renderBackground()}
      {children}
    </div>
  );
};

export default BackgroundDecorator;

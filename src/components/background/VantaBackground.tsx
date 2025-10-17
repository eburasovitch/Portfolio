import React, { useEffect, useState } from "react";
import VantaBackgroundLight from "./VantaBackgroundLight";
import VantaBackgroundDark from "./VantaBackgroundDark";

const VantaBackground: React.FC = () => {
  const [isDark, setIsDark] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDark ? <VantaBackgroundDark /> : <VantaBackgroundLight />;
};

export default VantaBackground;

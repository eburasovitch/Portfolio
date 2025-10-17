import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VantaBackgroundDark: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    (window as any).THREE = THREE;

    const initVanta = () => {
      const VANTA = (window as any).VANTA;
      if (VANTA && vantaRef.current) {
        vantaEffect.current = VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          color: 0x1DCF8E,
          color2: 0xffffff,
          backgroundColor: 0x181818,
          showLines: false,
        });
      }
    };

    let script: HTMLScriptElement;
    if (!(window as any).VANTA) {
      script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.dots.min.js";
      script.async = true;
      script.onload = initVanta;
      document.body.appendChild(script);
    } else {
      initVanta();
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      if (script) document.body.removeChild(script);
    };
  }, []);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default VantaBackgroundDark;

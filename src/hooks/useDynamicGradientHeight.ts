
import { useEffect, useRef, useState } from "react";

export const useDynamicGradientHeight = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [gradientHeight, setGradientHeight] = useState<string>("7rem");

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current && window.innerWidth < 768) {
        const textHeight = textRef.current.getBoundingClientRect().height;
        // Add extra padding (2rem = 32px) for better visual spacing
        const dynamicHeight = textHeight + 32;
        setGradientHeight(`${dynamicHeight}px`);
      } else {
        // Desktop: use default height
        setGradientHeight("7rem");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { textRef, gradientHeight };
};

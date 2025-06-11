"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedRevealText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const animate = () => {
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;

        span.style.display = "inline-block";
        return span;
      });

      container.innerHTML = "";
      chars.forEach((charSpan) => container.appendChild(charSpan));

      return gsap.from(chars, {
        duration: 0.6,
        yPercent: () => gsap.utils.random(-150, 150),
        xPercent: () => gsap.utils.random(-150, 150),
        stagger: {
          from: "random",
          amount: 0.6,
        },
        ease: "power3.out",
      });
    };

    const loop = () => {
      animate().eventCallback("onComplete", () => {
        setTimeout(() => {
          loop(); // Restart animation
        }, 2000); // Wait 2 seconds before repeating
      });
    };

    loop();

    return () => {
      gsap.killTweensOf(container);
    };
  }, [text]);

  return (
    <div className="w-full">
      <p
        ref={containerRef}
        className="text-sm text-gray-700 select-none"
        aria-label={text}
      />
    </div>
  );
};

export default AnimatedRevealText;

import React from "react";
import { useSprings, animated } from "@react-spring/web";

function TypingText({ text, className }) {
  const letters = text.split("");

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      delay: i * 50,  // harf ketma-ketligi bo'yicha kechikish
      config: { tension: 120, friction: 14 },
    }))
  );

  return (
    <p className={className} style={{ margin: 0 }}>
      {springs.map((props, i) => (
        <animated.span key={i} style={props}>
          {letters[i] === " " ? "\u00A0" : letters[i]}
        </animated.span>
      ))}
    </p>
  );
}

export default TypingText;

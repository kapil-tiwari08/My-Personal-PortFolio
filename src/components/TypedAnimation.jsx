import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedAnimation = () => {
  // Reference for the element where the text will be displayed
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={kapil}></span>
    </div>
  );
};

export default TypedAnimation;

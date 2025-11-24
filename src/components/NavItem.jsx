import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const NavItem = ({ text }) => {
  const element = useRef(null);
  const split = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // Split only this element
    split.current = new SplitText(element.current, {
      type: "chars",
    });

    tl.current = gsap.timeline({ paused: true }).fromTo(
      split.current.chars,
      { y: 0 },
      {
        y: 10,
        duration: 0.4,
        stagger: 0.03,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <h1
      ref={element}
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.reverse()}
      className="cursor-pointer overflow-hidden"
    >
      {text}
    </h1>
  );
};

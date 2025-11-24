import { forwardRef, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sec4 = forwardRef((props, ref) => {
  const maskRectRef = useRef(null);

  useLayoutEffect(() => {
    const maskRect = maskRectRef.current;

    gsap.fromTo(
      maskRect,
      { width: "0%" }, // start hidden
      {
        width: "100%", // final full reveal
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full flex justify-center items-center overflow-hidden"
      style={{
        backgroundColor: "#facc15", // YELLOW BG
        WebkitMask: "url(#parentMask)",
        mask: "url(#parentMask)",
      }}
    >
      {/* Foreground Content */}
      <h1 className="text-5xl font-bold text-black z-20">Sec4</h1>

      {/* SVG MASK OVERLAY */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wavy distortion filter */}
          <filter id="displacementFilterSec4">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="40"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Left → Right Rectangle Mask */}
          <mask id="parentMask">
            <rect
              ref={maskRectRef}
              x="0"
              y="0"
              width="0%"        // GSAP animates this
              height="100%"
              fill="white"
              style={{ filter: "url(#displacementFilterSec4)" }}
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
});

export default Sec4;

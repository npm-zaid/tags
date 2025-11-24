import React, { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import img1 from "../assets/bussines/american-express-color-2.png";
import img2 from "../assets/bussines/asignpaint-color.webp";
import img3 from "../assets/bussines/Awesome-Assam-color.webp";
import img4 from "../assets/bussines/gartner-color.webp";
import img5 from "../assets/bussines/unionpay-color.png";
import img6 from "../assets/bussines/volvo-color.webp";
import img7 from "../assets/bussines/tefal-color.webp";
import img8 from "../assets/bussines/swiss-color.webp";
import img9 from "../assets/bussines/suzuki-color.webp";
import img10 from "../assets/bussines/shrm-color.webp";
import img11 from "../assets/bussines/npcl-color.webp";
import img12 from "../assets/bussines/microsoft-color.webp";
import img13 from "../assets/bussines/lufthansa-color.webp";
import img14 from "../assets/bussines/hitachi-black.webp";

const Sec2 = forwardRef((props, ref) => {
  const trackRef = useRef(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14,
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14
  ];

  useEffect(() => {
    const track = trackRef.current;

    gsap.to(track, {
      x: 700,
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    });

    gsap.fromTo(
      ".logo-box",
      { scale: 0 },
      {
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: track,
          start: "top 90%"
        }
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="sec2 h-[50vh] w-full bg-white flex flex-col items-center justify-center relative"
    >
      <h1 className="text-2xl font-bold mb-6">
        Over <span className="text-[#6A5C98]">20+ businesses</span> growing with Tags
      </h1>

      <div className="relative overflow-hidden w-[90%] p-8">

        {/* LEFT BLUR BOX */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-md pointer-events-none z-20"></div>

        {/* RIGHT BLUR BOX */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent backdrop-blur-md pointer-events-none z-20"></div>

        <div ref={trackRef} className="box-container flex gap-6 relative z-10">
          {images.map((src, i) => (
            <div
              key={i}
              className="logo-box h-20 w-40 flex-shrink-0 transform -translate-x-[70vw]"
            >
              <img src={src} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
});

export default Sec2;

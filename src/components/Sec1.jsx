
import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button";
import left from '../assets/ctr.svg'  
import right from '../assets/impression.svg'  
import middle from '../assets/realtime.svg'  

gsap.registerPlugin(SplitText, ScrollTrigger);

const Sec1 = forwardRef((props, ref) => {
  const comp = useRef(null);

  const bigRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
     
      const split = new SplitText(".sec1-title", {
        type: "words, chars",
        charsClass: "inline-block",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 3,
        ease: "power3.out",
      });

  
      gsap.from(".demo-btn", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

    
      gsap.from(bigRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotate: 4,
        duration: 1.3,
        ease: "power3.out",
      });

     
      gsap.fromTo(
        [leftRef.current, rightRef.current],
        {
          scale: 0.4,
          opacity: 0,
          filter: "blur(25px)",
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bigRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          stagger: 0.1,
        }
      );

      gsap.to(bigRef.current, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: bigRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
        
        },
      });
    },
    { scope: comp }
  );

  return (
    <div
      ref={(el) => {
        comp.current = el;
        if (ref) ref.current = el;
      }}
      className="min-h-screen relative flex flex-col gap-4 justify-center items-center pt-[15vh]"
    >
      <div className="flex  flex-col items-center justify-center gap-7 overflow-hidden p-8">
        <h1
          className="
            sec1-title 
            sm:text-[4.5vw] text-[10vw] sm:leading-[5vw] leading-[10vw]  tracking-wide py-2
            sm:w-[50vw] text-center 
            overflow-hidden inline-block
          "
        >
          <span className="text-[#E39F4A] mr-3">Targeting</span>
          Audience with Granular Segmentation
        </h1>

        <div className="demo-btn">
          <Button>Request Demo</Button>
        </div>
      </div>

      <div className="w-full relative p-8 z-30">
        {/* BIG IMAGE */}
        <div ref={bigRef} className="sm:w-[60vw] m-auto sec1-card">
          <img
            className="w-full h-full object-fill"
            src={middle}
            alt=""
          />
        </div>

        {/* LEFT IMAGE */}
        <img
          ref={leftRef}
          className="sm:w-[20vw] w-1/3 absolute top-[5vw] sm:left-[5vw] left-[0vw]"
          src={left}
          alt=""
        />

        {/* RIGHT IMAGE */}
        <img
          ref={rightRef}
          className="sm:w-[20vw] w-1/3 absolute sm:top-[8vw] top-[5vw] sm:right-[5vw] right-0"
          src={right}
          alt=""
        />
      </div>

<div className="absolute top-0 -left-40  z-0 w-96 h-96 bg-[#DDE5BC] rounded-full blur-3xl"></div>
<div className="absolute bottom-0 -right-40 z-0 w-96 h-96 bg-[#A39BBE] rounded-full blur-3xl "></div>
     
    </div>
  );
});

export default Sec1;

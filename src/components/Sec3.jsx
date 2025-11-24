import { forwardRef, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tilty from "react-tilty";

gsap.registerPlugin(ScrollTrigger);

const Sec3 = forwardRef((props, ref) => {
  const boxRef = useRef();

  useGSAP(
    () => {
      const cards = boxRef.current?.children;
      if (!cards || cards.length === 0) return;

      gsap.from(cards, {
        y: 150,
        opacity: 0,
        scale: 0.8,
        rotate: -4,
        duration:3,
       ease: "elastic.out(1,0.3)",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col gap-20 justify-center items-center px-4"
    >
      <h1 className="text-4xl font-bold text-center">
        How Clients{" "}
        <span className="bg-gradient-to-r from-[#EDAC00] to-[#D58C00] rounded-full px-6 py-2 text-white">
          WIN
        </span>{" "}
        with Tags
      </h1>

      
      <div
        ref={boxRef}
        className="w-full grid grid-cols-[2fr_1fr_1fr] gap-8"
      >
        
        <Tilty
          max={15}
          glare={true}
          maxGlare={0.4}
          className="box h-[65vh] rounded-xl bg-[#ADA2CC] shadow-xl p-6 cursor-pointer group"
        >
          <div className="flex flex-col h-full w-full ">
           
            <div className="overflow-hidden rounded-lg">
              <img
              className="h-[80%] w-full object-cover rounded-lg mb-4 group-hover:scale-110 transition-all duration-200"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />
            </div>

            <h1 className="text-2xl font-bold mb-2">
              Media Planning & Buying
            </h1>

            <p className="text-base max-w-[80%] opacity-80">
              "Tags transformed our campaign strategy, leading to a 30%
              increase in conversions."
            </p>
          </div>
        </Tilty>

       
     <Tilty
          max={15}
          glare={true}
          maxGlare={0.4}
          className="box h-[65vh] rounded-xl bg-[#8EC5FF] shadow-xl p-6 cursor-pointer group"
        >
          <div className="flex flex-col h-full w-full ">
           
            <div className="overflow-hidden rounded-lg">
              <img
              className="h-[80%] w-full object-cover  mb-4 group-hover:scale-110 transition-all duration-200"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />
            </div>

            <h1 className="text-2xl font-bold mb-2">
              Analytics
            </h1>

            <p className="text-base max-w-[80%] opacity-80">
              Oplifi turns data into action—optimising performance and driving growth
            </p>
          </div>
        </Tilty>

       
      <Tilty
          max={15}
          glare={true}
          maxGlare={0.4}
          className="box h-[65vh] rounded-xl bg-[#BFD176] shadow-xl p-6 cursor-pointer group"
        >
          <div className="flex flex-col h-full w-full ">
           
            <div className="overflow-hidden rounded-lg">
              <img
              className="h-[80%] w-full object-cover rounded-lg mb-4 group-hover:scale-110 transition-all duration-200"
              src="https://yaapcampaign.blob.core.windows.net/oplifi/clinet/media.png"
              alt=""
            />
            </div>

            <h1 className="text-2xl font-bold mb-2">
              Affiliate Marketing
            </h1>

            <p className="text-base max-w-[80%] opacity-80">
            Oplifi drives performance-led affiliate marketing to boost conversions and ROI.
            </p>
          </div>
        </Tilty>
      </div>
    </div>
  );
});

export default Sec3;

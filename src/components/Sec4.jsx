import { useGSAP } from "@gsap/react";
import { forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button";
import dash from '../assets/dashboard.png'

gsap.registerPlugin(ScrollTrigger);

const Sec4 = forwardRef((props, ref) => {
  useGSAP(
    () => {
      gsap.from(".visionContent1", {
        x: -80,
        filter: "blur(20px)",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 2,
        },
      });

      gsap.from(".visionContent2", {
        x: 80,
        filter: "blur(20px)",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "top 40%",
          scrub: 2,
        },
      });
    },
    { scope: ref } 
  );

  return (
    <div
      ref={ref}
      className="h-screen bg-white flex justify-center gap-4 items-center overflow-hidden p-3"
    >
      <section className="bg-[#F5F8FF] rounded-lg p-6 sm:gap-4 gap-16 my-14 flex sm:flex-row flex-col overflow-hidden">
        <div className="w-full visionContent1 flex flex-col sm:gap-5 gap-4">
          <div>
            <h1 className="sm:text-[3.4vw] text-[8vw] font-semibold leading-6">
              Tags Insights
            </h1>
            <h1 className="sm:text-[3.4vw] text-[8vw] font-semibold">
              Dashboard
            </h1>
            <p className="w-2/3">
              Transform your campaign analysis with an interactive dashboard
              built for action—delivering real-time insights.
            </p>
          </div>
          <Button className="demo-btn">Request Demo</Button>
        </div>

        <div className="w-full visionContent2 sm:text-2xl text-xl font-semibold flex flex-col gap-10">
          <img
            className="w-full h-full object-fill"
            src={dash}
            alt="dashboard"
          />
        </div>
      </section>
    </div>
  );
});

export default Sec4;

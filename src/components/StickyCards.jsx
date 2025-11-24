import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((c, i) => {
      if (i < cards.length - 1) {
        const inner = c.querySelector(".card-inner");

        gsap.fromTo(
          inner,
          {
            y: "0%",
            z: 0,
            rotationX: 0,
          },
          {
            y: "-50%",
            z: -250,
            rotationX: 45,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 70%",
              end: "top -80%",
              scrub: true,
              pin: c, // works now because it exists in DOM
              pinSpacing: true,
            },
          }
        );
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="relative w-full bg-amber-950 min-h-[400vh]">
      <div className="card h-screen flex items-center justify-center" id="c1">
        <div className="card-inner bg-amber-500 w-[80%] h-[80%] rounded-xl"></div>
      </div>

      <div className="card h-screen flex items-center justify-center" id="c2">
        <div className="card-inner bg-amber-300 w-[80%] h-[80%] rounded-xl"></div>
      </div>

      <div className="card h-screen flex items-center justify-center" id="c3">
        <div className="card-inner bg-orange-600/40 w-[80%] h-[80%] rounded-xl"></div>
      </div>
    </section>
  );
};

export default StickyCards;

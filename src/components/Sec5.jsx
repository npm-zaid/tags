import React, { useEffect , forwardRef } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Sec5 = forwardRef((props, ref) => {
  const stats = [
    {
      id: 1,
      title: "Emotion led, experience driven",
      desc: "storytelling meets data driven tech, driving higher recall for brands.",
      bg: "from-[#A88FE8] to-[#8D79D9]",
    },
    {
      id: 2,
      title: "Precision targeting, higher impact",
      desc: "From awareness to impact – measured clearly across all devices.",
      bg: "from-[#72C8E8] to-[#57B5D4]",
    },
    {
      id: 3,
      title: "Premium curated ad – inventory",
      desc: "Exclusive supply of leading publishers for targeted ads and placements.",
      bg: "from-[#C7DE70] to-[#A4C95A]",
    },
    {
      id: 4,
      title: "Brand safety, viewability & measurement",
      desc: "A combination of machine learning and big data to analyze videos.",
      bg: "from-[#F2A255] to-[#DD852E]",
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    const rotations = [-10, 8, -6, 6];

    cards.forEach((card, i) => {
      gsap.set(card, {
        y: window.innerHeight,
        rotate: rotations[i],
      });
    });

    ScrollTrigger.create({
      trigger: ".sticky--cards",
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true, 
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const total = cards.length;
        const interval = 1 / total;

        cards.forEach((card, index) => {
          const start = index * interval;
          let p = (progress - start) / interval;
          p = Math.min(Math.max(p, 0), 1);

          let y = window.innerHeight * (1 - p);
          let x = 0;

          if (p === 1 && index < total - 1) {
            const rem =
              (progress - (start + interval)) / (1 - start + interval);
            if (rem > 0) {
              const m = 1 - index * 0.15;
              x = -window.innerWidth * 0.3 * m * rem;
              y = -window.innerHeight * 0.3 * m * rem;
            }
          }

          gsap.set(card, { x, y });
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={ref}
      id="Sec5"
      className="h-screen sticky--cards  pt-3 relative overflow-hidden"
    >
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 text-center my-6"> Our {" "} <span className="bg-gradient-to-b from-black  to-[#FF6100] italic text-transparent bg-clip-text"> Creative </span>{" "} blueprint </h2>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`card inline-block bg-gradient-to-b ${stat.bg} p-6 sm:w-[28vw] w-[70vw] sm:h-[60vh] h-[55vh]
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          rounded-3xl shadow-2xl`}
        >
          <div className="flex flex-col gap-6">
            <div className="bg-white/30 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-md">
              <Eye className="text-white w-8 h-8" />
            </div>

            <h4 className="text-3xl font-semibold text-white leading-tight">
              {stat.title}
            </h4>

            <p className="text-white/80 text-base leading-normal">
              {stat.desc}
            </p>

           
          </div>
        </div>
      ))}
    </div>
  );
});

export default Sec5;

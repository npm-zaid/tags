import React, { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { forwardRef } from "react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(SplitText);

const data = [
   {
    title: "Honda",
    desc: "Redefining Awareness through Digital Precision for the Honda Hornet CB 160R.",
    downloads: "100M+",
    adoption: "80%",
    img: "https://yaapcampaign.blob.core.windows.net/oplifi/casestudies/honda.jpeg",
  },
  {
    title: "BHIM",
    desc: "Revolutionizing digital payments, empowering millions across India through UPI adoption.",
    downloads: "100M+",
    adoption: "90%",
    img: "https://yaapcampaign.blob.core.windows.net/oplifi/casestudies/bhim.jpeg",
  },
  {

    title: " Exide",
    desc: "Powering the future of mobility with advanced battery innovations for automotive and industrial sectors.",
    downloads: "50M+",
    adoption: "65%",
    img: "https://yaapcampaign.blob.core.windows.net/oplifi/casestudies/excide.jpg",
  },
  {
    
    title: "Motorola",
    desc: "Connecting Gen Z audiences with creative influencer collaborations across social platforms.",
    downloads: "75M+",
    adoption: "5x",
    img: "https://yaapcampaign.blob.core.windows.net/oplifi/casestudies/motorola.jpeg",
  },
];

const Carousel = forwardRef((props, ref) => {
  const cardRefs = useRef([]);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const splitTitle = new SplitText(titleRef.current, { type: "chars" });

    gsap.from(splitTitle.chars, {
      opacity: 0,
      y: 25,
      stagger: 0.04,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

 
  const animateCard = (index) => {
    const el = cardRefs.current[index];
    if (!el) return;

    const split = new SplitText(
      el.querySelector(".card-title"),
      { type: "chars" }
    );

    gsap.fromTo(
      el,
      { opacity: 0, y: 100, rotateX: -15, scale: 0.8, filter: "blur(20px)" },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power4.out",
      }
    );

    
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.03,
      duration: 1,
      ease: "power3.out",
      delay: 0.1,
    });
  };

  return (
    <div ref={ref} className=" py-20 px-4 flex flex-col gap-10 items-center">

     
      <h1
        ref={titleRef}
        className="text-6xl font-bold text-zinc-800 tracking-tight"
      >
        Featured Work
      </h1>

      <p className="max-w-xl text-center text-zinc-500 ">
        Discover how we transform visions into digital realities, creating
        success stories that redefine industry benchmarks.
      </p>

      <div className="relative w-full max-w-6xl">

        
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => animateCard(swiper.activeIndex)}
         
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                ref={(el) => (cardRefs.current[i] = el)}
                className="bg-zinc-200/80 border border-zinc-200 flex items-center rounded-3xl shadow-xl p-12 gap-10"
              >
                
                <div className="w-1/2 flex flex-col gap-5">
                  <h1 className="card-title text-5xl font-bold text-zinc-900">
                    {item.title}
                  </h1>

                  <p className="card-title text-zinc-500">{item.desc}</p>

                  <div className="flex gap-12 mt-4">
                    <div>
                      <h2 className="text-4xl font-bold text-zinc-800">
                        {item.downloads}
                      </h2>
                      <p className="text-sm text-zinc-500">
                        Downloads Driven
                      </p>
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-zinc-800">
                        {item.adoption}
                      </h2>
                      <p className="text-sm text-zinc-500">
                        User Adoption Rate
                      </p>
                    </div>
                  </div>

                  <button className="px-7 py-3 mt-5 border border-zinc-800 rounded-full hover:bg-zinc-900 hover:text-white transition-all">
                    Case Study →
                  </button>
                </div>

               
                <div className="w-1/2">
                  <img
                    src={item.img}
                    className="rounded-3xl w-full h-[300px] object-cover shadow-xl"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
        <button className="prev-btn z-50 absolute top-1/2 -left-7 -translate-y-1/2 bg-zinc-200 border border-zinc-400 p-3 rounded-full shadow hover:scale-110 active:scale-90 transition">
          <ArrowLeft />
        </button>

        <button className="next-btn z-50 absolute top-1/2 -right-7 -translate-y-1/2 bg-zinc-200  border border-zinc-400 p-3 rounded-full shadow hover:scale-110 active:scale-90 transition">
          <ArrowRight />
        </button>

      </div>
    </div>
  );
})

export default Carousel;

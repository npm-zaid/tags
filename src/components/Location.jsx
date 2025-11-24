import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { forwardRef } from "react";

const Location = forwardRef((props, ref) => {
  const loca = useRef(null)
  const locList =[
    {link:'https://yaapcampaign.blob.core.windows.net/oplifi/location/mumbai.png',
      name:'Mumbai',
      address:'802, 8th Floor, Signature (by Lotus), Veera Desai Road Ext, Andheri (West), Mumbai - 400 053'
    },
    {
      link:'https://yaapcampaign.blob.core.windows.net/oplifi/location/gurugram.png',
      name:'Gurugram',
      address:'15th Floor, Vatika Tower, Golf Course Rd, Sector-54, Gurugram, Haryana - 122002'
    },
      {
      link:'https://yaapcampaign.blob.core.windows.net/oplifi/location/dubai.png',
      name:'Dubai',
      address:'108/109 Building 7, Dubai Media City, United Arab Emirates'
    },
      {
      link:'https://yaapcampaign.blob.core.windows.net/oplifi/location/hydrabad.jpeg',
      name:'Hyderabad',
      address:'Awfis, Oyster Complex, Greenlands Road, Somajiguda, Begumpet, Hyderabad - 500016'
    },
      {
      link:'https://yaapcampaign.blob.core.windows.net/oplifi/location/singapore.jpeg',
      name:'Singapore',
      address:'36 Carpenter Street, #02-00, Carpenter Haus, Singapore 059915'
    },


  ]

  useGSAP(()=>{
   loca.current = gsap.timeline()
    .from(".agent h1",{y:-100,scale:0.5,opacity:0, duration:.5})
    .from(".agent p",{y:-100,scale:0.5,opacity:0, duration:.5})
  })

  return (
    <section ref={ref} className='min-h-screen  flex flex-col items-center'>
       <h1 className="text-3xl font-bold mb-10">Our Locations</h1>
      <div className="group flex max-md:flex-col justify-center gap-2 w-[90%] mx-auto mb-10 mt-3">
        {locList.map((loc, i) => {
          return (
            <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300">
              <div
                className="absolute inset-0 text-white z-10  p-3 flex flex-col justify-end"
                >
                <h1 className=" sm:text-5xl text-3xl mb-2 font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {loc.name}
                </h1>
                <span className=" sm:text-[1vw] text-sm font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {loc.address}
                </span>
              </div>
              <img
                className="object-cover h-72 md:h-[420px]  w-full"
                src={loc.link}
                width="960"
                height="480"
                alt="Image 01"
              />
              
            </article>
          );
        })}
      </div>
    </section>
  );
})
export default Location;
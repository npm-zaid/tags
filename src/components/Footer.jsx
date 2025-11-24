import React, { useRef, useEffect } from "react";
import { Linkedin } from "lucide-react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import logo from '../assets/main-logo.png'

gsap.registerPlugin(SplitText);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const links = footerRef.current.querySelectorAll(".split-link");

    links.forEach((link) => {
      
      const split = new SplitText(link, { type: "chars" });
      const chars = split.chars;

     
      link.addEventListener("mouseenter", () => {
        gsap.fromTo(
          chars,
          { y: 0, opacity: 1 },
          {
            y: -8,
            opacity: 0.4,
            stagger: 0.03,
            duration: 0.25,
            ease: "power2.out",
          }
        );

        gsap.to(chars, {
          y: 0,
          opacity: 1,
          delay: 0.15,
          stagger: 0.03,
          duration: 0.3,
          ease: "power2.out",
        });
      });

     
      link.addEventListener("mouseleave", () => {
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      });
    });
  }, []);


  return (
    <div
      ref={footerRef}
      className="bg-zinc-100 sm:p-10 p-4 grid md:grid-cols-4 grid-cols-2 gap-10"
    >
      
      <div className="flex flex-col gap-5">
        <img
          className="sm:w-40 w-30 cursor-pointer"
          src={logo}
          alt="Logo"
          
        />

        <div
          className="p-2 bg-blue-500 text-white rounded-md w-fit cursor-pointer"
        >
          <Linkedin className="w-4 h-4" />
        </div>
      </div>


      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold split-link">Company</h3>
        <p className="split-link cursor-pointer">Why tags</p>
        <p className="split-link cursor-pointer">Contact Us</p>
        <p className="split-link cursor-pointer">Resources</p>
      </div>




      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold split-link">Legal</h3>
        <p className="split-link cursor-pointer">Privacy Policy</p>
        <p className="split-link cursor-pointer">Terms & Conditions</p>
        <p className="split-link cursor-pointer">Return Policy</p>
       
      </div>


      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold split-link">Contact us</h3>
        <p className="split-link cursor-pointer">support@oplifi.com</p>
        <p className="split-link cursor-pointer">+0120-395-3439-1345</p>
     
      </div>
    </div>
  );
};

export default Footer;


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from "./Button";
import logo from '../assets/main-logo.png'
import {Menu} from 'lucide-react'



const NavItem = ({ label, stroke = "#ed5af2" }) => {
  const anchorRef = useRef(null);
  const pathRef = useRef(null);

  const pathId = `navpath-${label.replace(/\s+/g, '')}`;

  useEffect(() => {
    const anchor = anchorRef.current;
    const path = pathRef.current;

    const animateTo = (d, ease, duration = 1) => {
      gsap.killTweensOf(path);
      gsap.to(path, {
        attr: { d },
        ease,
        duration,
      });
    };

    const enter = () => {
      animateTo("M 10,70 Q 100,20 250,70", "elastic.out(1.4, 0.4)", 0.8);
    };

    const leave = () => {
      animateTo("M 10,70 Q 100,70 250,70", "elastic.out(1.8, 0.2)", 1.5);
    };

    anchor.addEventListener("pointerenter", enter);
    anchor.addEventListener("pointerleave", leave);

    return () => {
      anchor.removeEventListener("pointerenter", enter);
      anchor.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <a ref={anchorRef} className="nav-item cursor-pointer mr-6">
      <svg viewBox="0 0 200 120" width="80px" height="80px">
        <path
          ref={pathRef}
          id={pathId}
          d="M 10,70 Q 100,70 250,70"
          stroke={stroke}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        <text className="path-text fill-zinc-900 text-5xl">
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            <tspan dy="-12">{label}</tspan>
          </textPath>
        </text>
      </svg>
    </a>
  );
};









const Navbar2 = () => {
     const navRef = useRef(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      gsap.to(navRef.current, {
        y: currentScrollY > prevScrollY ? '-100%' : '0%',
        duration: 1,
        ease: 'power3.out',
      });
      prevScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: "Products", stroke: "#ed5af2" },
    { label: "Services", stroke: "#00c4ff" },
    { label: "Why Tags", stroke: "#7dff61" },
    { label: "Resources", stroke: "#ffa33c" },
  ];

  return (
    <nav ref={navRef} className=" fixed w-full backdrop-blur-md  flex gap-4 px-6 py-2 z-50 rounded-lg justify-between items-center">

      
      <div className="sm:w-[8vw] w-[18vw]">
        <img
          className="w-full h-full object-fill"
          src={logo}
          alt="logo"
        />
      </div>

    
      <div className="hidden sm:flex gap-4 ">
        {links.map((item) => (
          <NavItem key={item.label} label={item.label} stroke={item.stroke} />
        ))}
      </div>


      <div className="hidden sm:block gap-4 ">
        <Button>Request Demo</Button>
      </div>
      
        <div className="block sm:hidden gap-4 ">
       <Menu/>
      </div>
    </nav>
  );
};

export default Navbar2;

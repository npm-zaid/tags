import React from "react";
import { HatGlasses } from "lucide-react";
import { NavItem } from "./NavItem";

const Navbar = () => {
  return (
    <nav className=" flex justify-between w-full p-4">
      <HatGlasses size={30} />

      <div className="flex gap-6 text-black uppercase font-bold">
        <NavItem text="home" />
        <NavItem text="about" />
        <NavItem text="service" />
        <NavItem text="contact" />
      </div>
    </nav>
  );
};

export default Navbar

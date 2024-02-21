import React from "react";
import { useState } from "react";
import {Link} from 'react-scroll'
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between w-full bg-white font-poppins fixed top-0 z-[1000] shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] text-2xl text-[#2d2e32] items-center py-[25px] pl-[50px] pr-[40px]">
      <h3 className="font-poppins font-bold text-2xl">Happy.dev</h3>
      
        <ul className="list-none font-bold sm:flex hidden flex-row justify-end items-center text-2xl">
          <li className="mr-10"><Link className="cursor-pointer" to="home" spy={true} smooth={true}>Home</Link></li>
          <li className="mr-10"><Link className="cursor-pointer" to="about" spy={true} smooth={true}>About</Link></li>
          <li className="mr-10"><Link className="cursor-pointer" to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li className="mr-0"><Link className="cursor-pointer" to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
    
        <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={toggle ? close : menu}
          alt="toggler"
          className="w-[28px] h-[28px] `color-[black] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
        <li className={`font-poppins font-medium cursor-pointer text-[16px`}
        />
          <li className={`font-poppins font-medium cursor-pointer text-[16px`}>About</li>
          <li className={`font-poppins font-medium cursor-pointer text-[16px`}>Projects</li>
          <li className={`font-poppins font-medium cursor-pointer text-[16px`}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
// align-items: center;
//     background-color: #fff;
//     box-shadow: 0 0 10px rgba(0,0,0,.09);
//     display: flex;
//     font-size: 1.7rem;
//     height: auto;
//     justify-content: space-between;
//     left: 0;
//     padding: 25px 40px 25px 50px;
//     position: fixed;
//     top: 0;
//     width: 100%;
//     z-index: 200;

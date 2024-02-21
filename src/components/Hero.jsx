import React from "react";
import myimg from "../assets/myimg.jpg";
import bootstrap from "../assets/bootstrap.svg";
import expressjs from "../assets/expressjs.svg";
import reactjs from "../assets/reactjs.svg";
import html from "../assets/html.svg";
import nodejs from "../assets/nodejs.svg";
import tailwindcss from "../assets/tailwindcss.svg";
const Hero = () => {
  return (
    // main section
    <section
      id="home"
      className=" flex flex-col w-full h-full b.ox-border bg-[#f9f9f9] relative top-[170px]"
    >
      {/* container */}
      <div className=" box-border mx-auto">
        {/* hero-content */}
        <div className=" flex items-center md:max-w-[1200px] flex-col content md:mt-25">
          {/* hero-main */}
          <div className="flex sm:flex-row sm:gap-60 gap-20 w-full flex-col-reverse items-center">
            {/* hero-text */}
            <div className="flex max-w-[500px] hero-text flex-col  relative  justify-center ">
              <h1 className="flex font-poppins  font-bold ss:text-[60px] text-[52px] text-[#2d2e32] ss:leading-tight leading-[75px]">
                FULL STACK MERN
                <br className="sm:block hidden" /> Developer
              </h1>
              <p className=" flex justify-center text-[#767676] text-500 font-mulish text-xl leading-[30.8px]">
                Hi, I'm Happy Panchal. A passionate Full Stack Developer
                studying my major in CSE at IIIT Sonepat. 📍
              </p>
              <span className="my-9 flex flex-row">
                <a
                  className="text-[2.5rem] mr-4 text-[#2d2e32] hover:text-[#0A66C2]"
                  href="https://github.com/nameishappy"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  className="text-[2.5rem] text-[#2d2e32] hover:text-[#0A66C2]"
                  href="https://www.linkedin.com/in/happy-kumar-iiit/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin "></i>
                </a>
              </span>
            </div>
            {/* hero-text-close */}
            {/* hero-image */}
            <div
              style={{ backgroundImage: `url('${myimg}')` }}
              className={`bg-cover shape bg-no-repeat bg-center border-[3px] border-primary flex items-center rounded-full flex-center w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] overflow-hidden`}
            ></div>
            {/* hero-image-ends */}
          </div>
          <div className=" mt-8 skills flex flex-wrap items-center text-[#767676] w-full ">
            <div className="font-mulish tech-stack-heading w-1/4">
              <p className="flex border-r-4 border-black  text-3xl">
                Tech stack
              </p>
            </div>
            <div className="ml-9 logos ">
              <ul className=" flex justify-between gap-4 flex-wrap">
                <li className="border-2 border-gray rounded-full p-5">
                  <img className="h-9 w-9" src={html} alt="" />
                </li>
                <li className="border-2 border-gray rounded-full p-5">
                  <img className="h-9 w-9" src={reactjs} alt="" />
                </li>
                <li className="border-2 border-gray rounded-full p-5">
                  <img
                    className="h-9 w-9 cover no-repeat"
                    src={nodejs}
                    alt=""
                  />
                </li>
                <li className="border-2 border-gray rounded-full p-5">
                  <img className="h-9 w-9" src={expressjs} alt="" />
                </li>
                <li className="border-2 border-gray rounded-full p-5">
                  <img className="h-9 w-9" src={bootstrap} alt="" />
                </li>
                <li className="border-2 border-gray rounded-full p-5">
                  <img className="h-9 w-9" src={tailwindcss} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

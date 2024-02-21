import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const Projects = () => {
  return (
    <section id="projects" className="py-[10rem] text-[#f9f9f9]">
      <div className="container mx-auto">
        <div className="project-content mx-auto md:max-w-[1200px] flex flex-col justify-center">
          <p className="uppercase text-[#147efb] text-xl font-bold font-poppins mb-1">
            Projects
          </p>
          <h3 className="text-[#2d2e32] text-2xl font-bold mb-4 text-center flex sm:justify-start justify-center">
            This is the list of projects made by me
          </h3>
          <div className="projects flex flex-col gap-7">
            {/* project1 */}
            <div className=" rounded-xl project-1 p-4 flex sm:flex-row flex-col justify-center items-center border-3 gap-6 mb-8 shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)]">
              <div className="sm:w-1/2 w-full flex items-center">
                <a href="https://happyestate.onrender.com/" target="_blank">
                  <img className="rounded-xl h-70" src={p1} alt="" />
                </a>
              </div>
              <div className="pro-text sm:w-1/2 w-full flex flex-col justify-center items-center mb-5 ">
                <h3 className="uppercase text-[#147efb] text-xl font-bold font-poppins mb-4">
                  Happy Estate
                </h3>
                <div className="overflow-hidden">
                  <p className=" w-[22rem] text-center mb-2 text-[#767676] font-mulish text-xl text-500 leading-tight  ...break-all">
                    Happy Estate is a full-stack real estate marketplace web
                    application leveraging a tech stack comprising MongoDB,
                    Node.js, Express.js, and React.js. This platform offers
                    robust user authentication capabilities alongside essential
                    CRUD operations such as adding, deleting, and updating
                    properties.
                  </p>
                </div>

                <div className="flex">
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    NodeJS
                  </p>
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    ReactJS
                  </p>
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    Tailwind
                  </p>
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    REST APIs
                  </p>
                </div>
                <div className="flex flex-wrap items-center w-full  justify-evenly mt-[2rem]">
                  <a
                    className="text-[#2d2e32] style-none gap-2 text-2xl flex items-center gap-2  font-poppins hover:text-[#0A66C2]"
                    href="https://github.com/nameishappy/happyestate"
                    target="_blank"
                  >
                    Code
                    <i className="fa-brands fa-github "></i>
                  </a>
                  <a
                    target="_blank"
                    className="text-[#2d2e32] style-none sm:gap-2 gap-1 text-2xl font-poppins flex items-center hover:text-[#0A66C2] "
                    href="https://happyestate.onrender.com/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* project2 */}
            <div className=" rounded-xl project-1 p-4 flex sm:flex-row flex-col-reverse justify-center items-center border-3 gap-6 mb-8 shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)]">
              <div className="pro-text sm:w-1/2 w-full flex flex-col justify-center items-center mb-5">
                <h3 className="uppercase text-[#147efb] text-xl font-bold font-poppins mb-4">
                  Live News App
                </h3>
                <div className="overflow-hidden">
                  <p className=" w-[22rem] text-center mb-2 text-[#767676] font-mulish text-xl text-500 leading-tight  ...break-all">
                    The Live news app is a web app which shows the live
                    headlines by fetching news through the use of NEWS API.The
                    user can also see the news of various categories such as
                    sports,entertainment,business etc. by clicking on the
                    various categories provided in menu.
                  </p>
                </div>

                <div className="flex">
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    React
                  </p>
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    Bootstrap
                  </p>
                </div>
                <div className="flex flex-wrap items-center w-full  justify-evenly mt-[2rem]">
                  <a
                    className="text-[#2d2e32] style-none gap-2 text-2xl flex items-center gap-2  font-poppins hover:text-[#0A66C2]"
                    href="https://github.com/nameishappy/Live-news-app"
                    target="_blank"
                  >
                    Code
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    className="text-[#2d2e32] style-none sm:gap-2 gap-1 text-2xl font-poppins flex items-center hover:text-[#0A66C2] "
                    href="https://live-news-app.netlify.app/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
              <div className="sm:w-1/2 w-full flex items-center">
                <a href="https://live-news-app000.netlify.app/" target="_blank">
                  <img className="rounded-xl h-70" src={p2} alt="" />
                </a>
              </div>
            </div>
            {/* project3 */}
            <div className=" rounded-xl project-1 p-4 flex sm:flex-row flex-col justify-center items-center border-3 gap-6 mb-8 shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)]">
              <div className="sm:w-1/2 w-full flex items-center">
                <a
                  href="https://nameishappy.github.io/live-weather-react/"
                  target="_blank"
                >
                  <img className="rounded-xl h-70" src={p3} alt="" />
                </a>
              </div>
              <div className="pro-text sm:w-1/2 w-full flex flex-col justify-center items-center mb-5">
                <h3 className="uppercase text-[#147efb] text-xl font-bold font-poppins mb-4">
                  Live Weather App
                </h3>
                <div className="overflow-hidden">
                  <p className=" w-[22rem] text-center mb-2 text-[#767676] font-mulish text-xl text-500 leading-tight  ...break-all">
                    A live weather web app delivers real-time weather
                    information to users. It provides current temperature,
                    forecasts, and conditions for specific locations. Users can
                    access details like humidity, wind speed, and precipitation,
                    making informed decisions based on up-to-date weather data.
                  </p>
                </div>

                <div className="flex">
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    React
                  </p>
                  <p className=" text-black text-center text-xl font-semibold rounded-xl mr-2 text-600 px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]">
                    Bootstrap
                  </p>
                </div>
                <div className="flex flex-wrap items-center w-full  justify-evenly mt-[2rem]">
                  <a
                    className="text-[#2d2e32] style-none gap-2 text-2xl flex items-center gap-2  font-poppins hover:text-[#0A66C2]"
                    href="https://github.com/nameishappy/live-weather-react"
                    target="_blank"
                  >
                    Code
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    className="text-[#2d2e32] style-none sm:gap-2 gap-1 text-2xl font-poppins flex items-center hover:text-[#0A66C2]"
                    href="https://nameishappy.github.io/live-weather-react/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

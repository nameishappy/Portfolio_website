import React from "react";
import aboutimg from "../assets/aboutimg.jpg";
import avatar from "../assets/avatar.png";

const About = () => {
  return (
    <section id="about" className="pt-[15rem]">
      <div className="container mx-auto">
        {/* aboutcontent */}
        <div className="about-content md:max-w-[1200px] mx-auto flex sm:flex-row flex-col justify-center">
          {/* aboutimage */}
          <div className="w-full  sm:w-1/2">
            <img className="h-[24rem] rounded-3xl z-[0]" src={aboutimg} alt="" />
            {/* <img src={avatar} className="z-[5] relative bottom-0 h-40 w-40" alt="avatar" /> */}
          </div>
          <div className="sm:w-1/2 about-text w-full sm:ml-16">
            <h3 className="uppercase text-[#147efb] text-xl font-bold font-poppins mb-1">About me</h3>
            <h4 className="text-[#2d2e32] text-2xl font-bold mb-4">
              A dedicated Front-end Developer <br />
              based in Delhi, India 📍
            </h4>
            <p className="text-[#767676] font-mulish text-xl text-500 leading-tight">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

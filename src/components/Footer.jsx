import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2d2e32] text-white w-full">
      <div className="container mx-auto">
        <div className="footercontent flex sm:flex-row flex-col items-center justify-between">
          <h3 className="font-poppins font-bold text-xl">Copyright &#169; 2023 ALL rights reserved</h3>
          <div>
            <span className="my-9 flex flex-row">
              <a
                className="text-[2rem] mr-4 text-white hover:text-[#0A66C2]"
                href="https://github.com/nameishappy"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="text-[2rem] text-white hover:text-[#0A66C2]"
                href="https://www.linkedin.com/in/happy-kumar-iiit/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin "></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

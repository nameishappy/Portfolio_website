import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-[10rem]">
      <div className="container mx-auto">
        <div className="contact-content sm:max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-start flex-center mb-8">
            <p className="uppercase text-[#147efb] text-xl font-bold font-poppins mb-1">
              Contact
            </p>
            <h3 className="text-[#2d2e32] text-2xl font-bold mb-4 text-center flex sm:justify-start justify-center">
              Drop me a message for any work!👍
            </h3>
          </div>
          <div className="contact-icons flex ">
            <div className="contac-icon-box flex gap-8 sm:flex-row flex-col">
              <div className="flex sm:flex-row flex-col gap-6 items-center ">
                <span className="text-3xl">
                  <i className="fa-solid fa-map-location-dot text-[#147efb]"></i>
                </span>
                <div>
                  <h3 className="text-xl font-poppins font-bold mb-1">
                    Location
                  </h3>
                  <p className="w-[22rem] mb-2 text-[#767676] font-mulish text-xl text-500">
                    Delhi,india
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center ">
                <span className="text-3xl">
                  <i className="fa-solid fa-envelope-open-text text-[#147efb]"></i>
                </span>
                <div>
                  <h3 className="text-xl font-poppins font-bold mb-1">Email</h3>
                  <p className="w-[22rem] mb-2 text-[#767676] font-mulish text-xl text-500">
                    codewithhappy1@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

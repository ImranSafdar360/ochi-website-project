import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen text-white pt-1">
        <div className="textstructure mt-[10vw] ms-16">
          {["We Create", "eye-opening", "presentations"].map((item, index) => (
            <div className="masker font-founder">
              <div className="w-fit flex items-baseline">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ease: [0.76, 0, 0.24, 1], duration:1}}
                    className="w-[12vw] h-[7.5vw] rounded-[10px] me-[2vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="uppercase text-[12vw] leading-[8vw] font-bold"
                >
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-700 mt-20 flex items-center justify-between px-16 py-5 font-neuemontreal">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div className="flex items-center gap-2">
            <div className="border border-zinc-700 rounded-full py-2 px-3 cursor-pointer text-sm font-thin">
              START THE PROJECT
            </div>
            <div className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center cursor-pointer">
              <span className="rotate-45">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

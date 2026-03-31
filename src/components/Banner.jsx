import React from "react";
import banner from "../assets/banner.png";
import playIcon from "../assets/play.png";
const Banner = () => {
  return (
    <div className="max-w-350 mx-auto p-5 sm:py-10 sm:px-4 md:py-20 md:px-6 flex flex-col-reverse sm:flex-row gap-10 items-center justify-between">
      <div className="banner-left space-y-3">
       <div className="flex justify-center sm:justify-start">
         <button className="btn rounded-2xl bg-base-300">
          <span className="flex items-center justify-center w-4 h-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></span>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            New: AI-Powered Tools Available
          </span>
        </button>
       </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
          Supercharge Your <br className="hidden sm:hidden md:block" />
          Digital Workflow
        </h2>
        <p className="text-center md:text-left">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br className="hidden sm:hidden md:block"/> software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4">
          <button className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>
          <button className="btn rounded-full border-2 border-gray-300">
            <img src={playIcon} alt="" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <div className="banner-right">
        <img src={banner} alt="Banner" className="object-contain transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl" />
      </div>
    </div>
  );
};

export default Banner;

Banner;

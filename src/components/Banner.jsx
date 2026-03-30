import React from "react";
import banner from "../assets/banner.png";
import playIcon from "../assets/play.png";
const Banner = () => {
  return (
    <div className="max-w-350 mx-auto py-20 flex gap-10 items-center justify-between">
      <div className="banner-left space-y-3">
        <button className="btn rounded-2xl bg-base-300">
          <span className="flex items-center justify-center w-4 h-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></span>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            New: AI-Powered Tools Available
          </span>
        </button>
        <h2 className="text-5xl font-bold">
          Supercharge Your <br />
          Digital Workflow
        </h2>
        <p>
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. Explore
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
        <img src={banner} alt="Banner" className="object-contain" />
      </div>
    </div>
  );
};

export default Banner;

Banner;

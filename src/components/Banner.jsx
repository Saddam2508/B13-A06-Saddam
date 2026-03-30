import React from "react";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="max-w-350 mx-auto py-10 grid grid-cols-2 gap-10 items-center justify-between">
      <div class="banner-left space-y-3">
        <button className="btn rounded-2xl bg-base-300">
          <span className="flex items-center justify-center w-4 h-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></span>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            New: AI-Powered Tools Available
          </span>
        </button>
        <h2 className="text-4xl font-bold">
          Supercharge Your Digital Workflow
        </h2>
        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4">
          <button className="btn">Explore Products</button>
          <button className="btn">Watch Demo</button>
        </div>
      </div>
      <div class="banner-right">
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;

Banner;

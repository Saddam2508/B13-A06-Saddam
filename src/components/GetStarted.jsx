import React from "react";
import icon1 from "../assets/user.png";
import icon2 from "../assets/package.png";
import icon3 from "../assets/rocket.png";
const GetStarted = () => {
  return (
    <div className="max-w-350 mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">Get Started in 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className="grid grid-cols-3 gap-6  p-10 mt-10">
        <div className="rounded-lg shadow-md bg-white p-10 mt-10 text-center space-y-3 flex flex-col items-center relative">
          <div className="rounded-full p-6 bg-amber-100">
            <img src={icon1} alt="Create Account" />
          </div>
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
          <div className="rounded-full p-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white absolute right-5 top-5">
            01
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white p-10 mt-10 text-center space-y-3 flex flex-col items-center relative">
          <div className="rounded-full p-6 bg-amber-100">
            <img src={icon2} alt="Choose Products" />
          </div>
          <h2 className="text-2xl font-bold">Choose Products</h2>
          <p>Browse our catalog and select the toolsthat fit your needs.</p>
          <div className="rounded-full p-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white absolute right-5 top-5">
            02
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white p-10 mt-10 text-center space-y-3 flex flex-col items-center relative">
          <div className="rounded-full p-6 bg-amber-100">
            <img src={icon3} alt="Start Creating" />
          </div>
          <h2 className="text-2xl font-bold">Start Creating</h2>
          <p>Download and start using your premium tools immediately.</p>
          <div className="rounded-full p-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white absolute right-5 top-5">
            03
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

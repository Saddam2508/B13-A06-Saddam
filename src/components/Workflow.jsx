import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20 py-20">
      <div className="  text-white max-w-350 mx-auto text-center space-y-3 ">
        <h2 className="text-4xl">Ready to Transform Your Workflow?</h2>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
      </div>
      <div className="flex gap-4 justify-center mt-8">
        <button className="btn rounded-full  text-[#9514FA]">
          Explore Products
        </button>
        <button className="btn rounded-full border-2 bg-transparent text-white border-gray-300">
          View Pricing
        </button>
      </div>
      <p className="text-center text-white mt-6">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Workflow;

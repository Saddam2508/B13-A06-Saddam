import React from "react";
import { motion } from "framer-motion";
const PricingCard = ({ plan }) => {
  return (
    <motion.div initial={{opacity: 0, y: 150}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                whileHover={{
                scale: [null, 1.10, 1.0],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
                
            }}
                 transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
      className={`rounded-xl shadow-md  ${plan.highlight ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] " : ""} p-10  space-y-3 relative flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl overflow-hidden`}
    >
      <div>
        <h3
          className={
            plan.highlight ? "text-white text-2xl" : "text-2xl font-bold"
          }
        >
          {plan.title}
        </h3>
        <p
          className={plan.highlight ? "text-white mb-3" : "text-gray-600 mb-3"}
        >
          {plan.subtitle}
        </p>
        <p className={plan.highlight ? "text-white " : ""}>
          {" "}
          <span
            className={
              plan.highlight
                ? "text-white text-3xl font-bold"
                : "text-3xl font-bold"
            }
          >
            ${plan.price}
          </span>
          /{plan.duration}
        </p>
      </div>
      <div className="flex-1">
        {plan.features.map((feature, index) => (
          <p key={index} className="flex items-center space-x-2">
            <span className={plan.highlight ? "text-white" : "text-green-500"}>
              ✓
            </span>
            <span className={plan.highlight ? "text-white" : "text-gray-600"}>
              {feature}
            </span>
          </p>
        ))}
      </div>
      <button
        className={
          plan.highlight
            ? "bg-white text-[#4F39F6] px-6 py-2 rounded-full font-bold mt-2"
            : "bg-[#4F39F6] text-white px-6 py-2 rounded-full font-bold mt-2"
        }
      >
        {plan.buttonText}
      </button>
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-500 text-xs  px-2 py-1 rounded-full transform ">
          {plan.badge}
        </div>
      )}
    </motion.div>
  );
};

export default PricingCard;

import React, { use } from "react";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <motion.div initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 2, ease: "anticipate" }} className="max-w-350 mx-auto mt-8 md:mt-20">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6  p-10 sm:mt-4 md:mt-10 ">
        {pricingData.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </motion.div>
  );
};

export default Pricing;

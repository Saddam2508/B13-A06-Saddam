import React from "react";
import Counter from "./Count";
import { motion } from "framer-motion";


const ActiveUsers = () => {
 
  return (
    <motion.div initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 2}} className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-3 md:p-6  text-white max-w-350 mx-auto justify-around items-center">
        <div className="text-center md:py-5 space-y-2">
          <h2 className="text-4xl font-bold"><Counter end={50000} />+</h2>
          <p>Active Users</p>
        </div>
        <div className="text-center py-5">
          <h2 className="text-4xl font-bold"><Counter end={200} />+</h2>
          <p>Premium Tools</p>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold"><Counter end={4.9} /></h2>
          <p>Rating</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ActiveUsers;

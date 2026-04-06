import React from "react";
import  {motion} from "framer-motion";
import banner from "../assets/banner.png";
import playIcon from "../assets/play.png";

const Banner = () => {
  return (
    <div className="max-w-350 mx-auto p-5 sm:py-10 sm:px-4 md:py-20 md:px-6 flex flex-col-reverse sm:flex-row gap-10 items-center justify-between">
      <div  className="banner-left space-y-3">
       <div className="flex justify-center sm:justify-start">
         <motion.button initial ={{ opacity:0, y: 40}} animate={{opacity:1,y:0}} transition={{duration: 2}}  className="btn rounded-2xl bg-base-300">
          <span className="flex items-center justify-center w-4 h-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></span>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            New: AI-Powered Tools Available
          </span>
        </motion.button>
       </div>
        <motion.h2 initial ={{ opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{duration: 2, delay:0.3}} className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
          Supercharge Your <br className="hidden sm:hidden md:block" />
          Digital Workflow
        </motion.h2>
        <motion.p initial ={{ opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{duration: 2, delay:0.4}} className="text-center md:text-left">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br className="hidden sm:hidden md:block"/> software—all in one place. Start creating faster today. Explore
          Products
        </motion.p>
        <div className="flex gap-4">
          <motion.button initial ={{ opacity:0, x: -20}} animate={{opacity:1, x:0}} transition={{duration: 2, delay:0.3}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </motion.button>
          <motion.button initial ={{ opacity:0, x: 20}} animate={{opacity:1, x:0}} transition={{duration: 2, delay:0.3}} whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }}className="btn rounded-full border-2 border-gray-300">
            <img src={playIcon} alt="" />
            <span>Watch Demo</span>
          </motion.button>
        </div>
      </div>
      <motion.div initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 2, ease: "linear" }} className="banner-right overflow-hidden" >
        <motion.img src={banner} alt="Banner" className="object-contain " whileHover={{scale:1.1, transition: 0.15}} />
      </motion.div>
    </div>
  );
};

export default Banner;



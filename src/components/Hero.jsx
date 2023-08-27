import { motion } from "framer-motion";

import { styles } from "../styles";
import Links from "./Links";
import { bg } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`relative inset-0 top-[120px] max-w-full mx-auto ${styles.paddingX} flex flex-row items-start justify-between `}
      >
        <div>
          <img
            src={bg}
            className="relative lg:h-[700px] lg:w-[700px] lg:bottom-[125px] sm:bottom-[100px] md:bottom-[50px] "
          ></img>
        </div>
        <div className="relative flex flex-row right-16 ">
          <div className=" flex flex-col justify-center items-center mt-5 pr-6">
            <div className="w-5 h-5 rounded-full bg-[#FF5F1F]" />
            <div className="w-1 sm:h-80 h-40 orange-gradient" />
          </div>
          <div className="mt-5">
            <h1
              className={`${styles.heroHeadText} text-black dark:text-white pt-[20px]`}
            >
              Hi, I'm <div className="text-[#FF5F1F]">Suriya Prakash </div>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-black-100 dark:text-gray-300`}
            >
              I develop user interfaces <br className="sm:block hidden" />
              and web applications
            </p>
            <div className="mt-8">
              <Links />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-800 dark:border-gray-300 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

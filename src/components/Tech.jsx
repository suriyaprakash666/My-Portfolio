import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { services } from "../constants";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card orange-gradient"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-100 dark:bg-gray-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-30 h-30 object-contain"
        />

        <h3 className="text-black dark:text-white text-[20px] font-bold text-center dark:orange-text-gradient">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Technical</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 p-4">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} pt-10`}>Area of interest</p>
        </motion.div>
        <div className="mt-14 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

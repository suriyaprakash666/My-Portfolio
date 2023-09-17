import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-800 dark:text-gray-200 text-[17px] max-w-full leading-[30px]"
      >
        Hey, I'm Suriya Prakash, and if I had to describe myself in a nutshell,
        I'd say I'm a tech enthusiast with a strong programming core. Exploring
        the world of coding feels like second nature to me, and I'm the happiest
        when I'm finding creative software solutions. From getting hands-on with
        JavaScript and diving into frameworks like React JS, Express JS, Node
        JS, and Tailwind CSS, it's all in a day's work for me. <br></br>What
        keeps my fire burning? Well, challenges do. The ever-evolving software
        realm is like a playground where I get to learn new tricks every day.
        College was a transformative journey where I not only graduated in
        Information Technology but also polished my soft skills, making me an
        effective team player and a leader.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");

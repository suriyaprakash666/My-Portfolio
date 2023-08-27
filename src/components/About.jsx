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
        Highly motivated technology graduate seeking an entry-level position in
        software development where I can leverage my strong programming skills,
        creativity, and attention to detail to contribute to the development of
        innovative software solutions.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");

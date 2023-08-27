import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { linkedin, instagram, gitHub, twitter } from "../assets/index";

const Links = () => {
  return (
    <div className="mt-[60px]">
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <div className="flex justify-around items-center">
          <div>
            <a href="https://www.linkedin.com/in/suriyaprakashs666/">
              <img src={linkedin} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/the_savitar__/">
              <img src={instagram} />
            </a>
          </div>
          <div>
            <a href="https://github.com/suriyaprakash666">
              <img src={gitHub} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/SuriyaSP666">
              <img src={twitter} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Links;

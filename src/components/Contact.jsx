import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent!");
        },
        (error) => {
          alert("Message not send! Try again later");
        }
      );
    setInputValues({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.cardSectionSubText}>Get in touch</p>
        <h3 className={styles.cardSectionHeadText}>Contact.</h3>
      </motion.div>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-gray-100 dark:bg-gray-900 ml-12 mr-5 mb-14 mt-10 p-[1px] orange-gradient rounded-2xl"
        >
          <div className="dark:bg-gray-900 bg-gray-100 p-[30px] rounded-2xl shadow-card">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-12 flex flex-col gap-8"
              style={{ maxWidth: "400px" }} // Adjust the max-width here
            >
              <label className="flex flex-col">
                <span className="text-black dark:text-white font-medium mb-4">
                  Your Name
                </span>
                <input
                  type="text"
                  name="user_name"
                  value={inputValues.user_name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-gray-300 dark:bg-gray-800  py-4 px-6 placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
                  style={{ width: "100%" }} // Adjust the width here
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black dark:text-white font-medium mb-4">
                  Your email
                </span>
                <input
                  type="email"
                  name="user_email"
                  value={inputValues.user_email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-gray-300 dark:bg-gray-800 py-4 px-6 placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
                  style={{ width: "100%" }} // Adjust the width here
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black dark:text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={inputValues.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-gray-300 dark:bg-gray-800 py-4 px-6 placeholder:text-secondary 
             text-black dark:text-white rounded-lg outline-none border-none font-medium"
                  style={{ width: "100%" }} // Adjust the width here
                />
              </label>

              <button
                type="submit"
                className="bg-black dark:bg-white  py-3 px-8 rounded-xl outline-none w-fit text-white dark:text-black font-bold shadow-md shadow-primary"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");

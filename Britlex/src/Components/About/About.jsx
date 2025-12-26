import React from "react";
import "./About.css";
import about_img from "./about_img.png"
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
          className="text-content"
          initial={{opacity: 0,  scale: 0.6}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1.2}}
          viewport={{once: true}}
          >
            <h2>About Us</h2>
            <p>
              The model offers a framework for discussing problems related to
              the user's experience, as well as possible ways and means of
              solving them. Application development begins at the top level
              (strategy), where the future software product is described quite
              abstractly from the point of view of the expectations of both
              users and the customer.
            </p>
            <div className="content-details">
              <h3>
                800
                <span>Pupils</span>
              </h3>
              <h3>
                18
                <span>Teachers</span>
              </h3>
              <h3>
                16
                <span>Foreign languages</span>
              </h3>
            </div>
          </motion.div>
            <motion.img src={about_img} alt="About our education center" 
          initial={{opacity: 0, scale: 0.6}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 0.3}}
            />
        </div>
      </div>
    </section>
  );
};

export default About;

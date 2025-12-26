import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import light_bulb from "./light-bulb.png";
import hero_img from "./hero-img.png";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="text-content"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Learn <br /> Any Foreign Language
            </h1>
            <p>
              With our teachers who write a program for each student, you will
              be able to make your first sketch after the first lesson.
            </p>
           
              <a className="hero-btn" href="#contact">Get Started</a>
            <img src={light_bulb} alt="light bulb" />
          </motion.div>
          <motion.img
            src={hero_img}
            alt="hero image"
            className="hero-img"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

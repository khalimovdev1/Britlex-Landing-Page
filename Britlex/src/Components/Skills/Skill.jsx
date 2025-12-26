import React from "react";
import "./Skill.css";
import { delay, motion, stagger } from "framer-motion";

import skillImg1 from "./skill_img_1.png";
import skillImg2 from "./skill_img_2.png";
import skillImg3 from "./skill_img_3.png";
import skillImg4 from "./skill_img_4.png";

/* =======================
   Animation Variants
======================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =======================
   Skills Data
======================= */
const skills = [
  {
    id: 1,
    title: "Speaking",
    img: skillImg1,
    description: (
      <>
        Improve your English skills and confidence. Live classes and interactive
        lessons online. <strong>20% extra free</strong> for a limited time only.
        <br />
        <br />
        Learn English online and improve your skills through our high-quality
        courses and resources – all designed for adult language learners.
      </>
    ),
    className: "tall",
  },
  {
    id: 2,
    title: "Writing",
    img: skillImg2,
    description:
      "One of the most important and extensive areas of natural science that studies substances and their composition.",
  },
  {
    id: 3,
    title: "Reading",
    img: skillImg3,
    description:
      "Perception and response actions of the user resulting from the use or upcoming use of the product, system or service.",
  },
];

const Skill = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <motion.h2 
        initial={{opacity: 0, scale: 0.4}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className="skill_subtitle">
          Skills
        </motion.h2>

        <motion.div
          className="skill-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              className={`card-item ${skill.className || ""}`}
            >
              <img src={skill.img} alt={`${skill.title} skill illustration`} />
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
              <button>Learn More</button>
            </motion.div>
          ))}

          {/* Listening Card */}
          <motion.div variants={cardVariants} className="card-item wide">
            <div className="text-box">
              <h2>Listening</h2>
              <p>
                Here you can find activities to practise your listening skills.
                Listening will help you to improve your understanding.
              </p>
              <button>Learn More</button>
            </div>

            <div className="img-box">
              <img src={skillImg4} alt="English listening skill illustration" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;

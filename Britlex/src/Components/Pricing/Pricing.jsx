import React from "react";
import "./Pricing.css";
import { motion } from "framer-motion";
import pricing_img_1 from "./pricing_img_1.png";
import pricing_img_2 from "./pricing_img_2.png";
import pricing_img_3 from "./pricing_img_3.png";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -50, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        {/* Head Subtitle */}
        <motion.h2
          className="pricing-subtitle"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pricing
        </motion.h2>

        {/* Card Wrapper */}
        <motion.div
          className="pricing-card"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 */}
          <div className="p-card-item">
            <motion.img src={pricing_img_1} alt="Self-study online course" variants={cardVariant} />
            <motion.h3 variants={cardVariant}>Self-study online course</motion.h3>
            <motion.p variants={cardVariant}>
              Start learning English online in live classes with qualified EC teachers.
            </motion.p>
            <motion.a href="#" className="price-btn" variants={cardVariant}>
              $16.99 <span>per month</span>
            </motion.a>
          </div>

          {/* Card 2 */}
          <div className="p-card-item">
            <motion.img src={pricing_img_2} alt="Live online course" variants={cardVariant} />
            <motion.h3 variants={cardVariant}>Live online classes</motion.h3>
            <motion.p variants={cardVariant}>
              Interactive group classes with expert teachers. Free 7-day trial
            </motion.p>
            <motion.a href="#" className="price-btn" variants={cardVariant}>
              $24.99 <span>per month</span>
            </motion.a>
          </div>

          {/* Card 3 */}
          <div className="p-card-item">
            <motion.img src={pricing_img_3} alt="Personal course" variants={cardVariant} />
            <motion.h3 variants={cardVariant}>Personal Tuition</motion.h3>
            <motion.p variants={cardVariant}>
              Online one-to-one English tutoring – enjoy our first session for only $1
            </motion.p>
            <motion.a href="#" className="price-btn" variants={cardVariant}>
              $34.99 <span>per month</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

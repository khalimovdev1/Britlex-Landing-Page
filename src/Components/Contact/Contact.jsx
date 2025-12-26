import React from "react";
import "./Contact.css";
import contact_img from "./contact_img.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <motion.img
            src={contact_img}
           alt="Contact illustration"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="contact-form">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Discover your current English level by taking our free online
              English test.Sign up to our newsletter for learning tips and free
              resource
            </motion.p>
            <motion.form
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <input type="email" placeholder="Enter your E-mail" required />
              <button type="submit">Subscribe</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

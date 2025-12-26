import React, { useState } from 'react'
import "./Navbar.css"
import { motion } from "framer-motion"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
  }

  const items = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <header className='navbar'>
      <div className="container">
        <motion.nav
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.a variants={items} className="logo" href="#home">
            Brit<span>lex</span>
          </motion.a>

          {/* MENU */}
          <ul className={menuOpen ? "show" : ""}>
            <motion.li variants={items}><a href="#home">Home</a></motion.li>
            <motion.li variants={items}><a href="#skills">Skills</a></motion.li>
            <motion.li variants={items}><a href="#about">About Us</a></motion.li>
            <motion.li variants={items}><a href="#pricing">Pricing</a></motion.li>
            <motion.li variants={items}><a href="#contact">Contacts</a></motion.li>
            <motion.li variants={items}>
              <button className="mobile-btn">Let's Talk</button>
            </motion.li>
          </ul>

          {/* DESKTOP BUTTON */}
          <motion.button className="desktop-btn" variants={items}>
            Let's Talk
          </motion.button>

          {/* HAMBURGER */}
          <motion.div
            variants={items}
            className={menuOpen ? "hamburger active" : "hamburger"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-child"></span>
            <span className="hamburger-child"></span>
            <span className="hamburger-child"></span>
          </motion.div>

        </motion.nav>
      </div>
    </header>
  )
}

export default Navbar

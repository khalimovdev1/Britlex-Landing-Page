import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <hr />
        <div className="footer-content">
            <a className="logo" href="#home">
            Brit<span>lex</span>
          </a>
          <div className="footer-text">
          <h3>© 2025 Terms and Conditions • Privacy Policy • Cookie Policy</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

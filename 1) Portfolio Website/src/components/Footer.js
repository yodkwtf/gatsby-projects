import React from "react"
import socialLinks from "../constants/social_links"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="social-links footer-links">
          {socialLinks.map(link => {
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright &copy;{new Date().getFullYear()}. <span>yodkwtf</span> all
          rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer

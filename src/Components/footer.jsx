
import { pageLinks, socialLinks } from "../data"
import { SocialLink } from "./SocialLink"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(el => {
          const {href, id, text} = el
          return (
            <li key={id}>
              <a href={href} rel="noreferrer" className="footer-link">{text}</a>
            </li>
          )
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map(el => {
          const {id} = el
          return (
            <SocialLink key={id} itemClass="footer-icon" {...el} />
            /* <li key={id}>
              <a href={href} rel="noreferrer" target="_blank" className="footer-icon"
              ><i className={icon}></i
                ></a>
            </li> */
          )
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer


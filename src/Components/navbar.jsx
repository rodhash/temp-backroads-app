
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import { SocialLink } from './SocialLink'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(link => {
            const {href, id, text} = link
            return (
              <li key={id}>
                <a href={href} className="nav-link" rel='noreferrer'>{text}</a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(link => {
            // const { href, icon, id } = link
            return (
              <SocialLink itemClass="nav-icon" {...link} />
              /* <li key={id}>
                <a href={href} className="nav-icon" rel='noreferrer'>
                  <i className={icon}></i>
                </a>
              </li> */
            )
          })}
        </ul>

      </div>
    </nav>
  )
}



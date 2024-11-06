
export const SocialLink = ({href, icon, itemClass}) => {
  return (
    <li>
      <a href={href} className={itemClass} rel='noreferrer'>
        <i className={icon}></i>
      </a>
    </li>
  )
}



import React from 'react'

// id not required?
// export const Service = ({id, icon, title, text}) => {
export const Service = ({icon, title, text}) => {
  return (

  // <article className="service" key={id}>
  <article className="service">
    <span className="service-icon"><i className={icon}></i></span>
    <div className="service-info">
      <h4 className="service-title">{title}</h4>
      <p className="service-text">
        {text}
      </p>
    </div>
  </article>

  )
}


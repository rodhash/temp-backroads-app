
import React from 'react'

export const Tour = ({image, date, loc, duration, cost, h4, text}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{h4}</h4>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span><i className="fas fa-map"></i></span>{loc}
          </p>
          <p>{duration}</p>
          <p>{cost}</p>
        </div>
      </div>
    </article>
)
}



import { Title } from './Title'
import { services } from '../data'
import { Service } from './Service'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map(service => {
          const { id} = service
          return (

            // <Service icon={icon} id={id} text={text} title={title} />
            <Service key={id} {...service} />

            /* <article className="service" key={id}>
              <span className="service-icon"><i className={icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {text}
                </p>
              </div>
            </article> */
          )
        })}

      </div>
    </section>
  )
}


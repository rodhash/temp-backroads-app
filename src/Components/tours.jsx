
import { Title } from './Title'
import { tours } from '../data'
import { Tour } from './Tour'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map(tour => {
          // const {cost, date, duration, h4, id, image, loc, text} = tour
          const {id} = tour
          return <Tour key={id} {...tour} />
        })}

      </div>
    </section>
  )
}


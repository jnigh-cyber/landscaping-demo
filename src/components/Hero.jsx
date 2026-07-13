import {Link} from 'react-router-dom'
function Hero() {
  return (
    <section>
      <div>
        <h1>Your yard, handled, every season.</h1>
        <p>Weekly mowing, seasonal cleanup, and everything in between, real crews,
          who show up when they say they will.
        </p>
        <Link to='/contact'>Get your Free Quote.</Link>
      </div>
    </section>
  )
}

export default Hero
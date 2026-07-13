import {Link} from 'react-router-dom'
function About() {
  return (
    <section>
      <div>
        <h1>Your yard, handled, every season.</h1>
        <p>
          Grass & More Co. started with one mower, one truck, and a handful of neighbors 
          who just wanted a lawn they didn't have to think about. Now we handle everything 
          from weekly mowing to fall cleanup to snow removal, the full cycle of what a 
          property actually needs across the year, not just a one-time job.
      </p>
      </div>
      <div>
        <div>
          <p>We show up when we say we will.</p>
        </div>
        <div>
          <p>Every property gets treated like it's the only one on our list.</p>
        </div>
        <div>
          <p>Real crews, real equipment, no subcontracting your yard out to strangers.</p>
        </div>
      </div>
      <div>
        <p>Licensed and insured.</p>
        <p>6 years serving Triad properties, residential and small commercial.</p>
        <p>Flexible scheduling, weekly, seasonal, or one-time jobs.</p>

        <Link to='/contact'>Get your Free Quote.</Link>
      </div>
    </section>
  )
}

export default About
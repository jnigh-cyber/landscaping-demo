import { Link } from 'react-router-dom'
import { pillars } from '../data/pillars'

function About() {
  return (
    <section className="px-4 py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-5xl leading-tight mb-8 text-center">
          Your yard, handled, every season.
        </h1>

        <p className="font-body text-muted text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
          Grass & More Co. started with one mower, one truck, and a handful of neighbors who just
          wanted a lawn they didn't have to think about. Now we handle everything from weekly mowing
          to fall cleanup to snow removal, the full cycle of what a property actually needs across
          the year, not just a one-time job.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div key={i} className="bg-bg rounded-lg p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-sage" size={20} />
                </div>
                <p className="font-body text-text text-sm">{pillar.text}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mb-5">
          <Link
            to="/contact"
            className="inline-block bg-accent text-text font-body font-semibold px-8 py-3 rounded hover:bg-accent/90 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="text-center pt-5">
          <p className="font-body text-muted mb-2">Licensed and insured.</p>
          <p className="font-body text-muted mb-2">
            6 years serving the Triad-area properties, residential and small commercial.
          </p>
          <p className="font-body text-muted mb-6">
            Flexible scheduling, weekly, seasonal, or one-time jobs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

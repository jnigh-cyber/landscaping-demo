import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.webp'

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={heroImg}
          alt="Freshly maintained lawn with modern architecture in the background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/50" />

        <div className="absolute inset-0 flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4 text-text">
                Your yard, handled, every season.
              </h1>
              <p className="font-body text-text/90 text-lg mb-6">
                Weekly mowing, seasonal cleanup, and everything in between.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-accent text-text font-body font-semibold px-8 py-3 rounded hover:bg-accent/90 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-12 px-4">
        <div className="max-w-4xl mx-auto bg-surface rounded-lg grid grid-cols-3 divide-x divide-bg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]">
          <div className="p-5 text-center">
            <p className="font-display text-2xl md:text-3xl text-accent">6+</p>
            <p className="font-body text-muted text-xs uppercase tracking-wide mt-1">
              Years serving the Triad
            </p>
          </div>
          <div className="p-5 text-center">
            <p className="font-display text-2xl md:text-3xl text-accent">50+</p>
            <p className="font-body text-muted text-xs uppercase tracking-wide mt-1">
              Properties maintained
            </p>
          </div>
          <div className="p-5 text-center">
            <p className="font-display text-2xl md:text-3xl text-accent">Licensed</p>
            <p className="font-body text-muted text-xs uppercase tracking-wide mt-1">
              & fully insured
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

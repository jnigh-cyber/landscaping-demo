import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-bg px-4 py-10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-accent text-lg mb-1">Grass & More Co.</p>
          <p className="font-body text-muted text-sm">
            Lawn care and landscaping, serving the Triad, Greensboro, High Point, and Winston-Salem.
          </p>
        </div>

        <nav className="flex gap-6 font-body text-sm">
          <Link to="/" className="text-muted hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-muted hover:text-accent transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-muted hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-muted hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        <div className="font-body text-muted text-sm text-center md:text-right">
          <p>
            <a
              href="mailto:owner@grassandmoreco.com"
              className="hover:text-accent transition-colors"
            >
              owner@grassandmoreco.com
            </a>
          </p>
          <p>
            <a href="tel:+15551234567" className="hover:text-accent transition-colors">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-bg text-center">
        <p className="font-body text-muted text-xs">
          © {year} Grass & More Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

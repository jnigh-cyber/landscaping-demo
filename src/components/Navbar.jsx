import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-surface">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-accent text-xl" onClick={() => setIsOpen(false)}>
          Grass & More Co.
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 font-body">
          <Link to="/" className="text-text hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-text hover:text-accent transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-text hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-text hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 font-body">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-text hover:text-accent">
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-text hover:text-accent"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-text hover:text-accent"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-text hover:text-accent"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

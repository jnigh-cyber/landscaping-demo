import {useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div>
        <Link to='/'>
          Grass & More Co.
        </Link>
        {/* Desktop Links */}
        <div className='hidden md:flex'>
          <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/services' onClick={() => setIsOpen(false)}>Services</Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
          <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        {/* Mobile Ham button */}
        <button
        
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className='md:hidden flex flex-col'>
          <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/services' onClick={() => setIsOpen(false)}>Services</Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
          <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar
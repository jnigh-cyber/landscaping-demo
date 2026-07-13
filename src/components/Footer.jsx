import {Link} from 'react-router-dom'

function Footer() {
  //Grabing the year.
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div>
          <p>Grass & More Co.</p>
          <p>Lawn care and Landscaping, serving the Triad.</p>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div>
          <p>[owner@grassandmoreco.com]</p>
          <p>(336) 123-4567</p>
        </div>
      </div>
      <div>
        <p>© {year} Grass & More Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import LOGO from '../assets/logo2.jpg'
import { Link } from 'react-router-dom'

function Navbar() {

  const [ isLinksOpen, setIsLinksOpen ] = useState(false);

  return (
    <header>
      <nav className="navbar flex items-center justify-between gap-12 py-2 px-24 border-b max-[480px]:px-4">
        <Link to={'/'} className="logo">
          <img src={LOGO} alt="Logo" className="h-16 max-[480px]:h-10" />
        </Link>

        <ul className={`links flex items-center gap-6 text-xl ${isLinksOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/destination">Destinations</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          { 
            isLinksOpen && (
              <li className="links_auth_buttons flex items-center gap-4 text-2xl">
                <Link to="/register" className="register-button p-2 bg-gray-300 rounded-lg transition-all hover:scale-105 hover:-translate-y-0.5 text-nowrap">Sign up</Link>
                <Link to="/login" className="login-button  p-2 text-gray-700 bg-amber-300 rounded-lg transition-all hover:scale-105 hover:-translate-y-0.5 text-nowrap">Log in</Link>
              </li>
            )
          }
        </ul>

        <div className="auth_buttons flex items-center gap-4 text-2xl">
          <Link to="/register" className="register-button font-bold p-2 bg-gray-300 rounded-lg transition-all hover:scale-105 hover:-translate-y-0.5 text-nowrap">Sign up</Link>
          <Link to="/login" className="login-button font-bold  p-2 text-gray-700 bg-amber-300 rounded-lg transition-all hover:scale-105 hover:-translate-y-0.5 text-nowrap">Log in</Link>
        </div>

        <div className="nav_togeler">
          <button
            className="p-2 bg-gray-300 rounded-lg transition-all hover:scale-105 hover:-translate-y-0.5"
            onClick={() => setIsLinksOpen(!isLinksOpen)}
          >
            {isLinksOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="relative w-full min-h-20 bg-white shadow-md z-50 font-bold" style={{ fontFamily: "Lato, sans-serif" }}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 min-h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Logo"
            className="w-20 md:w-24 h-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">

          <li>
            <Link to="/" className="text-red-900 text-lg font-serif">
              Home
            </Link>
          </li>

          <li>
            <Link to="/units" className="text-gray-600 hover:text-red-900 text-lg font-serif">
              Units
            </Link>
          </li>

          <li>
            <Link to="/zones" className="text-gray-600 hover:text-red-900 text-lg font-serif">
              Zones
            </Link>
          </li>

          <li>
            <Link to="/developers" className="text-gray-600 hover:text-red-900 text-lg font-serif">
              Developers
            </Link>
          </li>

          <li>
            <Link to="/contactus" className="text-gray-600 hover:text-red-900 text-lg font-serif">
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Register Desktop */}
        <button className="hidden lg:block bg-gradient-to-r from-red-900 to-red-500 px-6 py-2 text-white rounded-sm">
          Register
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="lg:hidden text-red-900 text-3xl cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          type="button"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full lg:hidden bg-white shadow-lg border-t z-50">

          <ul className="flex flex-col items-center gap-5 py-6">

            <li>
              <Link to="/" onClick={closeMenu} className="text-red-900 text-lg">
                Home
              </Link>
            </li>

            <li>
              <Link to="/units" onClick={closeMenu} className="text-gray-600 text-lg">
                Units
              </Link>
            </li>

            <li>
              <Link to="/zones" onClick={closeMenu} className="text-gray-600 text-lg">
                Zones
              </Link>
            </li>

            <li>
              <Link to="/developers" onClick={closeMenu} className="text-gray-600 text-lg">
                Developers
              </Link>
            </li>

            <li>
              <Link to="/contactus" onClick={closeMenu} className="text-gray-600 text-lg">
                Contact Us
              </Link>
            </li>

            <li className="w-full px-6">
              <button className="w-full bg-gradient-to-r from-red-900 to-red-500 py-2 text-white rounded-sm">
                Register
              </button>
            </li>

          </ul>
        </div>
      )}

    </nav>
  )
}

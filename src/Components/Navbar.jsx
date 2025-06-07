import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/image/icon.png'


function Navbar() {

  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle menu function for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-4 shadow-md z-50 " style={{backgroundColor: '#73946B'}} >
      {/* Brand/Logo Section */}
      <div className="brand-logo flex items-center gap-2 ">
        <img src={logo} alt="LagoonD." className='w-10 h-10' />
        <h1 className='text-white text-2xl font-bold'>DocHerbal.</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className='text-white text-2xl font-bold md:hidden'
       onClick={toggleMenu}>

        {isMenuOpen ? (
          <FaTimes  />
        ) : (
          <FaBars />
        )}
      </button>

      {/* Navigation Links */}

        <div 
        
        className={`
        
        absolute top-full left-0 w-full bg-[#73946B] shadow-md z-10
        overflow-hidden transition-all duration-500 ease-in-out 
        flex flex-col items-center font-bold
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}

        md:flex md:space-x-10 md:static md:w-auto md:bg-[#73946B] md:shadow-none  md:max-h-full  md:opacity-100 md:flex-row md:items-center

        `}
        style={{transitionProperty: 'max-height, opacity'}}
        >

          <a href="/" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'>Home</a>
          <a href="/" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'>Benefits</a>
          <a href="/" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'>About Us</a>
          <a href="/" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'>Contact Us</a>
          
          

        </div> 

    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/image/icon.png'


function Navbar() {



  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    
    const targetSection = document.getElementById(sectionId)

    if (targetSection) {

      const navbarHeight = 80; 
      const elementPosition = targetSection.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo(
        {
          top: offsetPosition,
          //offsetPosition is the position of the section minus the height of the navbar
          //sample the offsetPosition is 500 and the navbar height is 80, so the top will be 420
          behavior: 'smooth' 
        }
      )


    }

  };





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

          <a
           href="#home" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors' 
          onClick= { (e) => {e.preventDefault();
             scrollToSection('home');

          }}>   
          Home          
           </a>



          <a href="#benefits" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'
          onClick={()=>{e.preventDefault(); 
            scrollToSection('benefits');
          }}        
          >Benefits</a>


          <a href="#about" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'
          onClick={()=>{ 
            e.preventDefault();
            scrollToSection('about');
          }}
          >About Us</a>


          <a href="#contact" className='block md:inline-block py-2 px-4 text-white hover:text-gray-200  hover:shadow-md hover:bg-[#537D5D] rounded-md hover:text-black transition-colors'
          onClick={()=> {
            e.preventDefault();
            scrollToSection('contact');

          }}
          >Contact Us</a>
          
          

        </div> 

    </nav>
  )
}

export default Navbar
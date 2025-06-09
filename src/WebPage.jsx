import React from 'react'
import Header from './Shared/Header'
import Home from './Pages/home'
import Benifits from './Pages/Benifits'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Footer from './Shared/Footer'

function WebPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#9EBC8A] ">
      <header>
        <Header   />
      </header>
      
      <main className="flex-grow">

        <section id="home" className="min-h-screen]">
           <Home  />
        </section>

        <section id="benefits" className='min-h-screen bg-[#73946B]'>
          <Benifits  />
        </section>

        <section id="about"  className='min-h-screen bg-[#9EBC8A]'>
        <AboutUs />
        </section>

        <section id="contact" className=' bg-[#9EBC8A] mt-10'>
        <ContactUs />
        </section>
       
        
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export default WebPage
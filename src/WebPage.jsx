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
        <Header />
      </header>
      
      <main className="flex-grow">
        <Home />
        <Benifits />
        <AboutUs />
        <ContactUs />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export default WebPage
import React from 'react'
import Header from './Shared/Header'
import Home from './Pages/home'
import Benifits from './Pages/Benifits'

function WebPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#9EBC8A] ">
      <Header />
      <main className="flex-grow">
        <Home />
        <Benifits />
      </main>
    </div>
  )
}

export default WebPage
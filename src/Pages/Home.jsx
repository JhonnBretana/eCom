import React from 'react'
import model from '../assets/image/model.png'
import overlay from '../assets/image/bg-overlay.png'

function Home() {
  return (
    <div className='min-h-screen  overflow-hidden relative '> 
    {/*overlay image*/}
    
    
      <img 
      src={overlay} 
      alt="background overlay" 
      className='absolute top-30 right-10  w-150 h-100  
      inset-0 object-cover opacity-50 mix-blend-overlay transform rotate-20 z-0 
      md:top-60 md:w-200 md:h-200' />

      <img 
      src={overlay} 
      alt="background overlay" 
      className='absolute top-150 right-40 w-50 h-50  
      opacity-50 mix-blend-overlay transform rotate-320 z-0 
      md:top-10 md:right-100 md:w-100 md:h-150' />
      
      


      
    

        <div className='flex flex-col md:flex-row pt-20 px-5 justify-center items-center  mt-20 '> 

          
          {/*min-h-[90vh] means minimum height of 90vh*/}

          {/*Text*/}
          <div className=' px-5 space-y-5 text-center md:px-10 md:text-left  '>
             <h1 className='text-5xl sm:text-4xl md:text-7xl lg:text-10xl text-white persona md:px-10 '>Welcome to DocHerbal!</h1>
             <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-10 md:px-10  '> 
             <span className='text-2xl block font-bold'>100% Plant-Based Wellness</span>

              Experience the power of nature with our all-natural herbal remedy, crafted to restore balance, boost immunity, and support your well-being – without side effects. Trusted by generations, backed by science.</p>

              <div className='flex justify-center items-center md:justify-start md:ml-10 '>
                <button className='bg-[#537D5D] text-white px-6 py-3 rounded-md hover:bg-[#406449] hover:shadow-md transition-colors duration-300 md:px-10 md:py-4 md:text-lg z-10'>See the Benefits</button>
              </div>
          </div>
           
           {/*Model Image*/}
           <div className='flex justify-center items-center z-10'>
            <img src={model} alt="" className='w-xl md:w-7xl ' />
           </div>
        </div>
    </div>
  )
}

export default Home
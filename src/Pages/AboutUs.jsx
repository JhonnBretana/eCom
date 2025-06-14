import React from 'react'
import IT from '../assets/image/IT.png'
import Doc from '../assets/image/Doctor.png'
import Ceo from '../assets/image/Ceo.png'

function AboutUs() {
  return (
    <div>

        {/*about us*/}
        <div className='flex flex-col  items-center justify-center bg-[#73946B] w-full h-40 relative md:h-60'>
                
            <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Nature"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
                <div className='flex flex-col items-center justify-center z-10 gap-4 text-white'>
                    
                    <h1 className=" text-5xl md:text-7xl persona">About Us</h1>

                    <p className='text-sm md:text-lg text-center px-4'>DocHerbal is a company that provides herbal products to the public. We are a team of herbalists and scientists who are dedicated to providing the best herbal products to the public.</p>
                    
                </div>                       
        </div>

        {/*main content*/}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10
         mx-10 lg:mx-full xl:mx-90 mt-20  h-90    '>
            

            {/*our mission*/}
            <div className='flex flex-col items-center  bg-[#537D5D] rounded-lg p-4  text-white text-center shadow-xl '>
                <h1 className='text-2xl font-bold md:text-5xl pt-1 md:pt-10'>Our Mission</h1>
                <p className='text-sm md:text-lg mt-10'>Our mission is to provide safe, effective, and natural herbal remedies that support your health and well-being. We believe in the power of nature, backed by science, and are committed to delivering products that you and your family can trust.</p>
            </div>

            {/*our vision*/}
            <div className='flex flex-col items-center  bg-[#537D5D] rounded-lg p-4  text-white text-center shadow-xl '>
                <h1 className='text-2xl font-bold md:text-5xl pt-1 md:pt-10'>Our Vision</h1>
                <p className='text-sm md:text-lg mt-10'>Our vision is to be the leading provider of plant-based wellness solutions, inspiring healthier communities and a deeper connection to nature's healing power.</p>
            </div>
            
        </div>

        {/*our team*/}
        <div className='flex flex-col  items-center justify-center mt-40 md:mt-20'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-4xl font-bold text-white md:text-5xl pt-1 md:pt-10'>Meet the Team</h1>
            </div>

            {/*team*/}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                {/*developer*/}
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-50 h-50 rounded-full overflow-hidden border-5 border-white mb-10 '>
                        <img src={IT} alt="IT" className='w-full h-full object-cover' />
                    </div>
                    <div className='text-white text-center persona text-2xl'>
                        <h1>Jhonn Michael Bretaña</h1>
                        <p>Web Developer</p>
                    </div>
                </div>
                
                {/*Doctor*/}
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-50 h-50 rounded-full overflow-hidden border-5 border-white mb-10 '>
                        <img src={Doc} alt="IT" className='w-full h-full object-cover' />
                    </div>
                    <div className='text-white text-center persona text-2xl'>
                        <h1>Dr. Roberto S. Pineda</h1>
                        <p>Doctor</p>
                    </div>
                </div>

                {/*Founder*/}
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-50 h-50 rounded-full overflow-hidden border-5 border-white mb-10 '>
                        <img src={Ceo} alt="IT" className='w-full h-full object-cover' />
                    </div>
                    <div className='text-white text-center persona text-2xl'>
                        <h1>Mrs. Maria Elena Pineda</h1>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default AboutUs
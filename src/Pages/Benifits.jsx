import React from 'react'
import card1 from '../assets/image/card1.png'
import card2 from '../assets/image/card2.png'
import card3 from '../assets/image/card3.png'
import icontent from '../assets/image/icontent.png'
import { FaLeaf, FaLungs, FaHeart } from 'react-icons/fa'

function Benifits() {
  return (
    <div >
            <div className='container mx-auto flex flex-col items-center justify-center' >
              <div className='flex flex-col items-center justify-center mt-20 '>
                <h1 className='text-4xl md:text-7xl text-white persona'>Lagundi Herbal Benefits </h1>
                <p className='text-white text-xl'>Discover the Healing Power of Lagundi</p>
              </div>
        
               {/*featured cards*/}
                  <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-20 text-white md:px-10'>
                        
                        {/*card 1*/}
                        <div className='bg-[#9EBC8A] rounded-lg shadow-md 
                        h-full w-70 overflow-hidden p-1 sm:w-full md:w-55 md:h-100 lg:w-70 lg:h-full
                        hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-[#8FAE89]'>
                            <div className='relative'>
                                <img src={card1} alt="" className='w-100 h-full object-cover' />                               
                            </div>
                           
                           <div className='p-4 flex flex-col gap-2 justify-center items-center'>
                                <h2 className=' sm:text-xl md:text-sm lg:text-1xl font-bold'>Natural Cough Relief</h2>
                                <p className='text-sm text-center'>Lagundi contains antioxidants that help boost your immune system and protect your body from harmful free radicals.</p>
                       
                           </div>
                       </div>



                        {/*card 2*/}
                        <div className='bg-[#9EBC8A] rounded-lg shadow-md 
                        h-full w-70 overflow-hidden p-1  sm:w-full md:w-55 md:h-100 lg:w-70 lg:h-full
                        hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-[#8FAE89] '>
                            <div className='relative'>
                                <img src={card2} alt="" className='w-100 h-full object-cover' />  
                            </div>
                           
                           <div className='p-4 flex flex-col gap-2 justify-center items-center'>
                                <h2 className='text-50 font-bold sm:text-xl md:text-center md:text-sm lg:text-1xl'>Helps with Asthma & Breathing</h2>
                                <p className='text-sm text-center'>Known for its bronchodilator properties, Lagundi supports better airflow and helps reduce symptoms of asthma and bronchitis.</p>
                       
                           </div>
                       </div>

                        {/*card 3*/}
                        <div className='bg-[#9EBC8A] rounded-lg shadow-md 
                        h-full w-70 overflow-hidden p-1  sm:w-full md:w-55 md:h-100 lg:w-70 lg:h-full
                        hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-[#8FAE89]'>
                            <div className='relative'>
                                <img src={card3} alt="" className='w-100 h-full object-cover' />

                               
                            </div>
                           
                           <div className='p-4 flex flex-col gap-2 justify-center items-center'>
                                <h2 className='text-50 font-bold sm:text-xl md:text-center md:text-sm lg:text-1xl'>Herbal & Safe for the Family</h2>
                                <p className='text-sm text-center'>Lagundi is recognized by the Department of Health (DOH) as a safe, non-drowsy herbal medicine for both kids and adults. No harmful chemicals.</p>
                       
                           </div>
                       </div>
                </div>
         </div>

                {/*more content*/}
                <div className=' min-h-[50vh] bg-[#537D5D] mt-20 '>


                   <div className='flex flex-col md:flex-row items-center justify-center'>

                        <div className='flex flex-col items-center justify-center  p-10 md:w-1/2'>
                             <img src={icontent} alt="" className='w-120  object-cover rounded-lg md:shadow-lg' />
                       </div>

                    {/*text*/} 
                        <div className=' p-10 flex flex-col items-center justify-center gap-10 md:w-1/2 '>
                            <h1 className='text-white text-2xl  md:text-4xl md:text-center   persona '>Lagundi Herbal Benefits </h1>
                            <p className='text-white text-base md:text-md text-center'>A heartwarming moment captures a Southeast Asian mother lovingly giving Lagundi herbal syrup to her young son using a small plastic medicine cup. They are seated on a cozy sofa in a sunlit living room, with the boy calmly sipping the syrup while his cheerful sister watches beside them. The mother holds the Lagundi bottle, clearly labeled, reinforcing the natural remedy’s presence. The scene evokes a sense of family care, wellness, and trust in herbal medicine.</p>
                        </div>
                </div>
                    


                </div>
                    
      
    </div>
  )
}

export default Benifits
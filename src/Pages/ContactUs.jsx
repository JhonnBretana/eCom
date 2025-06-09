
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className=' bg-[#9EBC8A] mt-10'>
        <div>
            <div className='flex flex-col items-center justify-center bg-[#73946B] w-full h-40 relative '>
                <h1 className=" text-5xl text-white persona" >Contact Us</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5 mt-10 mb-10 w-full xl:max-w-6xl mx-auto'>

                 {/*contact*/}
                <div className='flex flex-col items-center justify-center bg-[#73946B] rounded-lg p-4
                    '>

                    <h1 className='text-2xl md:text-4xl text-white persona' >Contact Details</h1>

                    <div className='text-white flex flex-col items-center justify-center mt-5'>
                        <h3 className='text-1xl font-bold text-center mt-4 mb-2'>
                            Have questions, feedback, or need assistance?                                                      
                       </h3>

                        <div className='flex flex-col  items-start gap-2 mb-4 mt-5'>
                            <div className='flex items-center justify-center gap-2 mb-4'>
                            <FaEnvelope className='text-2xl' > </FaEnvelope>
                            <span>Docherbal@gmail.com</span>
                            </div>

                            
                            <div className='flex items-center justify-center gap-2 mb-4'>
                            <FaPhone className='text-2xl' > </FaPhone>
                            <span>+63 945 7890 323 </span>
                            </div>
                        </div>
                       
                


                    </div>


                </div>


                    {/*contact form*/}
                <div className='  rounded-lg bg-[#73946B]
                 shadow-lg h-full p-6  backdrop-blur-md opacity-100 border border-[#73946B4D]  '>
                    <h1 className='text-2xl md:text-4xl text-white persona text-center' >Contact Form</h1>
                    <p className=' text-sm text-white mb-4 mt-2 '>
                        Feel free to contact us any time. we will get back to you as soon as we can.
                    </p>
                    <form action="" className='text-white' >
                        <div className='mb-5'>
                            <label htmlFor="name" className='text-1xl ' >Name:</label>
                            <input type="text" id="name" placeholder='Enter your name' className='w-full p-1 rounded-md border-2 border-white bg-white shadow-md text-black text-1xl'  />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="email" className='text-1xl' >Email:</label>
                            <input type="email" id="email" placeholder='Enter your email' className='w-full p-1 rounded-md border-2 border-white bg-white shadow-md text-black text-1xl '  />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="message" className='text-1xl' >Message:</label>
                            <textarea id="message" placeholder='Enter your message' className='w-full h-15 p-1 rounded-md border-2 border-white bg-white shadow-md text-black text-1xl '  />
                        </div>

                        <div className='flex justify-center items-center'>
                            <button type="submit" className='text-black p-1 rounded-md w-lg bg-[#537D5D] text-white text-2xl font-bold shadow-lg'>Submit</button>
                        </div>
                        

                    </form>
                </div>

                

                

            
            </div>
            
        </div>
    </div>
  )
}

export default ContactUs
import React from 'react'
import icon from '../assets/Image/icon.png'
import { FaFacebook, FaInstagram, FaFacebookMessenger } from 'react-icons/fa'

function 
a() {
  return (
    <div className='min-h-[9vh] bg-[#73946B] p-3 '>
        <div>
            {/*logo*/}
            <div>
                <img src={icon} alt="Logo" className='w-10 h-10 mx-auto mt-2' />
            </div>

          

            {/*SocMed Icon*/}
            <div>
                <div className='flex justify-center items-center mt-2 mb-2'>

                 <a href="#" target="_blank" rel="noopener noreferrer" 
                 className='text-white text-2xl mx-2 hover:text-gray-200'>
                    <FaFacebook />                                       
                 </a>

                 <a href="#" target="_blank" rel="noopener noreferrer" 
                 className='text-white text-2xl mx-2 hover:text-gray-200'>
                    <FaInstagram />                                       
                 </a>

                 <a href="#" target="_blank" rel="noopener noreferrer"
                 // noopener is for security to prevent the new page from accessing the original page's window object and noreferrer is to prevent the new page from sending a referrer header.
                    className='text-white text-2xl mx-2 hover:text-gray-200'>
                    <FaFacebookMessenger />                                       
                </a>
                </div>
            </div>

              <div>
                <hr className=' border-t border-[#9EBC8A] my-4' />
            </div>

                <div>
                    <p className='text-white text-sm text-center text-sm'>
                        © 2025 Docherbal. All rights reserved.
                    </p>
                </div>
        </div>
    </div>
  )
}

export default 
a
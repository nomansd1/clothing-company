import React from 'react'
import { Cart, User, Carret, View } from '../assets/images/index.js'

function Header() {
  return (
    <div className='flex items-center justify-between bg-black text-white py-3 px-5'>
        <div className='flex items-center w-[35%] justify-between'>
            <div className='flex justify-center items-center'>
                <div className='bg-white rounded-lg p-1'>
                    <img src={Cart} alt="logo" className='text-white'/>
                </div>
                <div className='flex flex-col ml-1.5 justify-center items-start'>
                    <h1 className='text-base uppercase font-semibold leading-3'>martvill</h1>
                    <p className='text-xs'>A platform to sell anything.</p>
                </div>
            </div>
            <div className='flex items-center cursor-pointer'>
                <img src={View} alt="view site" className='h-6 mr-1 -scale-x-[1]' />
                <h1>View Site</h1>
            </div>
        </div>
        <div>
            <div className='flex items-center cursor-pointer'>
                <img src={User} alt="user" className='h-5 w-10' />
                <h1 className='text-lg'>Jamal</h1>
                <img src={Carret} alt="carret" className='ml-2 mt-1' />
            </div>
        </div>
    </div>
  )
}

export default Header

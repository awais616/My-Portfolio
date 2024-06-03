import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Card = ({title, des, icon}) => {
  return (
    <div id='cards' className='w-full px-8 h-100 py-6 rounded-lg flex items-center group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]
        transition-colors duration-100 group'>
            <div className='h-82 overflow-y-hidden'>
                <div className='flex h-full flex-col gap-8 translate-y-6 group-hover:translate-y-0 
                                transition-transform duration-500'>
                    <div>
                        <span className='text-5xl text-designColor'>{icon}</span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-xl md:text-2xl font-titleFont font-bold text-gray-300'>
                        {title}
                        </h2>
                        <p>{des}</p>
                        <span className='text-2xl text-designColor'>
                            <HiArrowRight/>
                        </span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card
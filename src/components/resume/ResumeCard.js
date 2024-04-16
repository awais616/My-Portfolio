import React from 'react'
import Title from '../layout/Title'

const ResumeCard = ({title, subTitle, des}) => {
  return (
    <div className='w-full group flex'>
        <div className='w-10 h-[6px] bg-black bg-opacity-40 mt-16 relative '>
            <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'>
                </span>
            </span>
        </div>

        <div id='resumecard' className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rouned-lg px-10 flex flex-col
                        justify-center gap-5 '>
            <h2 className='pt-10 text-gray-300 group-hover:text-white duration-300'> {title}</h2>
            <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
            <p className='text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>{des}</p>
        </div>
    </div>
  )
}

export default ResumeCard
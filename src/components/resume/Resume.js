import React from 'react'
import Title from '../layout/Title'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title title = "2+ Years of Experience" des = "My Resume" />
        </div>

        <div>
            <ul className='w-full grid grid-cols-3'>
                <li className='w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer
                    hover:bg-opacity-40 duration-300 items-center 0rounded-none'>
                Education
                </li>
                <li className='w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer
                    hover:bg-opacity-40 duration-300 items-center rounded-none'>
                    Professional Skills
                </li>
                <li className='w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer
                    hover:bg-opacity-40 duration-300 items-center rounded-none'>
                    Experience
                </li>
            </ul>
        </div>

        <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[]4px'> 2016- 2024</p>
            <h2 className='text-4xl font-bold'>Education</h2>
        </div>

        <div className='mt-14 w-1/2 h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title = "Associate Degree Program in Computer Science"
                subTitle = "Superior University 2023-2024"
                des = "provides students with foundational knowledge and skills in computer programming, software development, computer systems, and data analysis."
            />
            <ResumeCard 
                title = "Intermediate in Computer Science"
                subTitle = "Government Khawaja Rafique Shaheed College 2016-2017"
                des = " Individuals at this stage have a solid understanding of fundamental programming languages, data structures, algorithms, and software development principles."
            />
        </div>
    </section>
  )
}

export default Resume
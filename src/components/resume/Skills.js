import React from 'react'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <motion.div  initial = {{opacity:0}} animate = {{ opacity:1, transition:{duration:.5}}}
                className ='w-full flex flex-col lgl:flex:row '>
                <div className='py-14 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Development Skills</h2>
                </div>

                <div className='w-full lgl:w-1/2'>
                <div className=' overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>html</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>100%</span>
                    </motion.span>
                  </span>
                </div>

                <div className='overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>CSS</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>90%</span>
                    </motion.span>
                  </span>
                </div>

                <div className='overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>JavaScript</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>85%</span>
                    </motion.span>
                  </span>
                </div>

                <div className='overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>React</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>70%</span>
                    </motion.span>
                  </span>
                </div>

                <div className='overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>GitHub</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>85%</span>
                    </motion.span>
                  </span>
                </div>

                <div className='overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>Bootstrap</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                  </span>
                </div>

                <div className='overflow-x-hidden py-2'>
                  <p className='text-sm uppercase font-medium'>Tailwind CSS</p>
                  <span className='w-full h-2 bg-black bg-opacity-25 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial = {{x: "-100%", opacity:0}}
                    animate = {{x: 0, opacity:1}}
                    transition = {{duration:0.5, delay:0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative '>
                      <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                  </span>
                </div>
                </div>


        </motion.div>
  )
}

export default Skills
import React from 'react'
import {bannerimg} from '../../assets/index'
import {useTypewriter, Cursor } from 'react-simple-typewriter';
import {FaFacebookF, FaTwitter, FaReact, FaLinkedinIn, FaAngular} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';

const Banner = () => {
  const [text] = useTypewriter ({
    words : ["Front end Developer", "Professional Coder", "UI Designer"],
    loop : true,
    typeSpeed : 20,
    delaySpeed : 10,
    delaySpeed : 2000,
  });
  return (
    <section id='home' 
    className='w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black font-titleFont'>
      <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal '>WELCOME TO MY PROFILE</h4>
          <h1 className='text-5xl font-bold text-white'>
          Hi, I'm
          <span className='text-designColor Capitaliza'> Muhammad Awais</span>
          </h1>
          <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span> 
          <Cursor
            cursorBlinking = "false"
            cursorStyle = ""
            cursorColor = '#ff014'
          />
          </h2>
          <p className='text-base font-bodyFont leading-6 tracking-wide'>
          A highly experienced Mid Level Frontend Developer with 2 years of expertise in developing user-friendly, adaptive and 
          responsive websites with optimized cross-browser compatibility and runtime performance. Spearheaded projects to 
          strengthen the brand by creating engaging web layouts for destination websites.</p>
        </div>
          <div className='flex justify-between'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
            Find me in
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                  <FaFacebookF />
              </span>
              <span className='bannerIcon'>
                  <FaTwitter/>
              </span>
              <span className='bannerIcon'>
                  <FaLinkedinIn/>
              </span>
            </div>
          </div>
          <div >
              <h2 className='text-base uppercase font-titleFont mb-4'>
                best skills on
              </h2>
              <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaReact/>
              </span>
              <span className='bannerIcon'>
                <SiJavascript/>
              </span>
              <span className='bannerIcon'>
                <FaAngular/>
              </span>
              </div>
          </div>
          </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
          <img className='w-[500px] h-[680px] z-10' 
          src={bannerimg} alt="bannerimg" />
      </div>
    </section>
  )
}

export default Banner
import React from 'react'
import { Link } from 'react-scroll';
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import {navLinksdata} from '../../constants'
import { useState } from 'react';



  
const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false)

    const resumeFile = './Resume.pdf'

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = 'Resume.pdf';
      link.click();
    };
  

  return (
    <div className='w-[100%] h-20 mx-auto sticky top-0 z-50  bg-bodyColor flex justify-end items-center font-titleFont 
                  border-b-[1px] border-b-gray-600'>
        <div>


      <ul className='hidden mdl:inline-flex gap-10'>
          {
          navLinksdata.map(({_id, title, link})=>(
            <li className='text-base  font-normal  text-gray-400 tracking-wide cursor-pointer hover:text-designColor
            duration-300'
            key = {_id}
            >
            <Link
            activeClass='active'
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              {title}
            </Link>
            </li>
          ))
          }
          <button onClick={handleDownload} className='text-designColor'>Download Resume</button>
      </ul>

      <span onClick={() => setShowMenu(!showMenu)}
      className='text-3xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full
       text-designColor cursor-pointer'>
       <FiMenu/></span>
       {
        showMenu && (
          <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-bodyColor p-4 scrollbar-hide'>
            <div>
              <div className='w-[70%] py-4 h-[80%] border-b-[1px] border-b-gray-600'>
                <h2>Muhammad Awais</h2>
              </div>
              <ul className='flex flex-col gap-6 w-[70%] py-4 border-b-[1px] border-b-gray-600'
              >{navLinksdata.map ((item) => (
                <li onClick={() => setShowMenu (false)}
                
                 className='text-base  font-normal  text-gray-400 tracking-wide cursor-pointer hover:text-designColor
                    duration-300 last:text-designColor'>
                  <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                    {item.title}
                  </Link>                 
                </li>
              ))
              }
              <button onClick={handleDownload} className='text-designColor flex flex-col gap-6 w-[70%] py-4'>Download Resume</button>
              </ul>
              <div className='flex py-4 flex-col gap-4'>
                  <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                  <div className='flex gap-4'>
                    <span className='bannerIcon'>
                    <a href="https://www.facebook.com/shootergang.shootergang/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    </span>
                    <span className='bannerIcon'>
                      <FaTwitter/> 
                    </span>
                    <span className='bannerIcon'>
                    <a href="https://www.linkedin.com/in/m-awais-dev/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                    </span>
                  </div>
              </div>
            </div>
            <span onClick={() => setShowMenu(false)}
      className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer'>
       <MdClose/></span>
          </div>
        )
       }
    </div>
    </div>
  )
}

export default Navbar
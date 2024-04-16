import React from 'react'
import {link} from 'react-scroll';
import {logo} from '../../assets/index'
import {navLinksdata} from '../../constants'

  
const Navbar = () => {
  return (
    <div className='w-full h-15 mx-auto flex sticky top-0 z-50 bg-bodyColor justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
    <div>

      {/* Logo */}
      <img className='h-[80px]' src={logo} alt="logo" />
        
    </div>
    <div>
      <ul className='flex item-center gap-10'>
          {
          navLinksdata.map(({_id, title, link})=>(
            <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key = {_id}>
              
              {title}
              
            </li>
          ))
          }
      </ul>
    </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { AiOutlineApi } from 'react-icons/ai'
import { HiCode } from "react-icons/hi";
import { FaMobileAlt, FaEdit, FaUserTie } from 'react-icons/fa'
import { SiAntdesign } from 'react-icons/si'
import {FiMonitor} from 'react-icons/fi'
import Title from '../layout/Title'
import Card from './Card'

const Features = () => {
  return (
    <section id='features'
     className='w-full h-[1650px] py-20 border-b-[1px] border-b-black'>
      <Title title = "Services" des = "I offer these services for you" />
      <div className='grid grid-cols-3 gap-20 '>
      <Card 
          title = "Web Development"
          des = "To build responsive and scalable websites and web applications tailored to your business needs.To transform your ideas into a dynamic web presence that aligns perfectly with your goals."
          icon = {<FiMonitor />}
      />
      <Card 
          title = "Web Design"
          des = "Revitalize your online presence with our top-notch web design services. Our skilled team blends creativity and functionality to craft visually stunning websites that captivate audiences."
          icon = {<SiAntdesign />}
      />
      <Card 
          title = "Responsive Design"
          des = "To build responsive and scalable websites and web applications tailored to your business needs.To transform your ideas into a dynamic web presence that aligns perfectly with your goals."
          icon = {<FaMobileAlt />}
      />
      <Card
          title = "Code and best practice"
          des = "Adhere to coding standard, industry best practices, maintain high code quality. Strive for clean, modulator and well-documented code to enhance readability, maintainability and collabarative development"
          icon = {<HiCode />}
          />
      <Card 
            title = "Intuitive User Interfaces"
            des = "User experience is paramount. I design and develop intuitive user interfaces (UI) that prioritize usability and accessibility, making it easy for users to navigate and interact with your website or application."
            icon = {<FaUserTie />}
      />
      <Card 
            title = "LOGO DESIGN"
            des = "We specialize in creating unique and memorable logos that encapsulate your brand's essence, combining creativity with strategic design elements."
            icon = {<FaEdit />}
      />
      <Card 
            title = "API Development"
            des = "Expertise and creating efficient and flexible APIs using graphQL and Apollo. Utilize graphQL to streamline data fetching, enhancing performance and customization capabilities"
            icon = {<AiOutlineApi />}
      />
      </div>
    
    </section>
  
  )
}

export default Features
import React from 'react'
import { useState } from 'react'
import Title from '../layout/Title'
import Education from './Education'
import Skills from './Skills'

const Resume = () => {

    const [educationData, setEducationData] = useState (true);
    const [skillData, setSkillData] = useState (false);
    // const [experienceData, setExperienceData] = useState (false)


  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title 
            // title = "2+ Years of Experience" 
            des = "My Resume" />
        </div>


{/* for add more coloums increase coloums */}
        <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
                <li onClick={() => setEducationData (true) &
                setSkillData (false) 
                // & setExperienceData (false)
                            } 
                className={`${educationData ? "text-designColor" : ""} resumeLi`} >
                Education
                </li>

                <li onClick={() => setSkillData (true) &
                setEducationData (false)
                // & setExperienceData (false)
                            } 
                
                className= {`${skillData ? "text-designColor" : ""} resumeLi`}>
                    Professional Skills
                </li>
                
                
                {/* <li className={`${experienceData ? "text-designColor" : ""} resumeLi`}>
                    Experience
                </li> */}


            </ul>
        </div>
        
        {/* <Education /> */}

        

        {educationData && <Education/> }
        {skillData && <Skills />}
        {/* {experieceData && <Experience />} */}
    </section>
  )
}

export default Resume
import React, {useState} from 'react'
import Title from '../layout/Title'
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import { contactimg } from '../../assets/index'


const Contact = () => {
        const[username, setUsername] = useState ("")
        const[phoneNumber, setPhoneNumber] = useState ("")
        const[email, setEmail] = useState ("")
        const[subject, setSubject] = useState ("")
        const[message, setMessage] = useState ("")
        const[errMsg, setErrMsg] = useState ("")
        const[successMsg, setSuccessMsg] = useState ("")


// email Validation
        const emailValidation = () => {
            return String (email)
            .toLocaleLowerCase ()
            .match (/^[^\s@]+@[^\s@]+\.[^\s@]+$/ );
        };



        const handleSend = (e) => {
            e.preventDefault();
            if (username === "") {
                setErrMsg ("Username is required!");
            } else if (phoneNumber === ""){
                setErrMsg ("Phone number is required!");
            } else if (email === ""){
                setErrMsg ("Please give your email!");
            } else if (!emailValidation(email)) {
                setErrMsg ("Give a valid email!");
            } else if (subject === ""){
                setErrMsg ("Please enter your subject!");
            } else if (message === ""){
                setErrMsg ("Please enter message!");
            } else {
                setSuccessMsg (`Thank You ${username}, Your message has been sent Successfully!`);
                setErrMsg ("");
                setUsername ("");
                setPhoneNumber("");
                setEmail ("");
                setSubject ("");
                setMessage ("");                
            }
        };

  return (
    <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title title = "Contact" des = "Contact With Me" /> 
        </div>

        <div className='w-full'>
            <div className='w-full h-auto flex justify-between'>
            {/* cantact left */}
                <div id='contactdiv' className='w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg flex flex-col gap-8 justify-center'>
                    <img className='w-full h-64 object-cover rounded-lg mb-2' 
                        src={contactimg} alt="contactimg" />
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-3xl font-bold text-white'>Muhammad Awais</h3>
                            <p className='text-lg font-normal text-gray-400'>Front end Developer</p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Phone No: <span className='text-gray-300'>+92-303-8036730</span></p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Email: <span className='text-gray-300'>mawais1.dev@gmail.com</span></p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
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
                </div>

{/* contact Right */}

                <div id='contactdiv' className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg
                flex flex-col gap-8 p-8 rounded-lg'>
                    <form action="" className='w-full flex flex-col gap-6 p-2'>
    
{/* Error message */}
{
                            errMsg && (
                                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center
                                text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                                                   
                        )}
                        {
                            successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center
                                    text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                        }


    
                        <div className='w-full flex gap-10'>
                            <div className='w-1/2 flex flex-col gap-4'>
                            <p className= 'text-sm text-gray-400 tracking-wide uppercase'>your name</p>
                            <input onChange={(e) => setUsername (e.target.value)} value={username}
                            className={`${errMsg === "Username is required!" && "outline-designColor"}
                            w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-ligtText
                            px-4 active:outline-none focus-visible:outline-designColor focus-visible:border-b-transparent
                            duration-300 outline-none `} type="text" />


                            </div>
                            <div className='w-1/2  flex flex-col gap-4'>
                            <p className='text-sm text-gray-400 tracking-wide uppercase'>phone number</p>
                            <input onChange={(e) => setPhoneNumber (e.target.value)} value={phoneNumber} 
                            className={` ${errMsg === "Phone number is required!" && "outline-designColor"} 
                            w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-ligtText
                            px-4 active:outline-none focus-visible:outline-designColor focus-visible:border-b-transparent
                            duration-300 outline-none`} type="text" />
                            </div>
                        </div>


                        <div className='w-full flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 tracking-wide uppercase'>email</p>
                            <input onChange={(e) => setEmail (e.target.value)} value={email} 
                            className= {`${errMsg === "Please give your email!" && "outline-designColor"} w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-ligtText
                            px-4 active:outline-none focus-visible:outline-designColor focus-visible:border-b-transparent
                            duration-300 outline-none`} type="email" />
                        </div>
                      
                        <div className='w-full flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 tracking-wide uppercase'>subject</p>
                            <input onChange={(e) => setSubject (e.target.value)} value={subject}
                            className= {`${errMsg === "Please enter your subject!" && "outline-designColor"} w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-ligtText
                            px-4 active:outline-none focus-visible:outline-designColor focus-visible:border-b-transparent
                            duration-300 outline-none`} type="text" />
                        </div>

                        <div className='w-full flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 tracking-wide uppercase'>your message</p>
                            <textarea onChange={(e) => setMessage (e.target.value)} value={message} 
                            className= {`${errMsg === "Please enter message!" && "outline-designColor"}
                            w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-ligtText
                            px-4 active:outline-none focus-visible:outline-designColor focus-visible:border-b-transparent
                            duration-300 outline-none resize-none`} cols="30" rows="8"></textarea>
                        </div>

                        <div className='w-full'>
                        <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider 
                        hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>
                        SEND MESSAGE</button>
                        </div>
{/* Error message */}
                        {
                            errMsg && (
                                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center
                                text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                                                   
                        )}
                        {
                            successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center
                                    text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                        }
                        
                            
                        
                    </form>
                </div>
            </div>

        </div>
    </section>
  )
}


export default Contact
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import { MdOutlineDeveloperMode } from "react-icons/md";

const Android = () => {
  return (
<>
    <div className='w-full h-[3100px] xxxsmall:h-[4800px] extrasmall:h-[4900px] xextrasmall:h-[5000px] extralarge:h-[3200px] extralarge:-mt-24  xsmall:h-[3600px] xxsmall:h-[4700px]  flex justify-center items-center font-ppt bg-[#fcf8ea] '>
        <div className='w-[90%] h-[90%]  flex flex-col items-center justify-start gap-3 '>
            <div className='flex justify-center items-center flex-col gap-10' >
            <h1 className='text-7xl font-semibold medium:text-6xl  extrasmall:text-4xl  ' >App Development</h1>
            <p className='text-xl mb-12' >CodeAspire - Service - App  Development</p>
            <div className='w-[70%] xxxsmall:w-[80%] flex justify-center items-center overflow-hidden hover:rounded-2xl ' >
            <img className=' rounded-2xl xxxsmall:h-[200px] hover:scale-110 hover:blur-[1px] hover:duration-300 transition-transform  ' src="https://www.code-aspire.com/images/services-details/services-details-1.jpg " alt="" />
            </div>
            </div>

            <div className='w-[70%] large:w-[80%] small:w-[85%] flex flex-col gap-10 my-10 text-lg font-medium' >
                <h1>App development is a crucial service provided our company, involving the creation, design, and deployment of mobile applications. It encompasses various stages such as conceptualization, prototyping, development, testing, and deployment. App developers utilize programming languages like Java, Kotlin, Swift, or React Native to build native or cross-platform apps that deliver a seamless user experience. They work closely with clients to understand their objectives and target audience, ensuring the app aligns with their branding and functionality requirements.</h1>
                <h1>App developers also focus on optimizing performance, security, and compatibility across different devices and operating systems. Continuous updates and maintenance are performed to address bugs, introduce new features, and ensure the app remains reliable and engaging for users.</h1>
            </div>

            <div className='w-[70%] large:w-[80%] small:w-[85%]'>
                <h1>What You Will Get Under This Service</h1>
                <ul className='px-4'>
                    <li className=' list-disc' >We provide tailored app development services, ensuring that the app aligns with your specific business requirements and goals.</li>
                    <li className='list-disc' >Our team focuses on creating intuitive and user-friendly app interfaces, enhancing user experience and engagement.</li>
                    <li className='list-disc' >We develop apps that are compatible with multiple platforms, such as iOS, Android, and web, maximizing your reach and user base.</li>
                    <li className='list-disc'>Our apps are built with scalability and security in mind, allowing them to handle increasing user demands and ensuring data protection.</li>
                    <li className='list-disc'>We ensure smooth integration of your app with other systems, APIs, and third-party services, expanding its functionality and connectivity.</li>
                </ul>
            </div>

            <div className='flex w-[70%] gap-6 my-10'>
                <img className='w-[50%] rounded-2xl hover:blur-[2px] hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/services-details/services-details-4.jpg" alt="" />
                <img className='w-[50%] rounded-2xl hover:blur-[2px] hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/services-details/services-details-5.jpg" alt="" />
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl  font-semibold underline '>Key Feature Of Our Website Service</h1>
            </div>
            
           <div className='w-[95%] flex flex-col justify-center items-stretch ml-56 extralarge:ml-24 small:ml-10 xsmall:mr-5 xxsmall:ml-20 xxxsmall:mr-20 extrasmall:mr-40  '>
                <div className='   grid grid-cols-3 large:grid-cols-2 xxsmall:grid-cols-1 gap-10  pt-16 px-10 '>
                    <div className=' w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform' >
                        <MdOutlineDeveloperMode className='text-7xl rounded-full px-3 bg-yellow-100  ' />
                        <h1 className='font-bold text-lg ' >Custom Solutions</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className='w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform' >
                        <MdOutlineDeveloperMode className='text-7xl rounded-full px-3 bg-yellow-100  ' />
                        <h1 className='font-bold text-lg ' >Cross-Platform Compatibility</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineDeveloperMode className='text-7xl rounded-full px-3 bg-yellow-100  ' />
                        <h1 className='font-bold text-lg ' >User-Friendly Interfaces</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform' >
                        <MdOutlineDeveloperMode className='text-7xl rounded-full px-3 bg-yellow-100  ' />
                        <h1 className='font-bold text-lg ' >Scalability and Flexibility</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform' >
                        <MdOutlineDeveloperMode className='text-7xl rounded-full px-3 bg-yellow-100  ' />
                        <h1 className='font-bold text-lg ' >Scalability and Flexibility</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className='w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform' >
                        <MdOutlineDeveloperMode className='text-7xl rounded-full px-3 bg-yellow-100  ' />
                        <h1 className='font-bold text-lg ' >Scalability and Flexibility</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                </div>
           </div>
            

        </div>
    </div>
      
    </>
  )
}

export default Android

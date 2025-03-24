import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import { MdOutlineFeaturedVideo } from "react-icons/md";

const Software = () => {
  return (
    <>
    
    <div className='w-full h-[3100px] extralarge:h-[3200px] xsmall:h-[5000px]  flex justify-center items-center my-20 font-ppt bg-[#fcf8ea] '>
        <div className='w-[90%] h-[90%]   flex flex-col items-center justify-start gap-3 '>
            <div className='flex justify-center items-center flex-col gap-10' >
            <h1 className='text-7xl font-semibold  ' >Software Development</h1>
            <p className='text-xl mb-12' >CodeAspire - Service - Software  Development</p>
            <div className='w-[70%] flex justify-center items-center overflow-hidden hover:rounded-2xl '>
                <img className=' rounded-2xl hover:scale-110 hover:blur-[1px] hover:duration-300 transition-transform ' src="https://www.code-aspire.com/images/services-details/services-details-12.png" alt="" />
            </div>
            </div>

            <div className='w-[70%] flex flex-col gap-10 my-10 text-lg font-medium' >
                <h1>Software development is a core service provided by our company, encompassing the entire lifecycle of creating, designing, and implementing software solutions. It involves a series of systematic processes, including requirements gathering, analysis, design, coding, testing, deployment, and maintenance. Skilled software developers utilize programming languages, frameworks, and development tools to create robust, scalable, and customized software applications that address specific business needs.</h1>
                <h1>They collaborate closely with clients to understand their requirements and deliver tailored solutions that optimize workflows, improve efficiency, and drive business growth. Continuous updates and support are provided to ensure the software remains up-to-date, secure, and aligned with evolving business demands.</h1>
            </div>

            <div className='w-[70%]'>
                <h1>What You Will Get Under This Service</h1>
                <ul className='px-4'>
                    <li className=' list-disc' >We provide tailored software development services, ensuring that the software meets your specific business requirements and objectives.</li>
                    <li className='list-disc' >Our team handles the entire software development lifecycle, from initial concept and design to coding, testing, deployment, and ongoing maintenance.</li>
                    <li className='list-disc' >We have a team of experienced software developers proficient in a wide range of programming languages, frameworks, and technologies. Scalable and Robust Applications: Our focus is on creating scalable and robust.</li>
                    <li className='list-disc'>We prioritize user experience and create intuitive interfaces, ensuring that your software is easy to navigate and use for your target audience.</li>
                    <li className='list-disc'>We ensure seamless integration of the software with other systems, databases, and third-party applications, maximizing its functionality and connectivity.</li>
                </ul>
            </div>

            <div className='flex w-[70%] gap-6 my-10'>
                <img className='w-[50%] rounded-2xl hover:blur-[2px] hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/services-details/services-details-10.jpg" alt="" />
                <img className='w-[50%] rounded-2xl hover:blur-[2px] hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/services-details/services-details-9.jpg" alt="" />
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl  font-semibold underline '>Key Feature Of Our Website Service</h1>
            </div>
            
           <div className='w-[95%] flex flex-col justify-center item-center '>
                <div className='  grid grid-cols-3 large:grid-cols-2 xxsmall:grid-cols-1 gap-10 pt-16 px-10 '>
                    <div className=' w-[300px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineFeaturedVideo className='text-7xl rounded-full px-3 bg-yellow-100 ' />
                        <h1 className='font-bold text-lg ' >Precision Engineering</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineFeaturedVideo className='text-7xl  rounded-full px-3 bg-yellow-100' />
                        <h1 className='font-bold text-lg ' >Scalable Solutions</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineFeaturedVideo className='text-7xl rounded-full px-3 bg-yellow-100 ' />
                        <h1 className='font-bold text-lg ' >Error-Free Development</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineFeaturedVideo className='text-7xl rounded-full px-3 bg-yellow-100 ' />
                        <h1 className='font-bold text-lg ' >Custom Designs</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineFeaturedVideo className='rounded-full px-3 bg-yellow-100 text-7xl ' />
                        <h1 className='font-bold text-lg ' >Responsive and Mobile-Friendly</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                    <div className=' w-[300px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
                        <MdOutlineFeaturedVideo className='rounded-full px-3 bg-yellow-100 text-7xl ' />
                        <h1 className='font-bold text-lg ' >SEO-Optimized</h1>
                        <p>We are dedicated to a meticulous website development process, ensuring every detail is executed with precision. Our commitment to accuracy guarantees a flawless website that delivers an outstanding user experience.</p>
                    </div>
                </div>
           </div>
            

        </div>
    </div>

    </>
  )
}

export default Software

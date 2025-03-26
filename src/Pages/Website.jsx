import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'
import { MdOutlineFeaturedVideo } from "react-icons/md";

const Website = () => {
  return (
    <>
   
    <div className='w-full h-[3100px] xxxsmall:h-[4800px] extrasmall:h-[4900px] xextrasmall:h-[5000px] extralarge:h-[3200px] extralarge:-mt-24  xsmall:h-[3600px] xxsmall:h-[4700px]  flex justify-center items-center font-ppt bg-[#fcf8ea]'>
        <div className='w-[90%] h-[90%]   flex flex-col items-center justify-start gap-3 '>
            <div className='flex justify-center items-center flex-col gap-10' >
            <h1 className='text-7xl font-semibold medium:text-6xl  extrasmall:text-4xl  ' >Website Development</h1>
            <p className='text-xl mb-12' >CodeAspire - Service - Website  Development</p>
            <div className='w-[70%] flex justify-center items-center overflow-hidden hover:rounded-2xl '>
                <img className=' rounded-2xl hover:scale-110 hover:blur-[1px] hover:duration-300 transition-transform ' src="https://www.code-aspire.com/images/services-details/services-details-11.jpg" alt="" />
            </div>
            </div>

            <div className='w-[70%] large:w-[80%] small:w-[85%] flex flex-col gap-10 my-10 text-lg font-medium' >
                <h1>Web development is a critical service provided our company , involving the creation, design, and maintenance of websites. It encompasses various tasks such as front-end development, back-end development, database integration, and server configuration. Web developers utilize programming languages like HTML, CSS, and JavaScript to build visually appealing and interactive websites that are optimized for performance, user experience, and search engine visibility.</h1>
                <h1>They collaborate with clients to understand their requirements, ensuring the website aligns with their brand image and goals. Additionally, web developers implement responsive design techniques to ensure compatibility across different devices, ensuring a seamless experience for users. Regular updates and maintenance are also performed to ensure the website remains secure and up-to-date with the latest technologies.</h1>
            </div>

            <div className=' w-[70%] large:w-[80%] small:w-[85%]'>
                <h1>What You Will Get Under This Service</h1>
                <ul className='px-4'>
                    <li className=' list-disc' >We provide tailored web development services, creating websites that align with your specific business needs, brand identity, and objectives.</li>
                    <li className='list-disc' >Our team focuses on creating responsive websites that adapt seamlessly to different screen sizes and devices, ensuring optimal user experience across platforms</li>
                    <li className='list-disc' >We prioritize intuitive and user-friendly interfaces, making it easy for visitors to navigate your website, find information, and engage with your content or services.</li>
                    <li className='list-disc'>Our websites are built with scalability in mind, allowing them to accommodate growing traffic and functionality requirements as your business expands.</li>
                    <li className='list-disc'>We optimize your website's structure, content, and metadata to improve its visibility in search engine rankings, driving organic traffic and potential customers to your site.</li>
                </ul>
            </div>

            <div className='flex w-[70%] gap-6 my-10'>
                <img className='w-[50%] rounded-2xl hover:blur-[2px] hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/services-details/services-details-7.jpg" alt="" />
                <img className='w-[50%] rounded-2xl hover:blur-[2px] hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/services-details/services-details-3.jpg" alt="" />
            </div>

            <div className='mt-10'>
                <h1 className='text-3xl  font-semibold underline '>Key Feature Of Our Website Service</h1>
            </div>
            
           <div className='w-[95%] flex flex-col justify-center items-stretch ml-56 extralarge:ml-24 small:ml-10 xsmall:mr-5 xxsmall:ml-20 xxxsmall:mr-20 extrasmall:mr-40  '>
                <div className=' grid grid-cols-3 large:grid-cols-2 xxsmall:grid-cols-1 gap-10  pt-16 px-10'>
                    <div className=' w-[300px] extrasmall:w-[350px] xxsmall:w-[400px] h-[400px]  rounded-xl  flex items-center justify-center flex-col px-2 gap-4 hover:shadow-2xl hover:scale-105 hover:duration-200 transition-transform ' >
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

export default Website

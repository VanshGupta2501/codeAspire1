import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { motion } from "motion/react"

const Steps = () => {
  return (
    <div className='w-full h-[700px] my-[1px]  flex justify-center items-center bg-[#DED0B6] font-ppt ' >
        <div  className='w-[98%] h-[100%] flex justify-center items-center px-5  gap-4  '>
        <div className='flex flex-col gap-4'>
          <motion.h1 initial={{y:'30px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.5}}} className='text-yellow-500 text-3xl font-semibold'>Work Process</motion.h1>
            <motion.h1 initial={{y:'40px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.7}}} className='text-5xl font-semibold  tracking-tighter ' >We Follow Four Simple Steps</motion.h1>
            <motion.h1 initial={{y:'50px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.9}}} className='text-gray-500 font-medium  text-xl tracking-tighter '>We are leading technology solutions providing company all over the world.</motion.h1>
        </div>

        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper w-[40%]  h-[80%]  "
        >
        <SwiperSlide className=' px-32 py-20 bg-[#d5c4a5] rounded-3xl shadow-xl '>
            <img src="https://www.code-aspire.com/images/choose/choose-1.png" alt="" />
            <h1 className='py-4 font-semibold text-3xl ' >Discussion</h1>
            <p className='text-gray-500 text-xl font-serif'>Discussion is vital part of our for an IT  services , fostering collaboration among  team members. It aligns requirements,and addresses challenges, resulting in a  website that meets project goals.</p>
        </SwiperSlide>
        <SwiperSlide className=' px-32 py-20 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-2.png" alt="" />
            <h1 className='py-4 font-semibold text-3xl ' >Testing & Trying</h1>
            <p className='text-gray-500 text-xl font-serif'>Testing is crucial part of our work we ensuring the quality and functionality of an IT services website, identifying and fixing bugs, improving user experience, and maintaining security.</p>
        </SwiperSlide>
        <SwiperSlide className=' px-32 py-20 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-3.png" alt="" />
            <h1 className='py-4 font-semibold text-3xl ' >Ideas & Concpet</h1>
            <p className='text-gray-500 text-xl font-serif'>Ideas and concepts are the driving force behind an IT services, fueling innovation, problem-solving, and creativity to deliver cutting-edge solutions that meet the diverse needs of clients and users.</p>
        </SwiperSlide>
        <SwiperSlide className=' px-32 py-20 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-4.png" alt="" />
            <h1 className='py-4 font-semibold text-3xl ' >Execute & Install</h1>
            <p className='text-gray-500 text-xl font-serif'>Executing and installing an IT services involves implementing the developed solution, ensuring seamless deployment, configuration, and setup to make the website fully functional and accessible to users.</p>
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Steps

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { motion } from "motion/react"

const Steps = () => {
  return (
    <div className='w-full h-[700px] extrasmall:h-[1200px] medium:h-[1100px] my-[1px] px-28 large:px-4   flex justify-center items-center bg-[#DED0B6] font-ppt  xextralarge:mt-16 ' >
        <div  className='  large:mt-10 w-[98%] h-[100%] flex justify-center items-center px-5  gap-4  medium:flex-col medium:h-[80%] xxxsmall:h-[90%]   '>
          <div className='flex flex-col gap-6   xextralarge:w-[900px] xextralarge:h-[300px] small:px-7 medium:px-5 medium:w-[800px] small:w-[700px] xxsmall:w-[600px]  xxxsmall:w-[490px] xxxsmall:pl-1 extrasmall:w-[400px] extrasmall:ml-2 xextrasmall:w-[300px] xextrasmall:-ml-10 '>
            <motion.h1 initial={{y:'30px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.5}}} className='text-yellow-500 text-3xl font-semibold xextralarge:text-[60px] large:text-[45px] small:text-[40px]  small:w-[650px] xxsmall:w-[600px] xxxsmall:w-[490px]  extrasmall:-mb-5 extrasmall:w-[300px] extrasmall:text-[25px] xextrasmall:w-[200px]  '>Work Process</motion.h1>
              <motion.h1 initial={{y:'40px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.7}}} className='text-5xl font-semibold  tracking-tighter xextralarge:text-[70px] large:text-[55px] small:text-[45px]  small:w-[650px] xxsmall:w-[600px] xxsmall:text-[45px] xxxsmall:w-[490px] extrasmall:text-[35px] extrasmall:w-[400px] xextrasmall:w-[300px]  ' >We Follow Four Simple Steps</motion.h1>
              <motion.h1 initial={{y:'50px', opacity:0 }} viewport={{ once: true }}   whileInView={{y:'0px',opacity:1 , transition:{delay:0.2, ease:'linear', duration:0.9}}} className='text-gray-500 font-medium leading-10  text-xl xextralarge:text-[40px] large:text-[30px] xxsmall:text-[25px] xxsmall:w-[600px] small:text-[25px] small:-mt-7  medium:w-[800px] small:w-[650px] xxxsmall:w-[490px] extrasmall:w-[400px] xextrasmall:w-[300px]   extrasmall:text-[25px]'>We are leading technology solutions providing company all over the world.</motion.h1>
          </div>

        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper w-[40%] large:w-[50%] small:w-[70%] medium:w-[60%] medium:h-[95%] xxsmall:w-[85%] xxxsmall:w-[90%] xextrasmall:w-[99%] xextrasmall:h-[70%] h-[80%] xxxsmall:h-[60%] xxxsmall:-mt-10 extrasmall:w-[97%] extrasmall:mt-5  "
        >
        <SwiperSlide className=' extrasmall:pl-5 pl-12 py-7 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-1.png" className='my-4' alt="" />
            <h1 className='py-4 font-semibold text-3xl px-12  ' >Discussion</h1>
            <p className='text-gray-500 text-xl font-serif px-12 xextralarge:text-2xl xxxsmall:text-lg  '>Discussion is vital part of our for an IT  services , fostering collaboration among  team members. It aligns requirements,and addresses challenges, resulting in a  website that meets project goals.</p>
        </SwiperSlide>
        <SwiperSlide className='xextrasmall:pl-5 pl-12 py-7 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-2.png" className='my-4' alt="" />
            <h1 className='py-4 font-semibold text-3xl  px-12' >Testing & Trying</h1>
            <p className='text-gray-500 text-xl font-serif px-12 xextralarge:text-2xl xxxsmall:text-lg '>Testing is crucial part of our work we ensuring the quality and functionality of an IT services website, identifying and fixing bugs, improving user experience, and maintaining security.</p>
        </SwiperSlide>
        <SwiperSlide className='xextrasmall:pl-5 pl-12 py-7 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-3.png" className='my-4' alt="" />
            <h1 className='py-4 font-semibold text-3xl px-12 ' >Ideas & Concpet</h1>
            <p className='text-gray-500 text-xl font-serif px-12 xextralarge:text-2xl xxxsmall:text-lg'>Ideas and concepts are the driving force behind an IT services, fueling innovation, problem-solving, and creativity to deliver cutting-edge solutions that meet the diverse needs of clients and users.</p>
        </SwiperSlide>
        <SwiperSlide className='xextrasmall:pl-5 pl-12 py-7 bg-[#d5c4a5] rounded-3xl shadow-xl  '>
            <img src="https://www.code-aspire.com/images/choose/choose-4.png" className='my-4' alt="" />
            <h1 className='py-4 font-semibold text-3xl px-12' >Execute & Install</h1>
            <p className='text-gray-500 text-xl font-serif px-12 xextralarge:text-2xl xxxsmall:text-lg'>Executing and installing an IT services involves implementing the developed solution, ensuring seamless deployment, configuration, and setup to make the website fully functional and accessible to users.</p>
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Steps

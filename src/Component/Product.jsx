import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { div, h1, style } from 'motion/react-client';
import { color } from 'motion/react';
import sfa from '../assets/prismSFA.png'
import gate from '../assets/prismGATE.png'
import office from '../assets/prismOFFICE.png'

const Product = () => {
  return (
    <div className=' xxxsmall:-mx-20 xxxsmall:pl-36  small:h-[1400px] large:h-[1300px] extralarge:mt-[50px] extralarge:h-[800px] xsmall:h-[1500px] product rounded-3xl w-full h-[700px]  flex justify-center items-center text-black '>
      <div  className=' xsmall:w-[800px] large:flex-col w-[100%] h-[96%] bg-[#DED0B6] flex items-center gap-3 px-10 xextralarge:gap-20  xextralarge:px-40 '>
        <div className='flex flex-col large:w-full large:-my-20 large:mt-7 gap-2 border-r-3 py-28 pl-8  '>
          <h1 className=' text-4xl text-blue-400 font-bold large:text-5xl '>Products</h1>
          <h1 className=' text-5xl  large:text-7xl font-extrabold leading-tight tracking-tight'>We Provide the Best Quality Products </h1>
          <p className=' text-lg font-medium large:text-2xl'>We are technology solutions providing company all over the world.</p>
        </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true  }}
      scrollbar={{ draggable: true , hide: true }}
    className='w-[90%] border extralarge:h-[600px]  h-[500px]  ' style={{
      "--swiper-navigation-color" : "#fffff",
    } } >
      <SwiperSlide className='px-20 bg-[#d5c4a5] rounded-3xl py-10 ' >
        <div className=' w-full h-[500px] flex justify-center items-center flex-col  '>
        <img className='w-[150px] rounded-3xl ' src={sfa}/> 
        <h1 className='text-2xl  py-10 font-serif'>The scanner policy for the Prism Gate application is a critical component of ensuring security and access control within your organization's premises.</h1>
        <p className='text-blue-500 text-2xl font-semibold'><a href="https://www.prism-sfa-dev.net/" target="_blank" rel="noopener noreferrer">View Site</a></p>
        </div>

      </SwiperSlide>
      <SwiperSlide className='px-20 bg-[#d5c4a5] rounded-3xl py-10 ' >
        <div className=' w-full h-[500px] flex justify-center items-center flex-col  '>
        <img className='w-[150px] rounded-3xl ' src={gate}/> 
        <h1 className='text-2xl  py-10 font-serif'>The security measures and access control protocols implemented within Prism Gate, our society registration application, are essential for safeguarding your organization's premises.</h1>
        <p className='text-blue-500 text-2xl font-semibold pb-7'><a href="https://www.prismgate.in/" target="_blank" rel="noopener noreferrer">View Site </a></p>
        </div>

      </SwiperSlide>
      <SwiperSlide className='px-20 bg-[#d5c4a5] rounded-3xl py-10 ' >
        <div className=' w-full h-[500px] flex justify-center items-center flex-col  '>
        <img className='w-[150px] rounded-3xl ' src={office}/> 
        <h1 className='text-2xl  py-10 font-serif'>The Prism Office Employee Management, Visitor QR Code, and Attendance System is an integrated solution designed to streamline office operations and enhance security.</h1>
        <p className='text-blue-500 text-2xl font-semibold'>Visit Site</p>
        </div>

      </SwiperSlide>

    </Swiper>
      </div>
    </div>
  )
}

export default Product

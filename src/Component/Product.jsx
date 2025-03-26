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
    <div className=' large:-mt-4  small:h-[1400px] large:h-[1350px] extralarge:mt-[50px] extralarge:h-[800px] product rounded-3xl w-full h-[700px]  flex justify-center items-center text-black xextralarge:mt-10   '>
      <div  className='  xsmall:px-2   large:flex-col w-[100%] h-[96%] bg-[#DED0B6] xsmall:w-[800px] flex items-center gap-3 px-10 xextralarge:gap-20    xextralarge:px-40'>
        <div className=' border xxsmall:w-[500px] xxsmall:-ml-10 border-black small:w-[600px] flex flex-col large:w-full large:-my-20 large:mt-7 gap-2 border-r-3 py-28 pl-8 extralarge:gap-5 xsmall:w-[600px] extrasmall:w-[400px] extrasmall:mr-10 lextrasmall:mx-1 xextrasmall:w-[360px] '>
          <h1 className=' text-4xl text-blue-400 font-bold large:text-5xl  xextralarge:text-6xl extralarge:text-5xl xxsmall:text-5xl border lextrasmall:w-[220px] '>Products</h1>
          <h1 className=' text-5xl  large:text-7xl  font-extrabold leading-tight tracking-tight xextralarge:text-6xl small:text-7xl extralarge:text-5xl  xxsmall:text-5xl xxsmall:w-[400px] border lextrasmall:text-[35px] lextrasmall:w-[270px] '>We Provide the Best Quality Products </h1>
          <p className=' text-lg font-medium large:text-2xl xextralarge:text-4xl extralarge:text-3xl xxsmall:text-2xl border xxsmall:w-[500px] xxxxsmall:w-[400px] lextrasmall:w-[270px]  '>We are technology solutions providing company all over the world.</p>
        </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true  }}
      scrollbar={{ draggable: true , hide: true }}
    className=' w-[90%] border extralarge:w-[70%] extralarge:h-[80%] xextralarge:w-[55%] xextralarge:h-[80%]   h-[500px] small:w-[100%] large:h-[45%] large:w-[80%] xsmall:w-[550px] xsmall:-ml-2 xxxsmall:w-[500px] xxxxsmall:w-[490px] xxxxsmall:mx-2 extrasmall:w-[470px] lextrasmall:w-[410px] xextrasmall:w-[390px] ' style={{
      "--swiper-navigation-color" : "#fffff",
    } } >
      <SwiperSlide className='px-20 bg-[#d5c4a5] rounded-3xl py-10  ' >
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

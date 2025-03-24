import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'

const Termsofservices = () => {
  return (
    <>
    <Navbar/>
      <div className='w-full h-[2500px] medium:h-[2800px] xsmall:h-[3000px] flex items-center justify-center font-ppt '>
        <div className='w-[80%] h-[90%] flex items-center justify-center flex-col gap-16 bg-[#fcf8ea]  '>
          <div className='overflow-hidden rounded-2xl flex justify-center items-center medium:w-[90%] w-[80%]' >
            <img  className=' rounded-2xl hover:scale-125  hover:duration-500 transition-transform ' src="https://www.code-aspire.com/images/terms-of-service.jpg" alt="" />
          </div>

          <div className='flex flex-col gap-12'>
          <div className='flex justify-center items-start flex-col gap-4' >
          <h1 className='text-2xl font-bold' >1. Our Website</h1>
          <p className='text-lg font-medium '>Our website address is: https://code-aspire.com</p>
          <h1 className='bg-green-200 px-2 py-3 text-lg rounded-3xl' >We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with Stax. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</h1>
        </div>

        <div className='flex justify-center items-start flex-col gap-4' >
          <h1 className='text-2xl font-bold' >2. Data You Provide to Us</h1>
          <h1 className='bg-green-200 px-2 py-3 text-lg rounded-3xl' >We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.</h1>
        </div>

        <div className='flex justify-center items-start flex-col gap-4' >
          <h1 className='text-2xl font-bold' >3. How We Get Data About You</h1>
          <h1 className='bg-green-200 px-2 py-3 text-lg rounded-3xl' >We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.</h1>
        </div>

        <div className='flex justify-center items-start flex-col gap-4' >
          <h1 className='text-2xl font-bold' >4. What We Use Your Data For</h1>
          <ul className='bg-green-200 px-7 py-3 text-lg rounded-3xl flex flex-col gap-3' >
            <li className=' list-disc'>Responding to your questions and concerns;</li>
            <li className=' list-disc'>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
            <li className=' list-disc' >Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</li>
          </ul>
        </div>

        
        <div className='flex justify-center items-start flex-col gap-4' >
          <h1 className='text-2xl font-bold' >5. Your Choices About the Use of Your Data</h1>
          <p className='text-lg'>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
          <ol className='bg-green-200 px-7 py-3 text-lg rounded-3xl flex flex-col gap-3' >
            <li className=' list-decimal'>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
            <li className=' list-decimal'>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe's LSOs through their Website Storage Settings panel.</li>
            <li className=' list-decimal' >To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you're located in the European Union, visit the Your Online Choices site. To opt out of Google's display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola's targeted ads, see the Opt-out Link in their Cookie Policy.</li>
            <li className='list-decimal'>To update data you provide directly, log into your account and update your account at any time.</li>
          </ol>
        </div>

        <div className='flex justify-center items-start flex-col gap-4' >
          <h1 className='text-2xl font-bold' >6. Our Policy Concerning Children</h1>
          <h1 className='bg-green-200 px-2 py-3 text-lg rounded-3xl' >We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children's online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we've collected personal data from a child under those ages</h1>
        </div>
          </div>
        </div>
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Termsofservices

import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'

const Policy = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full flex justify-center items-center mt-32 mb-2 py-10 bg-[#fcf8ea] shadow-xl extrasmall: '>
      <div className='  flex justify-center  items-center gap-10  flex-col font-ppt' >
        <div className=' overflow-hidden extralarge:w-[1000px]  large:w-[800px] medium:w-[600px] small:w-[500px] xxsmall:w-[400px] flex justify-center items-center  rounded-3xl  hover:overflow-hidden  ' >
        <img className='rounded-3xl hover:blur-[1px] hover:scale-105 hover:overflow-hidden hover:duration-300 transition-transform' src="https://www.code-aspire.com/images/terms-of-service.jpg" alt="" />
        </div>
        <h1 className='text-xl xextralarge:text-3xl font-bold ' >Privacy Policy</h1>
        <p className=' xxsmall:px-4 text-lg xextralarge:text-xl font-ppt'>Our website address is: <br className='hidden xxsmall:block' /> https://code-aspire.com</p>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >1. **PrismSFA Privacy Statement**</h1>
          <p className=' xextralarge:text-xl'>At PrismSFA, we highly value the privacy of our users and prioritize safeguarding their personal, company, and financial information. We aim to ensure users feel secure and confident while using our products and services.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >2. **Information We Collect**</h1>
          <p className=' xextralarge:text-xl'>We collect personal information such as names, shipping and billing addresses, emails, phone numbers, store images, call logs, and media when users engage with us for sales, support, registration, or payments. We may store sensitive information like account and purchase details as part of the services provided. We may also collect technical data like IP addresses, browser details, and system interactions. Technologies like cookies and web beacons help us manage our websites, services, advertising, and email programs. Additionally, we may gather user feedback, participation in community discussions, and other interactions. In some cases, we may access users' contact lists, but only with explicit permission. Users may also upload encrypted images or videos for documentation and stock proofing purposes.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >3. **Protecting Your Information**</h1>
          <p className=' xextralarge:text-xl'>We employ industry-standard security measures to protect users' personal data from loss, misuse, or unauthorized access. Our safeguards comply with applicable laws, including physical, electronic, and procedural protections.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >4. **Uses of Information**</h1>
          <p className=' xextralarge:text-xl'>We do not sell or rent users' personal information for promotional or marketing purposes. Information collected is used to deliver requested products and services, customize user experiences, and develop new features. We may summarize user data in non-personalized formats to analyse usage patterns, improve our products, and support business functions. We may also work with service providers who Collaboratein delivering services, bound by confidentiality agreements.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >5. **Collection of Information in Mobile Applications**  </h1>
          <p className=' xextralarge:text-xl'>When using PrismSFA mobile apps, we may collect details like phone numbers, device types, and carriers. This helps us manage user accounts and provide personalized services. Some location-enabled services may collect location data, but only with user consent. We may also collect technical data and provide automatic updates to ensure optimal performance</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >6. **Web-Based, Connected, and Financial Services**</h1>
          <p className=' xextralarge:text-xl'>PrismSFA’s products are web-enabled, requiring internet access for certain features. We may collect usage information to improve services, display user activity, and personalize the experience. Web beacons may be used to track site interactions, email responses, and offer customized content.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >7. **Information Security**  </h1>
          <p className=' xextralarge:text-xl'>We ensure the confidentiality and security of personal information through encryption and strict access controls. Our employees are trained to handle information securely, and we conduct regular audits of our security practices.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >8. **Third Parties**</h1>
          <p className=' xextralarge:text-xl'>We may partner with third parties to provide services, subject to strict confidentiality agreements. In certain cases, we may disclose personal information to comply with legal obligations or protect our rights. Additionally, we may share anonymized user data with third parties for marketing and promotional purposes.</p>
        </div>

        <div className='flex flex-col w-[70%] small:w-[80%] xxxsmall:w-[90%] gap-4 rounded-2xl bg-blue-200 px-3 py-3  ' >
          <h1 className='text-xl xextralarge:text-2xl font-semibold' >9. **Changes and Updates**</h1>
          <p className=' xextralarge:text-xl'>If PrismSFA undergoes a business change, such as a sale or merger, user data may be transferred as part of that transaction. Users will be notified of any significant changes to our privacy practices 30 days before they take effect. To modify contact preferences or access account information, users can email info@code-aspire.com or manage their settings through their PrismSFA account.</p>
        </div>

        <h1 className='w-[70%] text-xl font-semibold' >This e-mail or any attachments may contain confidential or privileged information. Unless you are the intended recipient, you may not disclose, copy or use any information herein. If you have received this e-mail in error, please notify the sender immediately by reply and delete the e-mail from your system.</h1>
      </div>
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Policy

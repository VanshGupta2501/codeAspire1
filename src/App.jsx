import React, { useEffect } from 'react'
import Layout from './Layout/Layout'
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Policy from './Pages/Policy'
import Prismpolicy from './Pages/Prismpolicy'
import AboutLayout from './Layout/AboutLayout';
import ContactLayout from './Layout/ContactLayout';
import ServiceLayout from './Layout/ServiceLayout';
import ProductLayout from './Layout/ProductLayout';
import Termsofservices from './Pages/Termsofservices';
import Website from './Pages/Website';
import Android from './Pages/Android';
import Software from './Pages/Software'
import Applayout from './Layout/Applayout';
import Websitelayout from './Layout/Websitelayout';
import SoftwareLayout from './Layout/SoftwareLayout';
import Allservices from './Component/Allservices';
import RequestDemo from './Pages/RequestDemo';
import ReactGA from 'react-ga4'
import { title } from 'motion/react-client';




const App = () => {
  const GOOGLE_GA_TOKEN = 'G-7TLN3T1ZEK'
  ReactGA.initialize(GOOGLE_GA_TOKEN)

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "custom Title"
    })
  })


  const locomotiveScroll = new LocomotiveScroll();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
    },
    {
      path: '/policy',
      element: <Policy />
    },
    {
      path: '/prism-policy',
      element: <Prismpolicy />
    },
    {
      path: '/about',
      element: <AboutLayout />
    },
    {
      path: '/contact',
      element: <ContactLayout />
    },
    {
      path: '/service',
      element: <ServiceLayout />,

    },
    {
      path: '/product',
      element: <ProductLayout />
    },
    {
      path: '/termCondition',
      element: <Termsofservices />
    },
    {
      path: '/android',
      element: <Android />
    },
    {
      path: '/service/website',
      element: <Websitelayout />
    },
    {
      path: '/service/android',
      element: <Applayout />
    },
    {
      path: '/service/software',
      element: <SoftwareLayout />
    },
    {
      path: '/all-service',
      element: <Allservices />
    },
    {
      path: '/request-demo',
      element: <RequestDemo />
    }

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App

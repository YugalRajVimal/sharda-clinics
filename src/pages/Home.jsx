import React from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import OurServices from '../components/OurServices'
import Doctors from '../components/Doctors'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Appointment from '../components/Appointment'

const Home = () => {
  return (
    <div className='pt-40 md:pt-28' >
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <Doctors />
      <Testimonials />
      <CTA />
      <Appointment />
    </div>
  )
}

export default Home

import About from '@/components/About'
import Blog from '@/components/Blog'
import CaseStudy from '@/components/CaseStudy'
import Choose from '@/components/Choose'
import { Footer7 } from '@/components/footer-7'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Process2 from '@/components/Process2'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Process/>
      <About/>
      <Choose/>
      <CaseStudy/>
      <Process2/>
      <Testimonials/>
      <Blog/>
      <Footer7/>
    </div>
  )
}

export default page

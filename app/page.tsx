import About from '@/components/About'
import CaseStudy from '@/components/CaseStudy'
import Choose from '@/components/Choose'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Process2 from '@/components/Process2'
import Stats from '@/components/Stats'
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
    </div>
  )
}

export default page

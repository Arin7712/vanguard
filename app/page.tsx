import About from '@/components/About'
import Choose from '@/components/Choose'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
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
    </div>
  )
}

export default page

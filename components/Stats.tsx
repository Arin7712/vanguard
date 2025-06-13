import Image from 'next/image'
import React from 'react'

const Stats = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:px-[6rem] px-6 md:h-[90vh]">
      <Image src='/asset1.jpg' alt="Vanguard" width={400} height={400} className="rounded-lg md:w-[40%] md:order-1 order-2"/>
      <div className='md:w-[50%] space-y-6 md:py-0 py-[4rem]'>
        <div className='flex gap-6 rounded-lg bg-orange-100 p-4'>
            <div className='w-[40%]'>
                <h1 className='font-medium text-2xl md:text-4xl'>10+</h1>
                <p className='md:text-sm text-xs font-medium'>Years of experience</p>
            </div>
            <div>
                <p className='md:text-md text-sm'>With over 10 years of experience, we've honed our expertise in delivering innovative digital solutions</p>
            </div>
        </div>

        <div className='flex gap-6 rounded-lg bg-orange-500 p-4 text-white'>
            <div className='w-[40%]'>
                <h1 className='font-medium text-2xl md:text-4xl'>6.8</h1>
                <p className='md:text-sm text-xs font-medium'>Consistent ROAS</p>
            </div>
            <div>
                <p className='md:text-md text-sm'>Achieving a consistent 6.8x Return on Ad Spend (ROAS) is a testiment to our data-driven approach</p>
            </div>
        </div>

                <div className='flex gap-6 rounded-lg bg-orange-100 p-4'>
            <div className='w-[40%]'>
                <h1 className='font-medium text-2xl md:text-4xl'>98%</h1>
                <p className='md:text-sm text-xs font-medium'>Client Retention</p>
            </div>
            <div>
                <p className='md:text-md text-sm'>With a 98% Client retention rate, we pride ourselves on building long-term partnerships based on trust</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stats

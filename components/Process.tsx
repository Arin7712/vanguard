'use client'

import React from 'react'
import { Button } from './ui/button'
import { BetweenVerticalEnd, Blocks, Box } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  },
})

const cards = [
  {
    title: 'Ideate',
    desc: 'Verify the product-market fit, capture new business opportunities, and make your bold visions take shape with innovative strategies and cutting-edge solutions.',
    icon: <BetweenVerticalEnd className='text-neutral-800 fill-neutral-800 size-8 p-2 bg-yellow-200 rounded-full' />
  },
  {
    title: 'UI/UX design',
    desc: 'Crafting intutuive and engaging digital experiences, our UX/UI design services focus on seamless user journeys and visually stunning interfaces.',
    icon: <Blocks className='text-neutral-800 fill-neutral-800 size-8 p-2 bg-purple-200 rounded-full' />
  },
  {
    title: 'Development',
    desc: 'Crafting intutuive and engaging digital experiences, our UX/UI design services focus on seamless user journeys and visually stunning interfaces.',
    icon: <Box className='text-neutral-800 fill-neutral-800 size-8 p-2 bg-orange-300 rounded-full' />
  },
]

const Process = () => {
  return (
    <div className="flex flex-col mx-2 md:mx-6 bg-yellow-200 rounded-lg pb-[4rem]">
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex md:flex-row flex-col justify-between md:items-center w-full px-6 py-[4rem] md:gap-0 gap-4'
      >
        <h1 className='text-3xl font-medium max-w-sm'>Explore our tailored solutions for your success</h1>
        <Button className='text-sm px-6 bg-neutral-800 rounded-full w-fit md:block hidden'>
          View all services
        </Button>
      </motion.div>

      {/* Cards Section */}
      <div className='flex md:flex-row flex-col gap-6 md:pl-6 md:items-start items-center'>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeIn(0.2 + i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='flex flex-col gap-4'
          >
            <div className='rounded-lg bg-white p-4 w-xs flex flex-col justify-between'>
              {card.icon}
              <div className='space-y-4 pt-[6rem]'>
                <h1>{card.title}</h1>
                <p className='text-sm text-neutral-600'>{card.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Button */}
      <motion.div
        variants={fadeIn(0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex items-center justify-center w-full pt-[4rem]'
      >
        <Button className='text-sm px-6 bg-neutral-800 rounded-full w-fit md:hidden block'>
          View all services
        </Button>
      </motion.div>
    </div>
  )
}

export default Process

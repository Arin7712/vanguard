'use client'

import Image from 'next/image'
import React from 'react'
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

const Stats = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:px-[6rem] px-6 md:h-[100vh]">
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='md:w-[40%]'
      >
        <Image
          src="/asset1.jpg"
          alt="Vanguard"
          width={400}
          height={400}
          className="rounded-lg w-full md:order-1 order-2"
        />
      </motion.div>

      <div className="md:w-[50%] space-y-6 md:py-0 py-[4rem]">
        {[0.2, 0.4, 0.6].map((delay, i) => {
          const items = [
            {
              bg: 'bg-orange-100',
              title: '10+',
              subtitle: 'Years of experience',
              desc: "With over 10 years of experience, we've honed our expertise in delivering innovative digital solutions",
              textColor: 'text-black'
            },
            {
              bg: 'bg-orange-500',
              title: '6.8',
              subtitle: 'Consistent ROAS',
              desc: 'Achieving a consistent 6.8x Return on Ad Spend (ROAS) is a testiment to our data-driven approach',
              textColor: 'text-white'
            },
            {
              bg: 'bg-orange-100',
              title: '98%',
              subtitle: 'Client Retention',
              desc: 'With a 98% Client retention rate, we pride ourselves on building long-term partnerships based on trust',
              textColor: 'text-black'
            }
          ]

          const item = items[i]

          return (
            <motion.div
              key={i}
              variants={fadeIn(delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flex gap-6 rounded-lg ${item.bg} p-4 ${item.textColor}`}
            >
              <div className="w-[40%]">
                <h1 className="font-medium text-2xl md:text-4xl">{item.title}</h1>
                <p className="md:text-sm text-xs font-medium">{item.subtitle}</p>
              </div>
              <div>
                <p className="md:text-md text-sm">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats

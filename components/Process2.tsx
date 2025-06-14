'use client';

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
});

const cards = [
  {
    title: 'Discovery & Strategy',
    desc: 'We begin by understanding your brand, goals, and challenges to create a tailored strategy',
    icon: '01',
  },
  {
    title: 'Design & Development',
    desc: 'Our team brings the vision to life with innovative design and cutting-edge technology',
    icon: '02',
  },
  {
    title: 'Launch & Growth',
    desc: 'We launch your solution, optimize performance, and drive ongoing growth for lasting success',
    icon: '03',
  },
];

const Process2 = () => {
  return (
    <div className="flex flex-col mx-2 md:mx-6 bg-orange-400 rounded-lg pb-[4rem] mt-[4rem]">
      {/* Header Section */}
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex md:flex-row flex-col justify-between md:items-center text-white w-full px-6 py-[4rem] md:gap-0 gap-4"
      >
        <h1 className="text-3xl font-medium max-w-sm">
          Collaborative, strategic, result-driven
        </h1>
        <Button className="text-sm px-6 bg-neutral-800 rounded-full w-fit md:block hidden">
          View all services
        </Button>
      </motion.div>

      {/* Cards Section */}
      <div className="flex md:flex-row flex-col gap-6 md:pr-6 md:items-start items-center justify-end">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeIn(0.2 + i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-lg bg-white p-4 w-xs flex flex-col justify-between">
              <h1 className="text-2xl font-medium">{card.icon}</h1>
              <div className="space-y-4 pt-[6rem]">
                <h1>{card.title}</h1>
                <p className="text-sm text-neutral-600">{card.desc}</p>
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
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center justify-center w-full pt-[4rem]"
      >
        <Button className="text-sm px-6 bg-neutral-800 rounded-full w-fit md:hidden block">
          View all services
        </Button>
      </motion.div>
    </div>
  );
};

export default Process2;

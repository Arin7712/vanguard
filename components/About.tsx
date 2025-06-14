'use client';

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});

const About = () => {
  return (
    <motion.div
      className="flex md:flex-row flex-col justify-between items-center mx-2 md:mx-6 bg-purple-200 rounded-lg my-[4rem] md:p-[4rem]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:w-[50%] px-6 py-[4rem] md:gap-6 gap-4">
        <motion.h1
          variants={fadeInUp(0)}
          className="text-3xl font-medium max-w-md"
        >
          A decade of experience turning brands into digital leaders
        </motion.h1>

        <motion.p
          variants={fadeInUp(0.3)}
          className="text-sm max-w-lg"
        >
          With over a decade of expertise, we transform brands into digital
          leaders through innovative strategies, cutting-edge technology, and a
          result-driven approach.
        </motion.p>

        <motion.div variants={fadeInUp(0.6)}>
          <Button className="text-sm px-6 bg-neutral-800 rounded-full w-fit">
            Learn more
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp(0.9)}
        className="md:w-[40%] md:pb-0 pb-[4rem] md:px-0 px-4"
      >
        <Image
          src="/asset1.jpg"
          alt="Vanguard"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;

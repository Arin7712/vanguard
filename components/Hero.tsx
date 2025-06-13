"use client";

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

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:px-[6rem] px-6 md:h-[90vh]">
      <div className="md:w-[50%] flex flex-col justify-between h-full py-[4rem] md:gap-0 gap-6">
        <div className="space-y-6 md:pt-[6rem]">
          <motion.h1
            variants={fadeInUp(0)}
            initial="hidden"
            animate="visible"
            className="md:text-5xl text-4xl max-w-md md:max-w-2xl"
          >
            We don't just build websites, we build experiences
          </motion.h1>

          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            <Button className="text-sm px-6 bg-neutral-800 rounded-full">
              Request an appointment
            </Button>
          </motion.div>
        </div>

        <motion.p
          variants={fadeInUp(0.6)}
          initial="hidden"
          animate="visible"
          className="text-sm max-w-lg"
        >
          We create connections that drive real-world results. Turning bold
          ideas into interactive digital solutions.
        </motion.p>
      </div>

      <motion.div
        variants={fadeInUp(0.9)}
        initial="hidden"
        animate="visible"
        className="md:w-[40%] relative"
      >
        <div className="hidden p-3 bg-yellow-200 rounded-lg absolute top-1/3 left-[-120] md:flex gap-4 w-[50%]">
          <Image
            src="/asset1.jpg"
            alt="Vanguard"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <p className="text-xs font-medium">
              We create connection that drive real-world results.
            </p>
            <p className="text-xs font-medium">James Olive</p>
          </div>
        </div>
        <Image
          src="/asset3.jpg"
          alt="Vanguard"
          width={500}
          height={500}
          className="w-full rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

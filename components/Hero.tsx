"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";

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
        <div className="space-y-6 md:pt-[4rem]">
          <motion.p
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
            className="text-sm text-orange-700 max-w-lg flex gap-2 border-[1px] border-orange-700 rounded-full w-fit px-4 py-1"
          >
            <CircleCheckBig className="text-orange-700 size-5" />
            Trusted by 1,200+ Families
          </motion.p>
          <motion.h1
            variants={fadeInUp(0)}
            initial="hidden"
            animate="visible"
            className="md:text-5xl text-4xl max-w-md md:max-w-2xl"
          >
            Bringing Color to the Place You Call Home.
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
            className="text-md text-neutral-600 max-w-lg"
          >
            Expert Interior & Exterior Painting Services That Bring Life to
            Every Corner of Your Home.
          </motion.p>
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            <Button className="text-sm gap-3 px-3 pl-4 py-6 bg-orange-700 rounded-full">
              Get Your Free Quote
              <ArrowRight className="size-8 bg-white rounded-full p-2 text-orange-700" />
            </Button>
          </motion.div>
        </div>

          <div className="flex gap-4">
            <motion.p
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
            className="text-sm text-neutral-700 max-w-lg flex gap-2 "
          >
            <CircleCheckBig className="text-orange-700 size-4" />
            5 year durability guarantee
          </motion.p>

                      <motion.p
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
            className="text-sm text-neutral-700 max-w-lg flex gap-2 "
          >
            <CircleCheckBig className="text-orange-700 size-4" />
            10+ years of experience
          </motion.p>
                                <motion.p
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
            className="text-sm text-neutral-700 max-w-lg flex gap-2 "
          >
            <CircleCheckBig className="text-orange-700 size-4" />
            1k+ projects completed
          </motion.p>
          </div>
      </div>

      <motion.div
        variants={fadeInUp(0.9)}
        initial="hidden"
        animate="visible"
        className="md:w-[40%] relative"
      >
        {/* <div className="hidden p-3 bg-orange-200 rounded-lg absolute top-1/3 left-[-120] md:flex gap-4 w-[50%]">
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
            <p className="text-xs font-medium">Deepak Naik</p>
          </div>
        </div> */}
        <div className="">
          <Image
            src="/paint.jpg"
            alt="Vanguard"
            width={400}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

'use client';
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const caseStudy = [
  {
    title: "PlantPlanet",
    desc: "Plant free care application design",
    image: "/s1.jpg",
  },
  {
    title: "EduBridge",
    desc: "Online learning platform design",
    image: "/s1.jpg",
  },
  {
    title: "PlantPlanet",
    desc: "Plant free care application design",
    image: "/s1.jpg",
  },
];

const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center justify-between md:px-[6rem] px-6 md:pt-0 pt-[4rem]">
      <div className="flex md:flex-row flex-col justify-between md:items-center w-full px-6 py-[4rem] md:gap-0 gap-4">
        <motion.h1
          className="text-3xl font-medium max-w-sm"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          A glimple at our success stories
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="md:block hidden"
        >
          <Button className="text-sm px-6 bg-neutral-800 rounded-full w-fit">
            View all stories
          </Button>
        </motion.div>
      </div>

      <div className="flex md:flex-row flex-col gap-[4rem] md:gap-6">
        {caseStudy.map((item, i) => (
          <motion.div
            className="space-y-4"
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2 + i}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="rounded-lg w-full md:order-1 order-2"
            />
            <p className="text-md font-medium">
              {item.title} - {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;

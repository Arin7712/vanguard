'use client';
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
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

const Choose = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center md:px-[6rem] px-6">
      {/* Image Section */}
      <motion.div
        className="md:w-[40%]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <Image
          src="/asset3.jpg"
          alt="Vanguard"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Text Section */}
      <div className="md:w-[40%] flex flex-col justify-between gap-6 py-[4rem] md:pt-0 pt-[4rem]">
        <motion.div
          className="space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          <h1 className="text-3xl font-medium max-w-md">
            Why we're the right choice for your digital success
          </h1>
          <p className="text-sm max-w-lg">
            Behind every project is a team committed to your growth and success
            in the digital world
          </p>
        </motion.div>

        <div className="space-y-4 pt-[4rem]">
          {[
            "Over a decade of experience of driving digital success",
            "Focus on outcomes that fuel growth",
            "Transparent communication every step of the way",
            "A proven track record of success",
          ].map((text, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 border-b-[1px] pb-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2 + index}
            >
              <Check className="p-1 size-5 bg-yellow-200 rounded-full text-neutral-800" />
              <p className="text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;

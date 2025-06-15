"use client";

import React from "react";
import { Button } from "./ui/button";
import { MoveRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion, useAnimation, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with this team was a game changer for our brand. Their innovative strategies boosted our online presence and helped us reach new audiences. We couldn't be happier with the results.",
    name: "John Luther King",
    position: "Product Manager",
    company: "Urban Ventures",
    image: "/asset1.jpg",
  },
  {
    quote:
      "This collaboration helped us cut through the noise. Their creative input and fast execution made a significant difference in how our customers saw us.",
    name: "Emily Watson",
    position: "Head of Marketing",
    company: "FreshFlow Inc.",
    image: "/asset3.jpg",
  },
  {
    quote:
      "Impressed with their attention to detail and deep understanding of branding. They were more like a partner than an agency.",
    name: "Carlos Mendes",
    position: "Co-founder",
    company: "Nimbus AI",
    image: "/asset1.jpg",
  },
];


const fadeIn = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const hasPrev = current > 0;
  const hasNext = current < count - 1;

  const btnClass = (enabled: boolean) =>
    `text-sm px-2 py-2 text-neutral-800 rounded-full ${
      enabled ? "bg-yellow-300" : "bg-neutral-100"
    }`;

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col items-center justify-between md:px-[6rem] px-6 md:pt-0 pt-[4rem]"
    >
      <motion.div
        className="flex md:flex-row flex-col justify-between md:items-center w-full md:px-6 py-[4rem] md:gap-0 gap-4"
        initial="hidden"
        animate={controls}
        variants={fadeIn(0.2)}
      >
        <h1 className="text-3xl font-medium max-w-sm">
          Hear from those who've grown with us
        </h1>

        {/* Custom Navigation Buttons - Desktop */}
        <motion.div
          className="md:flex gap-2 hidden"
          initial="hidden"
          animate={controls}
          variants={fadeIn(0.4)}
        >
          <Button className={btnClass(hasPrev)} onClick={() => api?.scrollPrev()}>
            <MoveLeft />
          </Button>
          <Button className={btnClass(hasNext)} onClick={() => api?.scrollNext()}>
            <MoveRight />
          </Button>
        </motion.div>
      </motion.div>

      <div className="w-full max-w-4xl">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="flex md:flex-row flex-col justify-between gap-10"
                  initial="hidden"
                  animate={controls}
                  variants={fadeIn(0.2 * (index + 1))}
                >
                  <motion.div
                    className="md:w-[50%] md:h-auto h-[35vh] bg-neutral-100 p-6 rounded-lg flex flex-col justify-between"
                    variants={fadeIn(0.3 * (index + 1))}
                  >
                    <p className="text-sm mb-6">"{item.quote}"</p>
                    <div>
                      <h1 className="font-medium text-xl">{item.name}</h1>
                      <p className="text-sm text-neutral-500">
                        {item.position}, {item.company}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="md:w-[50%] md:order-1 order-[-1]"
                    variants={fadeIn(0.35 * (index + 1))}
                  >
                    <Image
                      src={item.image}
                      alt={item.company}
                      width={400}
                      height={400}
                      className="rounded-lg w-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Custom Navigation Buttons - Mobile */}
      <motion.div
        className="md:hidden gap-2 flex pt-6"
        initial="hidden"
        animate={controls}
        variants={fadeIn(0.5)}
      >
        <Button className={btnClass(hasPrev)} onClick={() => api?.scrollPrev()}>
          <MoveLeft />
        </Button>
        <Button className={btnClass(hasNext)} onClick={() => api?.scrollNext()}>
          <MoveRight />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;

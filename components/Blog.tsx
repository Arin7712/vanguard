import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Blog = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center md:px-[6rem] px-6 pt-[4rem]">
      {/* Image Section */}
      <div className="md:w-[40%]">
        <Image
          src="/asset3.jpg"
          alt="Vanguard"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-[40%] flex flex-col justify-between gap-6 py-[4rem] md:pt-0 pt-[4rem]">
        <div className="space-y-6">
          <p className="text-sm text-neutral-500">
            App design - January 01, 2025
          </p>
          <h1 className="text-3xl font-medium max-w-md">
            The future of web design: trends to watch
          </h1>
          <p className="text-sm max-w-lg">
            PlantPlanet is a user-friendly app that helps you crare for your
            indoor plants with personalized schedules and expert tips.
          </p>
          <Button className="text-sm px-6 bg-neutral-800 rounded-full">
            Read more
          </Button>{" "}
        </div>
      </div>

    </div>
  );
};

export default Blog;

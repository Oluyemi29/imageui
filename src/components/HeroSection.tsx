"use client";
import React, { useState, useRef } from "react";
import Datalist from "./datalist";
import { Button } from "@heroui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const child = scrollContainerRef.current.children[index] as HTMLElement;
      if (child) {
        scrollContainerRef.current.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % Datalist.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + Datalist.length) % Datalist.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  return (
    <div className="bg-background">
      <div
        ref={scrollContainerRef}
        className="w-full flex flex-row gap-2 md:gap-5 h-[28rem] overflow-x-hidden scroll-smooth"
      >
        {Datalist.map((eachData, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${eachData.image})` }}
            className="flex-shrink-0 w-full rounded-lg md:w-[70vw] bg-center bg-no-repeat bg-cover relative"
          >
            <div className="absolute w-full bottom-3 md:bottom-5 md:left-5 flex flex-col gap-10 justify-center items-center">
              <h1 className="md:text-5xl text-4xl font-bold text-white">
                {eachData.main}
              </h1>
              <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-end w-[95%] md:w-[65vw]">
                <div className="flex flex-col w-full md:w-[70%]">
                  <h1 className="text-xl text-white font-semibold">
                    {eachData.title}
                  </h1>
                  <p className="text-gray-300 line-clamp-3">
                    {eachData.description}
                  </p>
                </div>
                <Button className="line-clamp-1 bg-white rounded-full text-black">
                  Try {eachData.main}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-row md:justify-end items-center justify-start mt-3">
        <div className="md:w-[50%] w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            {Datalist.map((_eachList, index) => {
              return (
                <GoDotFill
                  key={index}
                  className={
                    index === currentIndex
                      ? "text-foreground cursor-pointer"
                      : "text-gray-500 cursor-pointer"
                  }
                  onClick={() => {
                    setCurrentIndex(index);
                    scrollToIndex(index);
                  }}
                />
              );
            })}
          </div>
          <div className="flex gap-3">
            <IoIosArrowBack
              className="cursor-pointer w-auto h-auto p-2 text-black bg-gray-200 rounded-md"
              onClick={() => handlePrev()}
            />
            <IoIosArrowForward
              className="cursor-pointer w-auto h-auto p-2 text-black bg-gray-200 rounded-md"
              onClick={() => handleNext()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

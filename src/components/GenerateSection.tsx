"use client";
import { Button } from "@heroui/react";
import React from "react";
import { FaRegImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { FaPenFancy } from "react-icons/fa";
import { PiCompassToolBold } from "react-icons/pi";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { MdTransferWithinAStation } from "react-icons/md";
import { BsFillTrainFrontFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const GenerateSection = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-row my-2 justify-between items-center">
        <h1 className="text-foreground font-semibold">Generate</h1>
        <div className="flex flex-row gap-1 items-center">
          <IoIosArrowDown size={14} className="text-blue-600" />
          <p className="text-blue-600 text-[0.8rem] font-semibold">Show all</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 grid-cols-1">
        {/* image */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-gradient-to-b from-[#275886] to-[#B9C7D3]">
              <FaRegImage className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Image</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* video */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-amber-500">
              <FaVideo className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Video</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* Real Time */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-gradient-to-b from-sky-400 to-sky-200">
              <FaStopwatch className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Realtime</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* Enhance */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-gradient-to-b from-black to-black/30">
              <FaPenFancy className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Realtime</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* Edit */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-gradient-to-b from-purple-950 to-purple-950/50">
              <PiCompassToolBold className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Edit</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* Video Limpsync */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-gradient-to-b from-teal-950 to-amber-100">
              <PiMicrophoneStageFill className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Video Limpync</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* Motion Transfer */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-black">
              <MdTransferWithinAStation className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Motion Tranfer</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>

        {/* Train */}
        <div className="flex flex-row justify-between gap-5 items-center">
          <div
            className="flex flex-row
           items-center gap-2"
          >
            <div className="w-auto h-auto p-2 rounded-md bg-white">
              <BsFillTrainFrontFill className="w-8 h-8 text-black" />
            </div>
            <div>
              <div className="flex flex-row gap-1 items-center">
                <h1 className="font-semibold text-sm">Train</h1>
                <p className="font-semibold text-white text-[0.8rem] bg-blue-600 px-2 pb-0.5 rounded-full">
                  New
                </p>
              </div>
              <p className="text-[0.7rem] text-foreground/75 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate cumque necessitatibus incidunt quasi repellendus
                ipsam a eius animi sequi ducimus?
              </p>
            </div>
          </div>
          <div>
            <Button size="sm" className="font-semibold">
              Open
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateSection;

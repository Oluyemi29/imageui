"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaImage } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { PiCompassToolBold } from "react-icons/pi";
import { BsFillTrainFrontFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import ThemeProvider from "./ThemeProvider";
import { IoMdMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";

const NavbarInfo = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      key: 1,
      icon: <FaUserCircle />,
    },
    {
      key: 2,
      icon: <GoHomeFill />,
    },
    {
      key: 3,
      icon: <FaImage />,
    },
    {
      key: 4,
      icon: <IoVideocam />,
    },
    {
      key: 5,
      icon: <FaPenFancy />,
    },
    {
      key: 6,
      icon: <FaStopwatch />,
    },
    {
      key: 7,
      icon: <PiCompassToolBold />,
    },
  ];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarBrand>
          <FaUserCircle />
          <p className="font-bold text-inherit ml-2">IMG</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <div className="bg-slate-50 p-1.5 rounded-md flex flex-row gap-5">
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-white">
            <GoHomeFill className="text-black" size={24} />
          </NavbarItem>
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-transparent">
            <FaImage className="text-black" size={24} />
          </NavbarItem>
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-transparent">
            <IoVideocam className="text-black" size={24} />
          </NavbarItem>
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-transparent">
            <FaPenFancy className="text-black" size={24} />
          </NavbarItem>
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-transparent">
            <FaStopwatch className="text-black" size={24} />
          </NavbarItem>
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-transparent">
            <PiCompassToolBold className="text-black" size={24} />
          </NavbarItem>
          <NavbarItem className="w-auto h-auto p-1 rounded-md bg-transparent">
            <BsFillTrainFrontFill className="text-black" size={24} />
          </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="w-auto h-auto p-1 md:flex hidden rounded-md bg-slate-50 cursor-pointer">
          <div className="flex flex-row items-center gap-1">
            <FaImage className="text-black" size={16} />
            <p className="text-black text-[0.7rem] font-semibold">Gallery</p>
          </div>
        </NavbarItem>
        <NavbarItem className="w-auto h-auto p-1 md:flex hidden rounded-md cursor-pointer bg-slate-50">
          <div className="flex flex-row items-center gap-1">
            <MdSupportAgent className="text-black" size={16} />
            <p className="text-black text-[0.7rem] font-semibold">Support</p>
          </div>
        </NavbarItem>
        <NavbarItem className="w-auto h-auto cursor-pointer p-1 rounded-md bg-slate-50">
          <IoIosNotifications className="text-black" size={16} />
        </NavbarItem>
        <NavbarItem className="w-auto cursor-pointer h-auto p-1 rounded-md bg-slate-50">
          <ThemeProvider />
        </NavbarItem>
        <NavbarItem className="md:hidden block">
          {isMenuOpen ? (
            <HiMiniXMark size={24} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <IoMdMenu size={24} onClick={() => setIsMenuOpen(true)} />
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>{item.icon}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarInfo;

"use client";

// import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import userIcon from "../../../public/pic.png";
import { Button, Drawer, Typography } from "antd";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { RiTableFill } from "react-icons/ri";
import { BsFillTrophyFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  //   console.log(toggle);
  const handleToggle = () => {
    showDrawer();
    setToggle(!toggle);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setToggle(!toggle);
  };
  return (
    <div
      className={`z-50 w-full top-0 sticky shadow-sm border-b-0 duration-700 ease-in-out color-main-bg py-1 backdrop-blur-xl opacity-70"
      }`}
    >
      <div className="main-container color-main-two">
        <div
          className={`navbar-wrapper__body flex flex-row items-center justify-between py-2 md:py-3`}
        >
          <div className="flex items-center gap-3 md:gap-0">
            <p className="text-lg font-semibold block md:hidden">
              <span className="flex items-center">
                {toggle ? (
                  <RxCross2
                    onClick={handleToggle}
                    size={24}
                    className="font-bold transition duration-700"
                  />
                ) : (
                  <HiMenuAlt1
                    onClick={handleToggle}
                    size={24}
                    className="transition duration-700"
                  />
                )}
              </span>
            </p>
            <p className="text-lg font-semibold">Admission Army</p>
          </div>
          <div className="flex gap-6 items-center">
            <Link
              href={"/my-result"}
              className="color-main-two hidden md:block"
            >
              <p>Result</p>
            </Link>
            <Link
              href={"/merit-list"}
              className="color-main-two hidden md:block"
            >
              <p>Merit List</p>
            </Link>
            <Link
              href={"/merit-list"}
              className="color-main-two  hidden md:block"
            >
              <p>Login</p>
            </Link>
            <Link
              href={"/merit-list"}
              className="color-main-two flex items-center"
            >
              <Image
                src={userIcon}
                alt="user-icon"
                className="h-10 w-10 rounded-full border-2 border-solid "
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Sidebar for mobile and tablet */}
      <Drawer
        title="Admission Army"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        width={280}
      >
        <div
          className={`${
            path === "/" ? "rounded-md shadow color-main-bg " : ""
          }`}
        >
          <Link href={"/"}>
            <Typography.Text
              type="text"
              className={`font-semibold flex items-center py-[6px] px-[10px] gap-2 ${
                path === "/" ? "color-main-two " : "color-dark"
              }`}
            >
              <span className="flex items-center">
                <IoHomeSharp size={14} />
              </span>
              Home
            </Typography.Text>
          </Link>
        </div>
        <div
          className={`${
            path === "/my-result" ? "rounded-md shadow color-main-bg " : ""
          }`}
        >
          <Link href={"/my-result"}>
            <Typography.Text
              type="text"
              className={`font-semibold flex items-center py-[6px] px-[10px] gap-2 ${
                path === "/my-result" ? "color-main-two " : "color-dark"
              }`}
            >
              <span className="flex items-center">
                <RiTableFill size={14} />
              </span>
              Result
            </Typography.Text>
          </Link>
        </div>
        <div
          className={`${
            path === "/merit-list" ? "rounded-md shadow color-main-bg " : ""
          }`}
        >
          <Link href={"/merit-list"}>
            <Typography.Text
              type="text"
              className={`font-semibold flex items-center py-[6px] px-[10px] gap-2 ${
                path === "/merit-list" ? "color-main-two " : "color-dark"
              }`}
            >
              <span className="flex items-center">
                <BsFillTrophyFill size={14} />
              </span>
              Merit List
            </Typography.Text>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

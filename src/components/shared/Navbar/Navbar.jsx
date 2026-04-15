import Link from "next/link";
import React from "react";

import logoImg from "@/assets/image/logo.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import MyLink from "./MyLink";


const Navbar = () => {
  const navItem = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
  ];
  return (
    <div className=" shadow ">
      <nav className="flex justify-between gap-4 items-center  py-4 container mx-auto ">
        <Image src={logoImg} alt={"logo"} width={50} height={50} />

        <ul className="flex justify-between gap-2 items-center">
          {navItem.map((item, index) => (
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
        </ul>
        {/* <ul className="flex justify-between gap-4 items-center">
          <MyNavLink to={"/"}>Home</MyNavLink>
          <MyNavLink to={"/apps"}>Apps</MyNavLink>
          <MyNavLink to={"/installApps"}>Installation</MyNavLink>
        </ul> */}

        <button className="btn btn-neutral">
          <FaGithub /> Contribute
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return <Link href={href} className={  `p-1 rounded rouned-lg ${pathName === href ? "bg-[#00313C]": ""}`}>{children}</Link>;
};

export default MyLink;

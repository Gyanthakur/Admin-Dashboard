"use client";

import { GlobalContext } from "@/context";
import { routes } from "@/utils";
import Link from "next/link";
import { useContext } from "react";
import { HiX } from "react-icons/hi";

export default function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);

  return (
    <div
      className={`fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white
      ${openSidebar ? "translate-x-0" : "-translate-x-96"} xl:translate-x-0`}
    >
      {/* Close Button */}
      <span
        onClick={() => setOpenSidebar(false)}
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
      >
        <HiX size={24} />
      </span>

      {/* Logo Section */}
      <div className="mx-[42px] mt-[50px] flex items-center">
        <div className="ml-1 mt-1 text-[20px] font-bold text-navy-700 dark:text-white">
          ADMIN DASHBOARD
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="mb-auto mt-20 pt-1">
        {routes.map((routeItem, index) => (
          <li key={index} className="my-[3px] px-8">
            <Link
              href={routeItem.path} // Correctly reference the `path` property
              className="flex items-center space-x-4 hover:text-navy-700 dark:hover:text-white"
            >
              <span>{routeItem.icon}</span>
              <p className="text-[20px] font-medium text-gray-600 dark:text-gray-300">
                {routeItem.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

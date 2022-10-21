import React from "react";
import Link from "next/link";
import {
  UsersIcon,
  UserGroupIcon,
  DesktopComputerIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import {
  ShoppingBagIcon,
  CalendarIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
function Sidebar() {
  return (
    <section className="flex w-3/12">
      <ul className="p-4 space-y-8">
        <li className="flex items-center">
          <Link href="#">
            <a className="text-sm">Sebahattin Ozdemir</a>
          </Link>
        </li>
        <li className="flex items-center">
          <UsersIcon className="h-6 text-blue-600 mr-2"></UsersIcon>
          <Link href="#">
            <a className="text-sm">Friends</a>
          </Link>
        </li>
        <li className="flex items-center">
          <UserGroupIcon className="h-6 text-blue-600 mr-2"></UserGroupIcon>
          <Link href="#">
            <a className="text-sm">Groups</a>
          </Link>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 text-blue-600 mr-2"></ShoppingBagIcon>
          <Link href="#">
            <a className="text-sm">Marketplace</a>
          </Link>
        </li>
        <li className="flex items-center">
          <DesktopComputerIcon className="h-6 text-blue-600 mr-2"></DesktopComputerIcon>
          <Link href="#">
            <a className="text-sm">Watch</a>
          </Link>
        </li>
        <li className="flex items-center">
          <CalendarIcon className="h-6 text-blue-600 mr-2"></CalendarIcon>
          <Link href="#">
            <a className="text-sm">Events</a>
          </Link>
        </li>
        <li className="flex items-center">
          <ClockIcon className="h-6 text-blue-600 mr-2"></ClockIcon>
          <Link href="#">
            <a className="text-sm">Memories</a>
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronDownIcon className="h-6 text-blue-600 mr-2"></ChevronDownIcon>
          <a className="text-sm">See More</a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { signOut } from "next-auth/react";

function Header() {
  return (
    <header className="flex items-center shadow-md sticky top-0 z-50 bg-white p-2 lg:px-5">
      {/* Left */}
      <div className="flex">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        ></Image>

        <div className="items-center border-2 rounded-full ml-2 bg-gray-100 p-2 hidden md:inline-flex">
          <SearchIcon className="h-6 text-gray-600 ml-2"></SearchIcon>
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-none bg-transparent placeholder:text-gray-500 "
          ></input>
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 last:mr-20 ">
          <HeaderIcon active={true} Icon={HomeIcon}></HeaderIcon>
          <HeaderIcon Icon={FlagIcon}></HeaderIcon>
          <HeaderIcon Icon={PlayIcon}></HeaderIcon>
          <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
          <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3">
          Sebahattin Ozdemir
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon onClick={() => signOut()} className="icon" />
      </div>
    </header>
  );
}

export default Header;

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 
         rounded-xl active:border-blue-500 active:border-b-2 group ${
           active && "text-blue-500"
         }`}
    >
      <Icon className="h-6 group-hover:text-blue-500 " />
    </div>
  );
};

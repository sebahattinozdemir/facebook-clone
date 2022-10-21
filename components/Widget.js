import React from "react";
import {
  VideoCameraIcon,
  SearchIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";

function Widget() {
  return (
    <section className="justify-end w-3/12 p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">Contacts</p>
        </div>
        <div className="flex space-x-1">
          <button>
            <VideoCameraIcon className="h-6 text-gray-500 mr-2"></VideoCameraIcon>
          </button>
          <button>
            <SearchIcon className="h-6 text-gray-500 mr-2"></SearchIcon>
          </button>
          <button>
            <DotsHorizontalIcon className="h-6 text-gray-500 mr-2"></DotsHorizontalIcon>
          </button>
        </div>
      </div>
      <div className="flex flex-col  items-start space-y-4 p-2 mt-2">
        <button className="w-full border-2">
          {" "}
          <img className=" rounded-full" src="./../assets/sebo.png"></img>{" "}
          Sebahattin Ozdemir
        </button>
        <button className="w-full border-2">
          {" "}
          <img className=" rounded-full" src="./../assets/sebo.png"></img>{" "}
          Mehmet Ozdemir
        </button>
        <button className="w-full border-2">
          {" "}
          <img className=" rounded-full" src="./../assets/sebo.png"></img> Ali
          Ozdemir
        </button>
        <button className="w-full border-2">
          {" "}
          <img className=" rounded-full" src="./../assets/sebo.png"></img> Omer
          Ozdemir
        </button>
        <button className="w-full border-2">
          {" "}
          <img className=" rounded-full" src="./../assets/sebo.png"></img> Can
          Ozdemir
        </button>
        <button className="w-full border-2">
          {" "}
          <img className=" rounded-full" src="./../assets/sebo.png"></img> Melek
          Ozdemir
        </button>
      </div>
    </section>
  );
}

export default Widget;

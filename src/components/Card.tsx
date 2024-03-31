import Image from "next/image";
import React from "react";
type prop = {
  name: String;
  img: string;
  totalEvents: number;
  sport: String;
  isDarkMode: boolean;
};

const Card = ({ name, img, totalEvents, sport, isDarkMode }: prop) => {
  return (
    <div className="h-full">
      <div
        className={`${
          isDarkMode ? "bg-slate-800" : "bg-white"
        } shadow-lg flex flex-col flex-1 justify-between p-2 border h-full border-gray-200 rounded-lg`}
      >
        <Image
          alt="Image"
          className="bg-white shadow-lg aspect-[1/1] overflow-hidden rounded-lg object-cover object-center h-4/5 w-full"
          height={180}
          width={200}
          src={img}
        />
        <h1 className="text-2xl py-2  dark:bg-slate-800 dark:text-white font-semibold ">{name}</h1>
        <div className="mb-2  w-full">
          <div className="shadow-lg bg-white dark:bg-slate-800 dark:text-white text-black p-2 rounded-lg flex justify-between">
            <div>
              <p>Total Events</p>
              <p className="mt-1">{totalEvents} Events</p>
            </div>
            <div>
              <p>Sports</p>
              <p className="mt-1">{sport}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

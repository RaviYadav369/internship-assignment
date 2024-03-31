import Image from "next/image";
import React from "react";

type props = {
  card: {
    name: string;
    img: string;
    date: string;
    address: string;
    btnText: string;
  };
  isDarkMode: boolean;
};

const SliderCard = ({ card, isDarkMode }: props) => {
  return (
    <div className="h-full">
      <div
        className={`${
          isDarkMode ? "bg-slate-800/70" : "bg-white"
        } shadow-lg flex flex-col flex-1 justify-between p-2 border h-full border-gray-200 rounded-lg`}
      >
        <Image
          alt="Image"
          className="bg-white shadow-lg aspect-[1/1] overflow-hidden rounded-lg object-cover object-center h-4/5 w-full"
          height={180}
          width={200}
          src={card.img}
        />
        <div className=" mt-2 border-t-2 dark:bg-slate-800 border-black border-dashed  w-full">
          <div className="shadow-lg dark:bg-slate-700   dark:text-white text-black p-2 rounded-lg flex flex-col">
            <h1 className="text-md py-2  dark:text-white  font-semibold ">
              {card.name}
            </h1>
            <div className="p-1">
              <p className="mt-1  dark:text-white text-sm">{card.date}</p>
            </div>
            <div className="p-1">
              <p className="text-sm  dark:text-white">{card.address}</p>
            </div>
            <button className="px-2 py-2 dark:text-white dark:bg-slate-700 text-black bg-slate-200 text-center ">
              {card.btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;

"use client";
import Card from "@/components/Card";
import SliderCard from "@/components/SliderCard";
import Image from "next/image";
import { useState } from "react";
export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cardArray = [
    {
      name: "Sacramento River Cats",
      img: "/1001.jpg",
      totalEvents: 48,
      sports: "Baseball",
    },

    {
      name: "Sacramento River Cats",
      img: "/los.jpg",
      totalEvents: 48,
      sports: "Baseball",
    },

    {
      name: "Sacramento River Cats",
      img: "/rgb.jpg",
      totalEvents: 48,
      sports: "Baseball",
    },
    {
      name: "Sacramento River Cats",
      img: "/ttt.jpg",
      totalEvents: 48,
      sports: "Baseball",
    },
  ];

  const sliderCards = [
    {
      name: "Sacramento River Cats",
      img: "/ttt.jpg",
      date: "OCT 15 | Sun |4:30 PM",
      address: "Las vegus, Balpark Las Vegas Nevada",
      btnText:"Take Flight Collection"
    },
    
    {
      name: "Sacramento River Cats",
      img: "/ttt.jpg",
      date: "OCT 15 | Sun |4:30 PM",
      address: "Las vegus, Balpark Las Vegas Nevada",
      btnText:"Take Flight Collection"
    },
    
    {
      name: "Sacramento River Cats",
      img: "/ttt.jpg",
      date: "OCT 15 | Sun |4:30 PM",
      address: "Las vegus, Balpark Las Vegas Nevada",
      btnText:"Take Flight Collection"
    },
    
  ];
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark"); // Toggle dark mode class at the root
  };
  return (
    <div className={isDarkMode ? "bg-black/70" : "bg-white"}>
      <div className=" mx-30 mb-10 rounded-m">
        <div className="   mx-30 mb-10 rounded-m">
          <div className="grid gap-6 lg:grid-row-4 xl:gap-8 ">

            <div className="grid gap-2 mb-20 ">
              <h2 className="text-2xl dark:text-white font-semibold tracking-tight">
                Top Sports
              </h2>
              <div className="grid grid-cols-5 gap-2 mx-40">
                {cardArray.map((card, index) => (
                  <Card
                    isDarkMode={isDarkMode}
                    key={index}
                    name={card.name}
                    img={card.img}
                    totalEvents={card.totalEvents}
                    sport={card.sports}
                  />
                ))}
                <div className="flex flex-col items-center justify-center p-2 border border-gray-200 rounded-lg">
                  <img
                    alt="Image"
                    className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                    height="auto"
                    src="/ad.jpg"
                  />
                  <h1 className="mt-3 text-lg text-center font-bold dark:text-white">
                    Advertisment title
                  </h1>
                  <p className="text-sm p-3 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus enim accusantium iure nulla necessitatibus
                    voluptas? Iure minus exercitationem molestiae dicta
                    asperiores Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Possimus enim accusantium iure nulla
                    necessitatibus voluptas? Iure minus exercitationem molestiae
                    dicta asperiores
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-5 h-full">
                <div className="border border-green-500 rounded-md">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                    See More
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-2 mb-20">
              <h2 className="text-4xl font-semibold tracking-tight dark:text-white text-center">
                Collection Spotlight
              </h2>
              <p className="text-center py-5 w-3/4 mx-auto dark:text-white">
                Discover extraordinary moments of sports with our Spotlight
                Collection metatickets--exclusive access to premium events for
                an unforgettable experience. Grab yours today!
              </p>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-4 ">
                <div className="col-span-1 flex justify-end items-center">
                  <button>v</button>
                </div>
                <div className="col-span-2 gap-5 flex">
                  {sliderCards.map((card, index) => (
                    <SliderCard
                      key={index}
                      card={card}
                      isDarkMode={isDarkMode}
                    />
                  ))}
                </div>
                <div className="col-span-1 flex  items-center">
                  <button>v</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className={` font-bold py-2 px-4 bg-black/30 text-white shadow-lg dark:bg-white dark:text-black rounded-md focus:outline-none focus:shadow-outline `}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

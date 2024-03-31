"use client"
import Card from '@/components/Card';
import Image from 'next/image';
import { useState } from 'react';
export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cardArray= [ 
  {
    name : "Sacramento River Cats",
    img:"/1001.jpg",
    totalEvents: 48,
    sports: "Baseball",

  },

  {
  name : "Sacramento River Cats",
  img:"/los.jpg",
  totalEvents: 48,
  sports: "Baseball",
  },
  
  {
    name : "Sacramento River Cats",
    img:"/rgb.jpg",
    totalEvents: 48,
    sports: "Baseball",
    }
 ,
    {
      name : "Sacramento River Cats",
      img:"/ttt.jpg",
      totalEvents: 48,
      sports: "Baseball",
      }
 ]
  
  const cardArray2= [
    {
      name : "Sacramento River Cats",
      img:"/ttt.jpg",
      date:"OCT 15"
      
  
    }
  ]
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Toggle dark mode class at the root
  };
  return (
    <div className={isDarkMode ? 'bg-blue-500' : 'bg-gray-400'
  }>
      <div className=" mx-30 mb-10 rounded-m">
        <div className="   mx-30 mb-10 rounded-m">

          <div className="grid gap-6 lg:grid-row-4 xl:gap-8 ">
            {/* Top Sports Section */}
            <div className="grid gap-2 mb-20 ">
              <h2 className="text-2xl font-semibold tracking-tight">Top Sports</h2>
              <div className="grid grid-cols-5 gap-2 mx-40">
  {cardArray.map((card, index) => (
    <Card isDarkMode={isDarkMode} key={index} name={card.name} img={card.img} totalEvents={card.totalEvents} sport={card.sports} />
  ))}
                <div className="flex flex-col items-center justify-center p-2 border border-gray-200 rounded-lg">
                  <img
                    alt="Image"
                    className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                    height="auto"
                    src="/ad.jpg"

                  />
                  <h1 className="mt-auto text-center font-bold">Advertisment title</h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim accusantium iure nulla necessitatibus voluptas? Iure minus exercitationem molestiae dicta asperiores perspiciatis, deserunt nesciunt repellendus tempora delectus! Saepe asperiores sapiente praesentium iusto est exercitationem, minus rerum inventore, repellat minima harum?
                  </p>
                </div>

              </div>
              <div className="flex justify-center items-center h-full">
                <div className="border border-green-500 rounded-md">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                    See More
                  </button>
                </div>
              </div>

            </div>



            <div className="grid gap-2 mb-20">
              <h2 className="text-2xl font-semibold tracking-tight text-center">Collection Spotlight</h2>
              <p className="text-center">Discover extraordinary moments of sports with our Spotlight Collection metatickets--exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 mx-40 h-5%">
                <div className="flex flex-col items-center justify-center p-2 border border-gray-200 rounded-lg relative">
                  <img
                    alt="Image"
                    className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                    height="auto"
                    width="100%"
                    src="/ttt.jpg"
                  />
                  <h1 className="m-auto text-center mt-0">Los Vegas Avatiro</h1>
                  <div className="absolute bottom-0 left-0 right-0 mb-2">
                    <div className="bg-white text-black p-2 rounded-lg flex justify-between mx-4">
                      <div>
                        <p>Total Events</p>
                        <p className="mt-1">28 Events</p>
                      </div>
                      <div>
                        <p>Sports</p>
                        <p className="mt-1">Baseball</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 border border-gray-200 rounded-lg relative">
                  <img
                    alt="Image"
                    className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                    height="auto"
                    width="100%"
                    src="/ttt.jpg"
                  />
                  <h1 className="m-auto text-center mt-0">Los Vegas Avatiro</h1>
                  <div className="absolute bottom-0 left-0 right-0 mb-2">
                    <div className="bg-white text-black p-2 rounded-lg flex justify-between mx-4">
                      <div>
                        <p>Total Events</p>
                        <p className="mt-1">28 Events</p>
                      </div>
                      <div>
                        <p>Sports</p>
                        <p className="mt-1">Baseball</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col items-center justify-center p-2 border border-gray-200 rounded-lg relative">
                  <img
                    alt="Image"
                    className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
                    height="auto"
                    width="100%"
                    src="/ttt.jpg"
                  />
                  <h1 className="m-auto text-center mt-0">Los Vegas Avatiro</h1>
                  <div className="absolute bottom-0 left-0 right-0 mb-2">
                    <div className="bg-white text-black p-2 rounded-lg flex justify-between mx-4">
                      <div>
                        <p>Total Events</p>
                        <p className="mt-1">28 Events</p>
                      </div>
                      <div>
                        <p>Sports</p>
                        <p className="mt-1">Baseball</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className={` text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-green-500' : 'bg-gray-400'
              }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  )
}
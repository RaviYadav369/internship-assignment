import Image from 'next/image'
import React from 'react'
 type prop={
  name : String,
  img: string,
  totalEvents:number,
  sport:String,
  isDarkMode:boolean
 }

const Card = ({name,img,totalEvents,sport,isDarkMode}: prop) => {
  return (
    <div>
    <div className={`${isDarkMode ? 'bg-green-500' : 'bg-gray-400'
  } shadow-lg flex flex-col justify-center p-2 border border-gray-200 rounded-lg relative`}>
    <Image
      alt="Image"
      className="bg-white shadow-lg aspect-[1/1] overflow-hidden rounded-lg object-cover object-center h-full w-full"
      height={180}
      width={200}
      src={img}
    />
    <h1 className="text-2xl py-5  font-semibold  mt-2">{name}</h1>
    <div className="mb-2 mt-5 w-full">
      <div className="shadow-lg bg-white dark:bg-blue-600 dark:text-white text-black p-2 rounded-lg flex justify-between mx-4">
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
  )
}

export default Card
import React from 'react'

import { IoLocation } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

function PlaceCard({ place }) {
  return (
    <div className='place_card rounded-2xl overflow-hidden shadow-lg'>
        <div className="place_card_img h-50 overflow-hidden flex items-center justify-center">
            <img src={place.images[0]} alt={place.name} className='w-full min-h-full hover:scale-105 transition-transform duration-300' />
        </div>

        <div className="content p-3 flex flex-col gap-3">
            <h3 className="text-xl font-bold">{place.name}</h3>
            <p className="text-gray-600"><IoLocation className="inline mr-2 fill-blue-600 text-2xl" />{place.location}</p>
            <p className="text-gray-700 description">{place.description}</p>

            <div className="rating">
                <span className='flex items-center gap-2'><IoIosStar className="fill-yellow-400 text-2xl" />{place.rating} reviews</span>
                {/* <span>({place.reviews}) reviews</span> */}
            </div>

            <div className="tags flex flex-wrap gap-2">
                {place.tags.map((tag, index) => (
                    <span key={index} className="tag bg-gray-200 text-gray-800 shadow-md px-2 py-1 rounded-full text-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

    </div>
  )
}

export default PlaceCard
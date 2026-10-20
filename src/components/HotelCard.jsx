import React from 'react'

import { IoLocation } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

function HotelCard({ hotel }) {
  return (
    <div className='hotel_card rounded-2xl overflow-hidden shadow-lg'>
        <div className="hotel_card_img h-50 overflow-hidden flex items-center justify-center">
            <img src={'./src/assets/images/'+hotel.images[0]} alt={hotel.name} className='w-full min-h-full hover:scale-105 transition-transform duration-300' />
        </div>

        <div className="content p-3 flex flex-col gap-3">
            <h3 className="text-xl font-bold">{hotel.name}</h3>
            <p className="text-gray-600"><IoLocation className="inline mr-2 fill-blue-600 text-2xl" />{hotel.location}</p>
            <p className="text-gray-700 description">{hotel.description}</p>

            <div className="rating">
                <span className='flex items-center gap-2'><IoIosStar className="fill-yellow-400 text-2xl" />{hotel.rating} reviews</span>
                {/* <span>({hotel.reviews}) reviews</span> */}
            </div>
            
            <div className="price">
                <p className="text-gray-700">Price: {hotel.price}</p>
            </div>
        </div>
    </div>
  )
}

export default HotelCard
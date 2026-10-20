import React from 'react'
import hotelsData from '../assets/data/hotelsData'
import HotelCard from '../components/HotelCard'

function Hotels() {
  return (
    <div className='hotels'>
      <h1 className='text-3xl font-bold text-center mb-6'>Recommended hotels</h1>

      <form action="" className='flex items-center justify-center gap-3 mb-6'>
        <input type="text" placeholder='Search for a hotel...' className='border border-gray-400 rounded-lg p-2 text-lg' />
        <button type='submit' className='bg-amber-400 rounded-lg p-2 text-lg cursor-pointer'>Search</button>
      </form>

      <div className="hotels-cards w-[90%] m-auto grid grid-cols-2 gap-5 max-[764px]:grid-cols-1 mb-2">
        {hotelsData.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}

export default Hotels
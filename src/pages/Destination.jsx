import React from 'react'
import { useSearchParams } from 'react-router-dom';

import destinationsData from '../assets/data/destinationsData';

import PlaceCard from '../components/PlaceCard';

function Destination() {

  const [searchParams] = useSearchParams();

  const persona = searchParams.get('persona');

  return (
    <div className='destination'>
      <h1 className='text-3xl font-bold text-center mb-6'>Destinations</h1>

      <form action="" className='flex items-center justify-center gap-3 mb-6'>
        <input type="text" placeholder='Search for a destination...' className='border border-gray-400 rounded-lg p-2 text-lg' />
        <button type='submit' className='bg-amber-400 rounded-lg p-2 text-lg cursor-pointer'>Search</button>
      </form>

      <div className="places w-[90%] m-auto grid grid-cols-2 gap-5 max-[764px]:grid-cols-1 mb-2">
        {destinationsData.map((destination, index) => (
          <PlaceCard key={index} place={destination} />
        ))}
      </div>
    </div>
  )
}

export default Destination
import React from 'react'

import { FaAward } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div className="texture h-full w-full bg-[#003b639c] flex flex-col items-center justify-center">

        <div className="content h-full max-w-187.5 p-1 flex flex-col items-center justify-center gap-7.5 text-center text-white max[800px]:w-full">
          <h1 className="text-[52px] font-bold max-[800px]:text-[40px]">Discover Your Perfect Adventure</h1>
          <p className="text-lg max-[800px]:text-base max-[800px]:text-wrap">Answer our personalized questions to help you choose the destinations and hotels that suit your travel style</p>
          <Link to="/quiz" className="bg-amber-500 hover:bg-amber-600 transition-all text-3xl text-white font-medium py-4 px-8 rounded-full shadow-2xl cursor-pointer max-[800px]:text-xl">Start Your Journey Now</Link>
          <ul className="mt-4 max-w-[95%] flex items-center gap-7.5 text-lg  max-[800px]:flex-wrap">
            <li className='flex items-center gap-1'><FaAward /> Award Winning</li>
            <li className='flex items-center gap-1'><MdOutlineShield /> Trusted & Safe</li>
            <li className='flex items-center gap-1'><MdOutlineAccessTime /> 24/7 Support</li>
            <li className='flex items-center gap-1'><FaRegStar /> 5-Star Rating</li>
          </ul>

        </div>
      </div>
    </section>
  )
}

export default Home
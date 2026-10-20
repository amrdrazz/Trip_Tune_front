import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-81px)] gap-4'>
      <div className="contact shadow-2xl p-10 rounded-xl flex flex-col gap-12 w-200">

        <div className="contact_info">
          <h1 className='text-4xl font-bold'>Contact Us</h1>

          <p className='text-lg text-gray-600'><strong>Phone:</strong> 123-456-7890</p>
          <p className='text-lg text-gray-600'><strong>Email:</strong> info@trip-tune.com</p>


        </div>

        <form action="" className='flex flex-col items-start gap-4'>
          <h1 className='text-4xl font-bold'>Send Message</h1>

          <input type="text" placeholder="Name" className='border border-gray-300 rounded-md p-2 w-full bg-gray-300' />
          <input type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 w-full bg-gray-300' />
          <textarea placeholder="Message" className='border border-gray-300 rounded-md p-2 w-full bg-gray-300'></textarea>
          <button type="submit" className='bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
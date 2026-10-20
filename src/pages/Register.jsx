import React from 'react'

function Register() {
  return (
    <div className='register bg-gray-50 flex items-center justify-center h-screen'>
      <form action="/register" method="POST" className='bg-white p-8 rounded-lg shadow-lg w-150'>
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <div className='mb-4'>
          <label htmlFor="name" className='block text-gray-700 font-medium mb-2'>Name</label>
          <input type="text" id="name" name="name" className='w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-gray-700 font-medium mb-2'>Email</label>
          <input type="email" id="email" name="email" className='w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <div className='mb-4'>
          <label htmlFor="password" className='block text-gray-700 font-medium mb-2'>Password</label>
          <input type="password" id="password" name="password" className='w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all'>Register</button>
      </form>
    </div>
  )
}

export default Register
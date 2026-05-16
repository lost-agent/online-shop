import React from 'react'

export const Header = () => {
  return (
    <header className='w-full flex justify-center text-2xl text-white font-bold'>
        <nav className='w-1/2 bg-blue-500 h-32 rounded-b-2xl flex items-center justify-between pr-10 pl-10'>
          <p>Logo</p>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Cart</li>
          </ul>
        </nav>
    </header>
  )
}

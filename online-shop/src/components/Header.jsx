import React from 'react'

export const Header = () => {
  return (
    <header className='w-full flex justify-center text-2xl text-white font-bold sticky top-0'>
        <nav className='2xl:w-1/2 xl:w-1/2 w-full bg-blue-500 h-32 rounded-b-2xl flex items-center justify-between px-5'>
          <p>Logo</p>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Cart</li>
          </ul>
        </nav>
    </header>
  )
}

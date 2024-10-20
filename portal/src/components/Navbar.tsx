'use client'

import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Navbar() {

  const { user } = useUser();

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 pt-2 pb-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Reforger</span>
            <Image 
            className='rounded-lg m-0 p-0'
            src = '/reforger.png'
            width = {60}
            height = {60}
            alt = 'reforger icon'
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/reforger" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
        </div>
        <div className= "hidde bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ml-10">
          {!user ? (
            <a href="/api/auth/login">Login</a>) : (
          <>
            <a href="/api/auth/logout">Logout</a>
          </>
          )}
        </div>
      </nav>
    </header>
  )
}

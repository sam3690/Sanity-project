import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <Link className='bg-gradient-to-r from-blue-600  to bg-green-500 bg-clip-text text-transparent drop-shadow-md text-3xl font-extrabold' href="/">
            Usama
        </Link>
    </header>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'
import { getPages } from '../sanity/sanity-utils'

const Navbar = async () => {
  const pages = await getPages()
  return (
    <header className='flex items-center justify-between'>
        <Link className='bg-gradient-to-r from-blue-600  to bg-green-500 bg-clip-text text-transparent drop-shadow-md text-3xl font-extrabold' href="/">
            Usama
        </Link>
        
        <div className='flex items-center gap-5 text-sm font-semibold text-gray-600'>
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>{page.title}</Link>
          ))}
        </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import { getProject } from '../../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props ={
    params: {project:string},
}

const page = async ({ params }: Props) => {
  const slug = params.project
  const project = await getProject(slug)
  
    return (
    <div>
    
    <header className='flex justify-between items-center'>
        <h1 className='text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>{project.name}</h1>

        <a href={project.url} title='View Project' target='_blank' rel='noopener noreferrer' className='bg-gray-100 text-gray-500 rounded-lg font-bold py-3 px-4 whitespace-nowrap hover:bg-teal-500 hover:text-teal-100 transition'>View Project</a>
    </header>

    {/* content goes here */}
        <div className='text-lg text-gray-700 mt-5'>
            <PortableText value={project.content}/></div>


    {/* image goes here */}
        <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className='mt-10 drop-shadow-lg object-cover rounded-xl'
        >

        </Image>


    </div>
  )
}

export default page
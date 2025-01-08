import React from 'react'
import { getPage } from '../../../../sanity/sanity-utils'
import { PortableText } from 'next-sanity'


type Props = {
    params: {slug: string}
}

const page = async ({params}: Props) => {
  const page = await getPage(params.slug)
    return (
    <div>
        <h1 className='text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>{page.title}</h1>

        <div className='text-lg text-gray-700 mt-10'>
            <PortableText value={page.content}></PortableText>
        </div>
    </div>
  )
}

export default page
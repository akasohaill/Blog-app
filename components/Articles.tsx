import Link from 'next/link'
import React from 'react'
import Article from './Article'

const Articles = () => {
  return (
    <div className='flex flex-col max-w-6xl mx-auto my-8 gap-4'>
        <span className='font-bold underline my-4'>Recent Articles</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
            [1,2].map((item:any,index:number)=><Link key={index} href={`/blogs/${index}`}><Article/></Link>)
        }
        </div>
    </div>
  )
}

export default Articles

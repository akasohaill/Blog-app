import Image from 'next/image'
import React from 'react'

const SingleArticle = ({params}:any) => {
    const blogId=params.id;
  return (
    <div className='w-full mb-5 border-b'>
        <div className="md:w-[50%] w-full m-auto">
            <Image
            src={'/img.png'}
            alt='blog-img'
            width={500}
            height={500}
            className='w-full object-contain my-5'
            />
            <h1>TITLE {blogId} </h1>
            <br />
            <div className="my-5">
                <p>Html Content will coming soon..</p>
            </div>
        </div>
    </div>
  )
}

export default SingleArticle

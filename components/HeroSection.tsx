import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex items-center md:flex-row flex-col max-w-6xl mx-auto my-10 gap-8'>
      <div>
        <Image
        src={'/img.png'}
        alt=''
        height={600}
        width={600}/>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className='md:text-4xl text-2xl font-bold'>Looking for the most topic where discussed? We Got You Covere 100%</h1>
        <p>This is where we tell the stories. Related to jobs , coding and technology.</p>
      </div>
    </div>
  )
}

export default HeroSection

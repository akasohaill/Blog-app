import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Article = () => {
  return (
    <div className='flex flex-col border border-gray-400 p-2 gap-3'>
      <div className="cursor-pointer">
        <Image
        src={'/img.png'}
        alt='bold-image'
        width={300}
        height={300}
        className='w-full'
        />
      </div>
      <div className="font-bold text-xl border-t border-b border-black">
        <h1>Text</h1>
      </div>
      <Button className='float-right my-2' variant={"secondary"}>Continue reading <ArrowRight/></Button>
    </div>
  )
}

export default Article

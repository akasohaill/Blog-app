import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ContactButton from './ContactButton'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between max-w-6xl mx-auto h-20'>
            <div className="md:mx-0 mx-2">
                <h1 className='text-2xl font-bold'>Blog App</h1>
            </div>
            {/* menu Items */}
            <div className="md:block hidden">
                <div className="flex items-center gap-8">
                    {
                        [1, 2, 3, 4].map((item: any, index: number) => <Link key={index} href={"#"}>Home</Link>)
                    }
                </div>
            </div>
            <ContactButton />
        </div>
    )
}

export default Navbar

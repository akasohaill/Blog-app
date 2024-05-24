'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FormDailog } from '../FormDailog'

const ContactButton = () => {
    const [open, setOpen]=useState(false)

    const openHandler=()=>{
        setOpen(true)
    }

  return (
    <>
    <div className='md:mx-0 mx-2'>
      <Button onClick={openHandler} className='rounded-sm'>CONTACT US</Button>
    </div>
    <FormDailog open={open} setOpen={setOpen}/>
    </>
  )
}

export default ContactButton

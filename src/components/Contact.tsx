import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'> Get In Touch</h2>
                <p className='text-blue-200 text-[18px] pt-2'>
                    Feel Free To Contact
                </p>
                <div className='flex gap-3 items-center'>
                <CiMail size={30}/> campagnz.agency@outlook.com
                </div>
                <div className='flex gap-3 items-center'>
                <BsTelephone size={30}/> +92-370-1026173
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'> Name</label>
                    <input type='text' className='h-[40px] bg-transparent border border-accent'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='Email'> Email</label>
                    <input type='text' className='h-[40px] bg-transparent border border-accent'id='Email'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='msg'> Message</label>
                    <textarea className='h-[40px] bg-transparent border border-accent'id='msg'rows={18}></textarea>
                </div>
                <button className='bg-blue-200 p-1 px-4 text-black'>SEND</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

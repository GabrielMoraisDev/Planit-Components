'use client'
import Image from 'next/image'
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Nav1() {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="h-16 bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center">

        <div className="absolute left-5 h-full w-auto flex place-items-center">
          <Image width={200} height={200} className='h-[70%] w-auto' src='/planit.png' alt='Logo'></Image>
        </div>

        <div className="h-full w-auto flex place-items-center">

          <button className='relative h-full cursor-pointer text-sky-300 hover:text-white dark:hover:text-sky-300 dark:text-white' onMouseEnter={()=>setHome(true)} onMouseLeave={()=>setHome(false)}>
            <div className={`${home?'mt-[0.8rem]':'mb-1'} w-auto h-full flex rounded-md mx-5 place-items-center duration-300`}>
              Home
            </div>
            <div className={`${home?'mt-[-0.7rem] opacity-100':'mb-0 opacity-0'} absolute mb-0 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex justify-center duration-300`}>
              <Icon.House className='text-xl'/>
            </div>
          </button>

          <button className='relative h-full cursor-pointer text-sky-300 hover:text-white dark:hover:text-sky-300 dark:text-white' onMouseEnter={()=>setAbout(true)} onMouseLeave={()=>setAbout(false)}>
            <div className={`${about?'mt-[0.8rem]':'mb-1'} w-auto h-full flex rounded-md mx-5 place-items-center duration-300`}>
              About
            </div>
            <div className={`${about?'mt-[-0.7rem] opacity-100':'mb-0 opacity-0'} absolute mb-0 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex justify-center duration-300`}>
              <Icon.InfoCircle className='text-xl'/>
            </div>
          </button>

          <button className='relative h-full cursor-pointer text-sky-300 hover:text-white dark:hover:text-sky-300 dark:text-white' onMouseEnter={()=>setContact(true)} onMouseLeave={()=>setContact(false)}>
            <div className={`${contact?'mt-[0.8rem]':'mb-1'} w-auto h-full flex rounded-md mx-5 place-items-center duration-300`}>
              Contact
            </div>
            <div className={`${contact?'mt-[-0.7rem] opacity-100':'mb-0 opacity-0'} absolute mb-0 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex justify-center duration-300`}>
              <Icon.InfoCircle className='text-xl'/>
            </div>
          </button>

        </div>

        <div className="absolute right-5 h-full w-auto flex place-items-center">
          <button className="bg-sky-200 hover:bg-white text-slate-800 dark:bg-slate-700 dark:hover:bg-sky-300 dark:text-white dark:hover:text-slate-900 w-24 px-3 py-2 rounded-md mx-1 duration-300">Sign-in</button>
          <button className="bg-sky-300 hover:bg-white text-slate-800 dark:bg-sky-400 dark:hover:bg-sky-200 dark:text-slate-900 w-24 px-3 py-2 rounded-md mx-1 duration-300">Sign-up</button>
        </div>

    </div>
  )
}
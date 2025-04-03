'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDataContext } from "@/app/_context/data";
import * as Icon from 'react-bootstrap-icons'
import {codeStringNext} from "./codeNext";
import {codeStringJs} from "./codeJs";
import {codeStringReact} from "./codeReact";

export default function Nav2() {
  const[menu, setMenu] = useState<boolean>(false)
  const { lang, setNavbar } = useDataContext();
    
      useEffect(()=> {
        if(lang === 'js'){
          setNavbar(prevState => 
            prevState.map(item => 
              item.navbar2 ? { navbar2: { code: codeStringJs } } : item
            )
          );
        }else if(lang === 'react'){
          setNavbar(prevState => 
            prevState.map(item => 
              item.navbar2 ? { navbar2: { code: codeStringReact } } : item
            )
          );
        }else{
          setNavbar(prevState => 
            prevState.map(item => 
              item.navbar2 ? { navbar2: { code: codeStringNext } } : item
            )
          );
        }
    }, [lang, setNavbar])

  return (
  <div className="w-full h-16 md:h-20 relative top-0 left-0 bg-white dark:bg-slate-900 z-50 shadow-sm">
    <div className="hidden lg:flex items-center w-full h-full mx-auto px-4">
      <Image src="/planit.png" alt="Planit Logo" width={100} height={100} className="w-12 ml-5"/>
  
      <ul className="flex ml-8 lg:ml-3 text-slate-700 dark:text-slate-400 lg:text-sm xl:text-[1vw] 2xl:text-[0.8vw]">
        <a href="#"><li className="ml-10 lg:ml-5 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300">Home</li></a>
        <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300">Products</li></a>
        <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300">Certifications</li></a>
        <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300">Customers</li></a>
        <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300">About</li></a>
      </ul>
      <div className="w-96 ml-auto h-10 mr-5 flex justify-end place-items-center gap-3">
        <div className="h-10 w-24 bg-sky-200 hover:bg-sky-400 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer rounded-md flex justify-center place-items-center duration-300 dark:text-slate-800">Sign-In</div> 
        <div className="h-10 w-24 bg-sky-300 hover:bg-sky-400 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer rounded-md flex justify-center place-items-center duration-300 dark:text-slate-800">Sign-Up</div>
        <Icon.Whatsapp className="hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 ml-5 lg:text-base xl:text-md 2xl:text-xl"/>
        <Icon.Search className="hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 ml-5 lg:text-base xl:text-md 2xl:text-xl"/>
      </div>
    </div>

    {/* Mobile */}
    <div className="absolute left-0 w-10 h-10 -translate-y-1/2 top-1/2 ml-5 flex justify-center place-items-center lg:hidden">
      <Icon.List id='list' className={`${!menu?'opacity-100':'opacity-0 pointer-events-none'} text-2xl text-slate-500 z-20 absolute duration-300`} onClick={()=>setMenu(true)}/>
      <Icon.X id='close' className={`${menu?'opacity-100':'opacity-0 pointer-events-none'} text-2xl text-slate-500 z-10 absolute duration-300`} onClick={()=>setMenu(false)}/>
    </div>
    <Image src="/planit.png" alt="Planit Logo" width={100} height={100} className="absolute right-3 -translate-y-1/2 top-1/2 w-10 h-10 lg:hidden"/>
    
    <div id="menu" className={`w-full ${menu?'max-h-96 shadow-sm':'max-h-0'} mt-14 bg-white duration-300 overflow-hidden lg:hidden`}>
      <ul className="flex flex-col justify-center items-center h-full mt-5">
        <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Home</li><hr className="w-[80vw]"/></a>
        <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Products</li><hr className="w-[80vw]"/></a>
        <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Certifications</li><hr className="w-[80vw]"/></a>
        <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Customers</li><hr className="w-[80vw]"/></a>
        <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">About</li></a>
      </ul>
    </div>
  </div>
  )
}
"use client";
import '@/app/globals.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "../../list/Hero1/codeNext";
import {codeStringJs} from "../../list/Hero1/codeJs";
import {codeStringReact} from "../../list/Hero1/codeReact";

export default function Hero1() {
    const { lang, setHero } = useDataContext();
  
    useEffect(()=> {
      if(lang === 'js'){
        setHero(prevState => 
          prevState.map(item => 
            item.hero1 ? { hero1: { code: codeStringJs } } : item
          )
        );
      }else if(lang === 'react'){
        setHero(prevState => 
          prevState.map(item => 
            item.hero1 ? { hero1: { code: codeStringReact } } : item
          )
        );
      }else{
        setHero(prevState => 
          prevState.map(item => 
            item.hero1 ? { hero1: { code: codeStringNext } } : item
          )
        );
      }
  }, [lang, setHero])

    return (
        <div className='w-[90%] 2xl:w-[65%] m-auto text-center'>
            <Image width={800} height={800} src="/planit.png" alt="logo" className='w-20 h-20 md:w-24 md:h-24 m-auto mb-3 md:mb-4' />
            <h1 className='font-bold text-3xl md:text-4xl text-slate-500 dark:text-slate-300'>Hello World! Welcome to Planit Components!</h1>
            <p className='text-lg m-auto w-full md:w-[70%] mt-2 text-slate-600 dark:text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at excepturi blanditiis dolores cum, ratione delectus numquam debitis quibusdam est quo illum esse deleniti, sed totam aliquid commodi veniam sapiente!</p>
            <div className="flex m-auto justify-center gap-5 mt-4">
                <button className='bg-[#39b3d1] text-white border-slate-200 dark:border-transparent border hover:bg-slate-500 font-bold w-44 h-auto p-2 rounded-md duration-300'>Button 1</button>
                <button className='bg-white dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-500 border hover:text-white hover:bg-slate-400 dark:hover:bg-slate-600 font-bold w-44 h-auto p-2 rounded-md duration-300'>Button 1</button>
            </div>
        </div>
    );
}
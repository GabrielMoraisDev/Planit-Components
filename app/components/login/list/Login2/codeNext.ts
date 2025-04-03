export const codeStringNext = `'use client'
import Image from 'next/image';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons'

export default function NavDefault() {
  const[menu, setMenu] = useState&lt;boolean&gt;(false)
  
  return (
  &lt;div className="w-full h-16 md:h-20 relative top-0 left-0 bg-white dark:bg-slate-900 z-50 shadow-sm"&gt;
    &lt;div className="hidden lg:flex items-center w-full h-full mx-auto px-4"&gt;
      &lt;Image src="/planit.png" alt="Planit Logo" width={100} height={100} className="w-12 ml-5"/&gt;
  
      &lt;ul className="flex ml-8 lg:ml-3 text-slate-700 dark:text-slate-400 lg:text-sm xl:text-[1vw] 2xl:text-[0.8vw]"&gt;
        &lt;a href="#"&gt;&lt;li className="ml-10 lg:ml-5 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Home&lt;/li&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Products&lt;/li&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Certifications&lt;/li&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;Customers&lt;/li&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-500 dark:hover:text-sky-400 duration-300"&gt;About&lt;/li&gt;&lt;/a&gt;
      &lt;/ul&gt;
      &lt;div className="w-96 ml-auto h-10 mr-5 flex justify-end place-items-center gap-3"&gt;
        &lt;div className="h-10 w-24 bg-sky-200 hover:bg-sky-400 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer rounded-md flex justify-center place-items-center duration-300 dark:text-slate-800"&gt;Sign-In&lt;/div&gt; 
        &lt;div className="h-10 w-24 bg-sky-300 hover:bg-sky-400 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer rounded-md flex justify-center place-items-center duration-300 dark:text-slate-800"&gt;Sign-Up&lt;/div&gt;
        &lt;Icon.Whatsapp className="hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 ml-5 lg:text-base xl:text-md 2xl:text-xl"/&gt;
        &lt;Icon.Search className="hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 ml-5 lg:text-base xl:text-md 2xl:text-xl"/&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    {/* Mobile */}
    &lt;div className="absolute left-0 w-10 h-10 -translate-y-1/2 top-1/2 ml-5 flex justify-center place-items-center lg:hidden"&gt;
      &lt;Icon.List id='list' className={\`$\{!menu?'opacity-100':'opacity-0 pointer-events-none\'} text-2xl text-slate-500 z-20 absolute duration-300\`} onClick={()=&gt;setMenu(true)}/&gt;
      &lt;Icon.X id='close' className={\`$\{menu?'opacity-100':'opacity-0 pointer-events-none'} text-2xl text-slate-500 z-10 absolute duration-300\`} onClick={()=&gt;setMenu(false)}/&gt;
    &lt;/div&gt;
    &lt;Image src="/planit.png" alt="Planit Logo" width={100} height={100} className="absolute right-3 -translate-y-1/2 top-1/2 w-10 h-10 lg:hidden"/&gt;
    
    &lt;div id="menu" className={\`w-full $\{menu?'max-h-96 shadow-sm':'max-h-0'} mt-14 bg-white duration-300 overflow-hidden lg:hidden\`}&gt;
      &lt;ul className="flex flex-col justify-center items-center h-full mt-5"&gt;
        &lt;a href="#"&gt;&lt;li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Home&lt;/li&gt;&lt;hr className="w-[80vw]"/&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Products&lt;/li&gt;&lt;hr className="w-[80vw]"/&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Certifications&lt;/li&gt;&lt;hr className="w-[80vw]"/&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;Customers&lt;/li&gt;&lt;hr className="w-[80vw]"/&gt;&lt;/a&gt;
        &lt;a href="#"&gt;&lt;li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300"&gt;About&lt;/li&gt;&lt;/a&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  )
}`
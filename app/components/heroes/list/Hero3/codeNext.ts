export const codeStringNext = `"use client";
import '@/app/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Nav3() {
    const [menu, setMenu] = useState&lt;boolean&gt;(false);
    const [search, setSearch] = useState&lt;boolean&gt;(false);
    const [searchProd, setSearchProd] = useState&lt;boolean&gt;(false);
    const [searchList, setSearchList] = useState&lt;string&gt;('');
    const [list, setList] = useState&lt;boolean&gt;(false);
        
    return (
        &lt;&gt;
        &lt;nav className={\`relative top-0 z-50 bg-white dark:bg-slate-700  h-14 lg:h-16 w-full flex justify-center place-items-center text-xl duration-300 text-slate-700 dark:text-white dark:hover:text-slate-200\`}&gt;
        &lt;Icon.Search size={22} className={\`cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute right-5 $\{menu ? 'animate-fade animate-duration-200' : ''}\`}onClick={() =&gt; {setMenu(false);setSearch(prevSearch =&gt; !prevSearch);}}/&gt;
                &lt;div className={\`w-full bg-white dark:bg-slate-600 $\{search ? 'max-h-[40rem]':'max-h-0'} absolute top-14 overflow-hidden duration-300 lg:hidden\`}&gt;
                    &lt;div className="relative w-full flex justify-center mt-4"&gt;
                    &lt;input
                        type="text"
                        className="bg-slate-200 dark:bg-slate-700 py-3 dark:text-white pl-14 w-[90%] m-auto text-black pr-3 text-base rounded-md focus:outline-none outline-none border-none"
                        placeholder="Pesquisar..."
                        value={searchList}
                        onChange={(e) =&gt; setSearchList(e.target.value)}
                        onClick={() =&gt; setSearchProd(true)}
                    /&gt;
                        &lt;span className="absolute left-10 top-1/2 transform -translate-y-1/2 md:ml-5"&gt;
                            &lt;Icon.Search size={16} className="text-gray-500" /&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div className="h-80 bg-white dark:bg-slate-600  mt-5 w-[90%] m-auto overflow-y-scroll"&gt;
                        
                    &lt;/div&gt;
                    &lt;div className="h-6"&gt;&lt;/div&gt;
                &lt;/div&gt;
            {menu ? (
                &lt;Icon.X size={30} className={\`cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute left-5 $\{menu ? 'animate-fade animate-duration-200':''}\`}  onClick={()=&gt; setMenu(false)}/&gt;
            ) : (
                &lt;Icon.List size={30} className={\`cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute left-5 $\{!menu ? 'animate-fade animate-duration-200':''}\`}  onClick={()=&gt; {setMenu(true);setSearch(false);}}/&gt;
            )}
            &lt;div className="flex justify-center items-center absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-5 lg:-translate-y-1/2 lg:-translate-x-0 lg:left-0 lg:right-auto lg:w-full"&gt;
                &lt;Link href='/' className={\`lg:absolute lg:left-3 animate-fade-left}\`}&gt;&lt;Image src='/planit.png' className='w-10 h-10' alt='Logo' width={300} height={300}/&gt;&lt;/Link&gt;

                &lt;div className="hidden lg:flex items-center lg:ml-[-16rem] lg:text-[1.3vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"&gt;
                    &lt;Link href='/' className={\`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 animate-fade-left\`}&gt;Home&lt;/Link&gt;
                    &lt;Link href='/' className={\`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 animate-fade-left\`}&gt;Products&lt;/Link&gt;
                    &lt;Link href='/' className={\`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 animate-fade-left\`}&gt;Features&lt;/Link&gt;
                    &lt;Link href='/' className={\`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 animate-fade-left\`}&gt;Heroes&lt;/Link&gt;
                    &lt;div onMouseEnter={()=&gt;setList(true)} onMouseLeave={()=&gt;setList(false)} className={\`mx-2 xl:mx-3 2xl:mx-[1.48vw] cursor-pointer text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-200 duration-300 relative animate-fade-left\`}&gt;
                        &lt;div className="flex place-items-center"&gt;
                            &lt;p className={\`text-slate-700 dark:text-white dark:hover:text-slate-200\`}&gt;Items &lt;/p&gt;
                            &lt;Icon.ChevronCompactDown size={15} className='ml-1 mt-0' /&gt; 
                        &lt;/div&gt;
                        &lt;div className={\`$\{list?'max-h-96 pt-3 p-2':'max-h-0 pt-0 p-0'} rounded-md md:w-[12vw] xl:w-[11vw] 2xl:w-45 bg-slate-100 dark:bg-slate-800  duration-300 absolute ml-[-4rem] text-center mt-0 overflow-hidden z-30\`}&gt;
                            &lt;div className='h-10 flex justify-center place-items-center'&gt;
                                &lt;Link href='/' className={\`text-slate-700 dark:text-white dark:hover:text-slate-200 hover:text-slate-500 duration-300\`}&gt;Item 1&lt;/Link&gt;&lt;br /&gt;
                            &lt;/div&gt;
                            &lt;hr className={\`border-white dark:border-slate-400\`}/&gt;
                            &lt;div className={\`h-10 flex justify-center place-items-center text-slate-700 dark:text-white dark:hover:text-slate-200 hover:text-slate-500 duration-300\`}&gt;
                                &lt;a href='#' target='_blank' rel='noopener noreferrer'&gt;Item 2&lt;/a&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;Link href='/' className={\`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-200' mx-2 xl:mx-3 2xl:mx-[1.48vw] duration-300 animate-fade-left\`}&gt;About&lt;/Link&gt;

                    &lt;div className="absolute right-5 flex justify-center place-items-center"&gt;
                        &lt;div className={\`relative ml-auto animate-fade-left right-5\`}&gt;
                            &lt;input
                                type="text"
                                className="pl-9 w-[10vw] bg-slate-200 dark:bg-slate-600 text-black dark:text-white pr-3 lg:h-7 lg:w-[10vw] xl:w-44 2xl:w-[13vw] 2xl:h-8 2xl:text-[0.8vw] text-[1vw] border-none rounded-md focus:outline-none"
                                placeholder="Pesquisar..."
                                value={searchList}
                                onChange={(e) =&gt; setSearchList(e.target.value)}
                                onClick={() =&gt; setSearchProd(true)}
                            /&gt;
                            &lt;div className={\`bg-slate-100 dark:bg-slate-800 absolute left-0 $\{searchProd ? 'h-72' : 'h-0'} ml-[-2.5rem] 2xl:ml-[-4rem] mt-2 w-[20vw] overflow-y-scroll duration-300 ease-in-out rounded-md\`} onClick={()=&gt;setSearchProd(false)}&gt;
                            
                            &lt;/div&gt;
                            &lt;span className="absolute left-3 top-1/2 transform -translate-y-1/2"&gt;
                                &lt;Icon.Search size={16} className="text-gray-500" /&gt;
                            &lt;/span&gt;
                        &lt;/div&gt;

                        &lt;a href="#" target='_blank'  rel='noopener noreferrer' className={\`2xl:w-6 lg:w-5 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer animate-fade-left\`}&gt;&lt;Icon.Youtube size={25} className={\`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-md 2xl:text-lg text-lg\`}/&gt;&lt;/a&gt;
                        &lt;a href="#" target='_blank'  rel='noopener noreferrer' className={\`2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer animate-fade-left\`}&gt;&lt;Icon.Linkedin size={20} className={\`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md\`}/&gt;&lt;/a&gt;
                        &lt;a href="#" target='_blank'  rel='noopener noreferrer' className={\`2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer animate-fade-left\`}&gt;&lt;Icon.Instagram size={20} className={\`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md\`}/&gt;&lt;/a&gt;
                        &lt;a href="#" target='_blank'  rel='noopener noreferrer' className={\`2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer animate-fade-left\`}&gt;&lt;Icon.Facebook size={20} className={\`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md\`}/&gt;&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className={\`absolute top-14 z-50 text-slate-700 dark:text-white dark:hover:text-slate-400 w-full $\{menu ? 'max-h-[35rem]' : 'max-h-0'} bg-white dark:bg-slate-600 text-base duration-500 mt-[-0.1rem] overflow-hidden lg:hidden\`}&gt;
                &lt;hr className='mt-3 mx-8 opacity-0'/&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;Home&lt;/p&gt;&lt;/Link&gt;
                &lt;hr className='mx-8 opacity-25' /&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;Products&lt;/p&gt;&lt;/Link&gt;
                &lt;hr className='mx-8 opacity-25' /&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;Features&lt;/p&gt;&lt;/Link&gt;
                &lt;hr className='mx-8 opacity-25' /&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;Heroes&lt;/p&gt;&lt;/Link&gt;
                &lt;hr className='mx-8 opacity-25' /&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;Item 1&lt;/p&gt;&lt;/Link&gt;
                &lt;hr className='mx-8 opacity-25' /&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;Item 2&lt;/p&gt;&lt;/Link&gt;
                &lt;hr className='mx-8 opacity-25' /&gt;
                &lt;Link href='/' className={\`hover:text-slate-700 dark:text-white dark:hover:text-slate-400\`}&gt;&lt;p className='text-center my-[0.83rem] duration-300'&gt;About&lt;/p&gt;&lt;/Link&gt;
                &lt;div className="h-4"&gt;&lt;/div&gt;
            &lt;/div&gt;

        &lt;/nav&gt;
        &lt;/&gt;
    );
}
  `
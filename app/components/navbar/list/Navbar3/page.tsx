"use client";
import '@/app/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "./codeNext";
import {codeStringJs} from "./codeJs";
import {codeStringReact} from "./codeReact";

export default function Nav3() {
    const [menu, setMenu] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [searchProd, setSearchProd] = useState<boolean>(false);
    const [searchList, setSearchList] = useState<string>('');
    const [list, setList] = useState<boolean>(false);
      const { lang, setNavbar } = useDataContext();
        
          useEffect(()=> {
            if(lang === 'js'){
              setNavbar(prevState => 
                prevState.map(item => 
                  item.navbar3 ? { navbar3: { code: codeStringJs } } : item
                )
              );
            }else if(lang === 'react'){
              setNavbar(prevState => 
                prevState.map(item => 
                  item.navbar3 ? { navbar3: { code: codeStringReact } } : item
                )
              );
            }else{
              setNavbar(prevState => 
                prevState.map(item => 
                  item.navbar3 ? { navbar3: { code: codeStringNext } } : item
                )
              );
            }
        }, [lang, setNavbar])
    

    return (
        <>
        <nav className={`relative top-0 z-50 bg-white dark:bg-slate-700  h-14 lg:h-16 w-full flex justify-center place-items-center text-xl duration-300 text-slate-700 dark:text-white dark:hover:text-slate-200`}>
        <Icon.Search size={22} className={`cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute right-5 ${menu ? ' animate-duration-200' : ''}`}onClick={() => {setMenu(false);setSearch(prevSearch => !prevSearch);}}/>
                <div className={`w-full bg-white dark:bg-slate-600  ${search ? 'max-h-[40rem]':'max-h-0'} absolute top-14 overflow-hidden duration-300 lg:hidden`}>
                    <div className="relative w-full flex justify-center mt-4">
                    <input
                        type="text"
                        className="bg-slate-200 dark:bg-slate-700 py-3 dark:text-white pl-14 w-[90%] m-auto text-black pr-3 text-base rounded-md focus:outline-none outline-none border-none"
                        placeholder="Pesquisar..."
                        value={searchList}
                        onChange={(e) => setSearchList(e.target.value)}
                        onClick={() => setSearchProd(true)}
                    />
                        <span className="absolute left-10 top-1/2 transform -translate-y-1/2 md:ml-5">
                            <Icon.Search size={16} className="text-gray-500" />
                        </span>
                    </div>
                    <div className="h-80 bg-white dark:bg-slate-600  mt-5 w-[90%] m-auto overflow-y-scroll">
                        
                    </div>
                    <div className="h-6"></div>
                </div>
            {menu ? (
                <Icon.X size={30} className={`cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute left-5 ${menu ? ' animate-duration-200':''}`}  onClick={()=> setMenu(false)}/>
            ) : (
                <Icon.List size={30} className={`cursor-pointer lg:hidden text-slate-700 dark:text-white dark:hover:text-slate-200 absolute left-5 ${!menu ? ' animate-duration-200':''}`}  onClick={()=> {setMenu(true);setSearch(false);}}/>
            )}
            <div className="flex justify-center items-center absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-5 lg:-translate-y-1/2 lg:-translate-x-0 lg:left-0 lg:right-auto lg:w-full">
                <Link href='/' className={`lg:absolute lg:left-3 }`}><Image src='/planit.png' className='w-10 h-10' alt='Logo' width={300} height={300}/></Link>

                <div className="hidden lg:flex items-center lg:ml-[-16rem] lg:text-[1.3vw] xl:text-[0.9vw] 2xl:text-[0.8vw]">
                    <Link href='/' className={`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 `}>Home</Link>
                    <Link href='/' className={`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 `}>Products</Link>
                    <Link href='/' className={`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 `}>Features</Link>
                    <Link href='/' className={`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-400 mx-4 xl:mx-6 2xl:mx-[1.48vw] duration-300 `}>Heroes</Link>
                    <div onMouseEnter={()=>setList(true)} onMouseLeave={()=>setList(false)} className={`mx-2 xl:mx-3 2xl:mx-[1.48vw] cursor-pointer text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-200 duration-300 relative `}>
                        <div className="flex place-items-center">
                            <p className={`text-slate-700 dark:text-white dark:hover:text-slate-200`}>Items </p>
                            <Icon.ChevronCompactDown size={15} className='ml-1 mt-0' /> 
                        </div>
                        <div className={`${list?'max-h-96 pt-3 p-2':'max-h-0 pt-0 p-0'} rounded-md md:w-[12vw] xl:w-[11vw] 2xl:w-45 bg-slate-100 dark:bg-slate-800  duration-300 absolute ml-[-4rem] text-center mt-0 overflow-hidden z-30`}>
                            <div className='h-10 flex justify-center place-items-center'>
                                <Link href='/' className={`text-slate-700 dark:text-white dark:hover:text-slate-200 hover:text-slate-500 duration-300`}>Item 1</Link><br />
                            </div>
                            <hr className={`border-white dark:border-slate-400`}/>
                            <div className={`h-10 flex justify-center place-items-center text-slate-700 dark:text-white dark:hover:text-slate-200 hover:text-slate-500 duration-300`}>
                                <a href='#' target='_blank' rel='noopener noreferrer'>Item 2</a>
                            </div>
                        </div>
                    </div>
                    <Link href='/' className={`text-slate-900 hover:text-slate-400 dark:text-white dark:hover:text-slate-200' mx-2 xl:mx-3 2xl:mx-[1.48vw] duration-300 `}>About</Link>

                    <div className="absolute right-5 flex justify-center place-items-center">
                        <div className={`relative ml-auto  right-5`}>
                            <input
                                type="text"
                                className="pl-9 w-[10vw] bg-slate-200 dark:bg-slate-600 text-black dark:text-white pr-3 lg:h-7 lg:w-[10vw] xl:w-44 2xl:w-[13vw] 2xl:h-8 2xl:text-[0.8vw] text-[1vw] border-none rounded-md focus:outline-none"
                                placeholder="Pesquisar..."
                                value={searchList}
                                onChange={(e) => setSearchList(e.target.value)}
                                onClick={() => setSearchProd(true)}
                            />
                            <div className={`bg-slate-100 dark:bg-slate-800 absolute left-0 ${searchProd ? 'h-72' : 'h-0'} ml-[-2.5rem] 2xl:ml-[-4rem] mt-2 w-[20vw] overflow-y-scroll duration-300 ease-in-out rounded-md`} onClick={()=>setSearchProd(false)}>
                            
                            </div>
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <Icon.Search size={16} className="text-gray-500" />
                            </span>
                        </div>

                        <a href="#" target='_blank'  rel='noopener noreferrer' className={`2xl:w-6 lg:w-5 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer `}><Icon.Youtube size={25} className={`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-md 2xl:text-lg text-lg`}/></a>
                        <a href="#" target='_blank'  rel='noopener noreferrer' className={`2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer `}><Icon.Linkedin size={20} className={`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md`}/></a>
                        <a href="#" target='_blank'  rel='noopener noreferrer' className={`2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer `}><Icon.Instagram size={20} className={`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md`}/></a>
                        <a href="#" target='_blank'  rel='noopener noreferrer' className={`2xl:w-5 lg:w-4 mx-2 2xl:mx-3 flex justify-center place-items-center cursor-pointer `}><Icon.Facebook size={20} className={`text-slate-700 dark:text-white dark:hover:text-slate-400 hover:text-slate-400 duration-300 xl:text-sm 2xl:text-md text-md`}/></a>
                    </div>
                </div>
            </div>

            <div className={`absolute top-14 z-50 text-slate-700 dark:text-white dark:hover:text-slate-400 w-full ${menu ? 'max-h-[35rem]' : 'max-h-0'} bg-white dark:bg-slate-600 text-base duration-500 mt-[-0.1rem] overflow-hidden lg:hidden`}>
                <hr className='mt-3 mx-8 opacity-0'/>
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>Home</p></Link>
                <hr className='mx-8 opacity-25' />
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>Products</p></Link>
                <hr className='mx-8 opacity-25' />
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>Features</p></Link>
                <hr className='mx-8 opacity-25' />
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>Heroes</p></Link>
                <hr className='mx-8 opacity-25' />
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>Item 1</p></Link>
                <hr className='mx-8 opacity-25' />
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>Item 2</p></Link>
                <hr className='mx-8 opacity-25' />
                <Link href='/' className={`hover:text-slate-700 dark:text-white dark:hover:text-slate-400`}><p className='text-center my-[0.83rem] duration-300'>About</p></Link>
                <div className="h-4"></div>
            </div>

        </nav>
        </>
    );
}
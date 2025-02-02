'use client'
import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Input1() {
  const[searchActive, setSearchActive] = useState<boolean>(false);
  const[searchValue, setSearchValue] = useState<string>('');

  useEffect(()=>{
    if(searchValue.length > 0){
      setSearchActive(true);
    }else{
      setSearchActive(false);
    }
  },[searchActive, searchValue]);

  return (
    <div className="w-60 h-11 relative border-slate-300 dark:border-transparent dark:border-none border dark:bg-slate-800 bg-slate-50 dark:text-white text-slate-800 duration-300 flex justify-center rounded-md place-items-center overflow-hidden">
        
        <Icon.Search className={`absolute left-0 w-11 p-3 h-full duration-300 ${searchActive ? 'opacity-0 rotate-[50deg]' : 'opacity-100 rotate-[0deg]'}`}/>
        <Icon.XLg className={`absolute left-0 w-11 p-3 h-full duration-300 ${searchActive ? 'opacity-100 rotate-[0deg] cursor-pointer' : 'opacity-0 rotate-[-50deg]'}`} onClick={()=>setSearchValue('')}/>
        <div className="w-14 dark:bg-slate-700 bg-slate-200 h-full"></div>

        <input type="text" className='w-full bg-transparent p-4 h-full outline-none' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

    </div>
  )
}
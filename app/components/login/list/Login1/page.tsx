'use client'
import { useEffect } from 'react';
import { useDataContext } from "@/app/_context/data";
import * as Icon from 'react-bootstrap-icons';
import {codeStringNext} from "./codeNext";
import {codeStringJs} from "./codeJs";
import {codeStringReact} from "./codeReact";

export default function Login1() {
  const { lang, setLogin } = useDataContext();
    
      useEffect(()=> {
        if(lang === 'js'){
          setLogin(prevState => 
            prevState.map(item => 
              item.login1 ? { login1: { code: codeStringJs } } : item
            )
          );
        }else if(lang === 'react'){
          setLogin(prevState => 
            prevState.map(item => 
              item.login1 ? { login1: { code: codeStringReact } } : item
            )
          );
        }else{
          setLogin(prevState => 
            prevState.map(item => 
              item.login1 ? { login1: { code: codeStringNext } } : item
            )
          );
        }
    }, [lang, setLogin])

  return (
    <div className='w-full h-auto py-10 bg-slate-300 dark:bg-slate-900 flex justify-center place-items-center duration-300'>
        <div className="w-72 h-auto bg-slate-200 dark:bg-slate-800 pt-2 pb-6 rounded-md m-auto place-items-center shadow-lg duration-300">
            <Icon.PersonFill className='w-24 h-24 m-auto text-slate-400 dark:text-slate-500 pt-4 pb-1'></Icon.PersonFill>
            <h1 className='text-xl text-slate-600 dark:text-slate-400 mt-0'>Sign-in</h1>
            <div className="h-4"></div>
            <div className="inline m-auto">
                <label htmlFor="user" className='text-slate-600 dark:text-slate-300'>User</label><br />
                <input id='user' type="text" placeholder='Type your User...' className='text-slate-400 w-[16rem] mt-1 px-4 py-1 text-left m-auto dark:bg-slate-800 focus:dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700 outline-none focus:border-black dark:focus:border-slate-300 focus:text-black dark:focus:text-white border rounded-md my-2 ring-0 duration-300'/>
            </div>
  
            <br />
            <div className="h-3"></div>
  
            <div className="inline m-auto mt-7">
                <label htmlFor="password" className='text-slate-600 dark:text-slate-300'>Password</label><br />
                <input id='password' type="password" placeholder='Type your Password...' className='text-slate-400 w-[16rem] mt-1 px-4 py-1 text-left m-auto dark:bg-slate-800 focus:dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700 outline-none focus:border-black dark:focus:border-slate-300 focus:text-black dark:focus:text-white border rounded-md my-2 ring-0 duration-300'/>
            </div>
  
            <br />
            <div className="h-5"></div>
  
            <button className='w-[16rem] h-auto py-2 bg-slate-300 text-slate-400 hover:text-white hover:bg-slate-400 dark:bg-slate-600 dark:text-slate-400 dark:hover:text-slate-900 dark:hover:bg-white rounded-md duration-300'>Login</button>
        </div>
    </div>
  );
}
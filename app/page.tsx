'use client'
//import Test from './test/page'
import Image from 'next/image'
import * as Icon from 'react-bootstrap-icons'
import Nav from '@/app/_components/Home/Nav'
import Menu from '@/app/_components/Home/Menu'
import { useDataContext } from "@/app/_context/data";
import { toast } from 'react-toastify';
import { useState } from 'react';
export default function App(){
  const { menuOpen } = useDataContext();
  const [copyYarnHover, setCopyYarnHover] = useState<boolean>(false)
  const [copyNpmHover, setCopyNpmHover] = useState<boolean>(false)

  function copyToClipboard(text:string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Texto copiado para a área de transferência!");
    }).catch(err => {
      console.error("Erro ao copiar texto: ", err);
    });
  }  

  function copyYarn(cod:string){
    toast.info(`Yarn copied!`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
  copyToClipboard(cod);
  }

  function copyNpm(cod:string){
    toast.info(`Npm copied!`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
  copyToClipboard(cod);
  }

  return(
    <>
      <Nav />
      <Menu />
      
      <div className={`h-[43rem] flex justify-center place-items-center mt-48 md:mt-28 w-[95%] sm:w-[85%] xl:w-[75%] m-auto duration-300 ${menuOpen ? 'xl:mr-[3.5%] 2xl:mr-[5%] lg:float-end':' mt-28'}`}>
        <div className="inline">
        <div className='w-[90%] 2xl:w-[65%] m-auto text-center'>
            <Image width={800} height={800} src="/planit.png" alt="logo" className='w-20 h-20 md:w-24 md:h-24 m-auto mb-3 md:mb-4' />
            <h1 className='font-bold text-3xl md:text-4xl text-slate-500 dark:text-slate-300'>Hello World! Welcome to Planit Components 1.0!</h1>
            <p className='text-center mt-4 w-[85%] m-auto'>{`Welcome to the world of Planit! Here, you'll find the right components for every occasion. We offer a variety of`} <label className='text-sky-400 dark:text-sky-300'>ready-to-use components</label> that are <label className='text-sky-400 dark:text-sky-300'>100% customizable</label>{`, just copy and use them however you like! We also provide a range of`} <label className='text-sky-400 dark:text-sky-300'>ready-made templates</label>{` for your project.`}</p>
        </div>
        <p className='text-center mt-2'>Ready to get started?</p>

        <p className='text-center mt-7 w-[80%] m-auto md:w-full'>If using <label className='text-sky-400 dark:text-sky-300'>Next.JS</label> or <label className='text-sky-400 dark:text-sky-300'>React.JS</label>, install the optional dependencies below if you plan to use Bootstrap icons.</p>
        <div className="md:flex w-[55%] place-items-center justify-center mt-10 m-auto gap-5">
        <div className="my-5 md:my-0 md:bg-slate-200 bg-transparent md:dark:bg-slate-800 w-auto px-4 text-nowrap py-3 m-auto flex justify-center place-items-center rounded-md relative cursor-pointer md:hover:bg-slate-100 md:dark:hover:bg-slate-700 duration-300" onMouseEnter={()=>setCopyNpmHover(true)} onMouseLeave={()=>setCopyNpmHover(false)} onClick={()=>copyNpm('npm install react-bootstrap-icons')}>
          <div className={`absolute top-[-1.5rem] right-[-2rem] md:top-[-1rem] md:right-[-1rem] rounded-full ${copyNpmHover ? 'text-slate-800 bg-sky-400' : 'text-sky-700 dark:text-sky-300 bg-slate-300 dark:bg-slate-700'} p-3 cursor-pointer duration-300`}>
            <Icon.Clipboard className='w-3 h-3 cursor-pointer'/>
          </div>
          <p className='text-yellow-500 dark:text-yellow-300 mx-1 cursor-pointer'>npm</p>
          <p className='text-sky-500 dark:text-sky-400 mx-1 cursor-pointer'>install</p>
          <p className='text-purple-500 dark:text-purple-300 mx-1 cursor-pointer'>react-bootstrap-icons</p>
        </div>
        <label className='text-sky-300'>Or</label>
        <div className="my-5 md:my-0 md:bg-slate-200 bg-transparent md:dark:bg-slate-800 w-auto px-4 text-nowrap py-3 m-auto flex justify-center place-items-center rounded-md relative cursor-pointer md:hover:bg-slate-100 md:dark:hover:bg-slate-700 duration-300" onMouseEnter={()=>setCopyYarnHover(true)} onMouseLeave={()=>setCopyYarnHover(false)} onClick={()=>copyYarn('yarn install react-bootstrap-icons')}>
          <div className={`absolute top-[-1.5rem] right-[-2rem] md:top-[-1rem] md:right-[-1rem] rounded-full ${copyYarnHover ? 'text-slate-800 bg-sky-400' : 'text-sky-700 dark:text-sky-300 bg-slate-300 dark:bg-slate-700'} p-3 cursor-pointer duration-300`}>
            <Icon.Clipboard className='w-3 h-3 cursor-pointer'/>
          </div>
          <p className='text-yellow-500 dark:text-yellow-300 mx-1 cursor-pointer'>yarn</p>
          <p className='text-sky-500 dark:text-sky-400 mx-1 cursor-pointer'>install</p>
          <p className='text-purple-500 dark:text-purple-300 mx-1 cursor-pointer'>react-bootstrap-icons</p>
        </div>
        </div>
          <div className="w-auto h-auto m-auto mt-10 text-center">
            <p className='my-3'>{`If it's not integrated into your project, you'll need to integrate`}<label className="text-sky-300"> Tailwind CSS. </label> </p>
            <div className="h-3"></div>
            <a href='https://tailwindcss.com/docs/installation/tailwind-cli' target='_blank' rel="noopener noreferrer" className='bg-slate-300 dark:bg-slate-700 hover:bg-sky-400 px-3 py-1 my-3 rounded-md text-slate-800 dark:text-slate-100 hover:text-slate-800 font-bold duration-300'>Click here </a>
            <p className='mt-2'>To read the Tailwind documentation.</p>
          </div>
          </div>
      </div>
    </>
  )
}
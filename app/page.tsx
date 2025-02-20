'use client'
//import Test from './test/page'
import Image from 'next/image'
import * as Icon from 'react-bootstrap-icons'
import Nav from '@/app/_components/Home/Nav'
import Menu from '@/app/_components/Home/Menu'
import { useDataContext } from "@/app/_context/data";
import { ToastContainer, toast } from 'react-toastify';
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
    toast.info(`Código Yarn copiado!`, {
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
    toast.info(`Código Npm copiado!`, {
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
      <ToastContainer />
      <Nav />
      <Menu />
      {/* <Test /> */}
      <div className={`h-96 mt-20 w-[95%] sm:w-[85%] xl:w-[75%] m-auto duration-300 ${menuOpen ? 'xl:mr-[3.5%] 2xl:mr-[5%] lg:float-end':' mt-28'}`}>
      {/* <Image src='/planit.png' width={200} height={200} alt='' className='text-center m-auto'></Image> */}
        <h1 className='text-4xl text-center font-bold font-script text-sky-400 mt-9'>Planit Components 1.0</h1>
        <Image src='/planit.png' width={150} height={150} alt='' className='text-center m-auto mt-3'></Image>
        <p className='text-center mt-4 w-[55%] m-auto'>{`Welcome to the world of Planit! Here, you'll find the right components for every occasion. We offer a variety of`} <label className='text-sky-300'>ready-to-use components</label> that are <label className='text-sky-300'>100% customizable</label>{`, just copy and use them however you like! We also provide a range of`} <label className='text-sky-300'>ready-made templates</label>{` for your project.`}</p>
        <p className='text-center mt-2'>Ready to get started?</p>

        <p className='text-center mt-7'>If using <label className='text-sky-300'>Next.JS</label> or <label className='text-sky-300'>React.JS</label>, install the dependencies below</p>
        <div className="flex w-[55%] place-items-center justify-center mt-10 m-auto">
        <div className="bg-slate-800 w-72 py-3 m-auto flex justify-center place-items-center rounded-md relative cursor-pointer hover:bg-slate-700 duration-300" onMouseEnter={()=>setCopyNpmHover(true)} onMouseLeave={()=>setCopyNpmHover(false)} onClick={()=>copyNpm('npm install react-bootstrap-icons')}>
          <div className={`absolute top-[-1rem] right-[-1rem] rounded-full ${copyNpmHover ? 'text-slate-800 bg-sky-400' : 'text-sky-300 bg-slate-700'} p-3 cursor-pointer duration-300`}>
            <Icon.Clipboard className='w-3 h-3 cursor-pointer'/>
          </div>
          <label className='text-yellow-300 cursor-pointer'>npm</label>
          <div className="w-2 cursor-pointer"></div>
          <label className='text-sky-400 cursor-pointer'>install</label>
          <div className="w-2 cursor-pointer"></div>
          <label className='text-purple-300 cursor-pointer'>react-bootstrap-icons</label>
        </div>
        <label className='text-sky-300'>Or</label>
        <div className="bg-slate-800 w-72 py-3 m-auto flex justify-center place-items-center rounded-md relative cursor-pointer hover:bg-slate-700 duration-300" onMouseEnter={()=>setCopyYarnHover(true)} onMouseLeave={()=>setCopyYarnHover(false)} onClick={()=>copyYarn('yarn install react-bootstrap-icons')}>
          <div className={`absolute top-[-1rem] right-[-1rem] rounded-full ${copyYarnHover ? 'text-slate-800 bg-sky-400' : 'text-sky-300 bg-slate-700'} p-3 cursor-pointer duration-300`}>
            <Icon.Clipboard className='w-3 h-3 cursor-pointer'/>
          </div>
          <label className='text-yellow-300 cursor-pointer'>yarn</label>
          <div className="w-2 cursor-pointer"></div>
          <label className='text-sky-400 cursor-pointer'>install</label>
          <div className="w-2 cursor-pointer"></div>
          <label className='text-purple-300 cursor-pointer'>react-bootstrap-icons</label>
        </div>
        </div>
          <div className="w-auto h-auto m-auto mt-10 text-center">
            <p className='my-3'>{`If it's not integrated into your project, you'll need to integrate`}<label className="text-sky-300"> Tailwind CSS. </label> </p>
            <a href='https://tailwindcss.com/docs/installation/tailwind-cli' target='_blank' rel="noopener noreferrer" className='bg-slate-700 hover:bg-sky-400 px-3 py-1 my-3 rounded-md text-slate-100 hover:text-slate-800 font-bold duration-300'>Click here </a>
            <p className='mt-2'>To read the documentation.</p>
          </div>
      </div>
    </>
  )
}
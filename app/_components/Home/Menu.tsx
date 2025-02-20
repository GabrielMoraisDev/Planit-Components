'use client'
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import { useDataContext } from "../../_context/data";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";

export default function Menu() {
  const [componentsSection, setComponentsSection] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const { setMenuOpen } = useDataContext();
  const pathname = usePathname();

  function handleSoon(){
    toast('Coming soon!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  }

  return (
    <>
    <ToastContainer/>
      <div className="fixed w-10 h-10 z-50 left-5 top-3 justify-center place-items-center flex" onClick={() => { setActiveMenu((prev) => !prev); setMenuOpen(!activeMenu) }}>
        {!activeMenu ? <Icon.List className="w-7 h-7 duration-300" width={35} /> : <Icon.X className="w-7 h-7 duration-300" width={35} />}
      </div>
      <main className={`fixed top-0 left-0 ${activeMenu ? 'w-60 px-10' : 'w-0 px-0'} duration-300 h-full bg-slate-900 z-40 pt-24 overflow-hidden`}>
        <Link href='/'>
          <div className={`text-nowrap cursor-pointer h-8 flex place-items-center duration-300 ${pathname === '/' ? 'text-sky-400 pl-2' : 'text-slate-400 hover:pl-2 hover:text-white '}`}>
            Get Started <Icon.Fire className="ml-1 mb-1" />
          </div>
        </Link>
        <hr className="my-5 border-slate-400" />
        <div className={`cursor-default h-8 flex place-items-center duration-300 ${componentsSection ? 'text-sky-300' : 'text-slate-400'}`}
          onMouseEnter={() => setComponentsSection(true)} onMouseLeave={() => setComponentsSection(false)}>
          Components
        </div>
        <div className={`${componentsSection ? 'max-h-72' : 'max-h-72'} duration-300 overflow-hidden pl-3`}
          onMouseEnter={() => setComponentsSection(true)} onMouseLeave={() => setComponentsSection(false)}>
          <Link href="/components/navbar"><div className={`cursor-pointer ${pathname === '/components/navbar' ? 'text-sky-400 pl-2' : 'text-slate-400 hover:pl-2 hover:text-white'} duration-300 py-2`}>Navbar</div></Link>
          <Link href="/components/card"><div className={`cursor-pointer ${pathname === '/components/card' ? 'text-sky-400 pl-2' : 'text-slate-400 hover:pl-2 hover:text-white'} duration-300 py-2`}>Card</div></Link>
          <Link href="/components/input"><div className={`cursor-pointer ${pathname === '/components/input' ? 'text-sky-400 pl-2' : 'text-slate-400 hover:pl-2 hover:text-white'} duration-300 py-2`}>Input</div></Link>
          <Link href="/components/select"><div className={`cursor-pointer ${pathname === '/components/select' ? 'text-sky-400 pl-2' : 'text-slate-400 hover:pl-2 hover:text-white'} duration-300 py-2`}>Select</div></Link>
          <Link href="/components/carousel"><div className={`cursor-pointer ${pathname === '/components/carousel' ? 'text-sky-400 pl-2' : 'text-slate-400 hover:pl-2 hover:text-white'} duration-300 py-2`}>Carousel</div></Link>
        </div>
        <hr className="my-5 border-slate-400" />
        <div className={`cursor-default h-8 flex place-items-center duration-300 overflow-hidden text-slate-600`}>
          Examples
        </div>
        <div className={`max-h-72 duration-300 overflow-hidden pl-3`}>
          <div onClick={handleSoon} className="cursor-pointer text-slate-600 duration-300 py-2">Blog</div>
          <div onClick={handleSoon} className="cursor-pointer text-slate-600 duration-300 py-2">Catalog</div>
          <div onClick={handleSoon} className="cursor-pointer text-slate-600 duration-300 py-2">Portfolio</div>
          <div onClick={handleSoon} className="cursor-pointer text-slate-600 duration-300 py-2">E-Commerce</div>
          <div onClick={handleSoon} className="cursor-pointer text-slate-600 duration-300 py-2">Landing</div>
        </div>
      </main>
    </>
  );
}
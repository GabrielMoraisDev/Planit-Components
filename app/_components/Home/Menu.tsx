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
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  }

  return (
    <>
    <ToastContainer/>
      <div className="fixed w-10 h-10 left-5 top-3 justify-center place-items-center flex z-[101]" onClick={() => { setActiveMenu((prev) => !prev); setMenuOpen(!activeMenu) }}>
        {!activeMenu ? <Icon.List className="w-7 h-7 duration-300" width={35} /> : <Icon.X className="w-7 h-7 duration-300" width={35} />}
      </div>
      <main className={`fixed top-0 left-0 ${activeMenu ? 'w-60 px-10' : 'w-0 px-0'} duration-300 h-full bg-white dark:bg-slate-900 pt-24 overflow-hidden z-[100]`}>
        <Link href='/'>
          <div className={`text-nowrap cursor-pointer h-8 flex place-items-center duration-300 ${pathname === '/' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-sky-500 dark:hover:text-white '}`}>
            Get Started <Icon.Fire className="ml-1 mb-1" />
          </div>
        </Link>
        <Link href='/news'>
          <div className={`text-nowrap cursor-pointer h-8 flex place-items-center duration-300 ${pathname === '/news' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-sky-500 dark:hover:text-white '}`}>
            News <Icon.Newspaper className="ml-1 mb-1" />
          </div>
        </Link>
        <hr className="my-5 border-slate-400" />
        <div className={`cursor-default h-8 flex place-items-center duration-300 ${componentsSection ? 'text-sky-700 dark:text-sky-300' : 'text-slate-700 dark:text-slate-400'}`}
          onMouseEnter={() => setComponentsSection(true)} onMouseLeave={() => setComponentsSection(false)}>
          Components
        </div>
        <div className={`${componentsSection ? 'max-h-72' : 'max-h-72'} duration-300 overflow-hidden pl-3`}
          onMouseEnter={() => setComponentsSection(true)} onMouseLeave={() => setComponentsSection(false)}>
          <Link href="/components/navbar"><div className={`cursor-pointer ${pathname === '/components/navbar' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Navbar</div></Link>
          <Link href="/components/card"><div className={`cursor-pointer ${pathname === '/components/card' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Card</div></Link>
          <Link href="/components/carousel"><div className={`cursor-pointer ${pathname === '/components/carousel' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Carousel</div></Link>
          <Link href="/components/login"><div className={`cursor-pointer ${pathname === '/components/login' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Login</div></Link>
          <Link href="/components/heroes"><div className={`cursor-pointer ${pathname === '/components/heroes' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Heroes</div></Link>
        </div>
        <hr className="my-5 border-slate-400" />
        <div className={`cursor-default h-8 flex place-items-center duration-300 overflow-hidden text-slate-400 dark:text-slate-600`}>
          Examples
        </div>
        <div className={`max-h-72 duration-300 overflow-hidden pl-3`}>
          <Link href="/pages/blog"><div className={`cursor-pointer ${pathname === '/pages/blog' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Blog</div></Link>
          <Link href="/pages/landing"><div className={`cursor-pointer ${pathname === '/pages/landing' ? 'text-sky-500 dark:text-sky-400 pl-2' : 'text-slate-800 dark:text-slate-400 hover:pl-2 hover:text-slate-600 dark:hover:text-white'} duration-300 py-2`}>Landing</div></Link>
          <div onClick={handleSoon} className="cursor-pointer dark:text-slate-600 text-slate-300 duration-300 py-2">Catalog</div>
          <div onClick={handleSoon} className="cursor-pointer dark:text-slate-600 text-slate-300 duration-300 py-2">Portfolio</div>
          <div onClick={handleSoon} className="cursor-pointer dark:text-slate-600 text-slate-300 duration-300 py-2">E-Commerce</div>
        </div>
      </main>
    </>
  );
}
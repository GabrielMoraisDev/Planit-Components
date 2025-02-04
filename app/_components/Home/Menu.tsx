'use client'
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons'
import { useState } from "react";
export default function Menu() {
    const[componentsSection, setComponentsSection] = useState(false)
    const[examplesSection, setExamplesSection] = useState(false)

  return (
    <main className="fixed top-0 left-0 w-60 h-full bg-slate-900 z-50 pt-24 px-10">
        <Link href='/'>
            <div className="cursor-pointer h-8 flex place-items-center hover:pl-2 hover:text-white text-slate-400 duration-300">
                Get Started <Icon.Fire className="ml-1 mb-1"/>
            </div>
        </Link>
        <hr className="my-5 border-slate-400"/>
        <div className={`cursor-default h-8 flex place-items-center duration-300 ${componentsSection?'text-sky-300':'text-slate-400'}`} 
            onMouseEnter={()=>setComponentsSection(true)} onMouseLeave={()=>setComponentsSection(false)}>
            Components
        </div>
        <div className={`${componentsSection?'max-h-72':'max-h-72'} duration-300 overflow-hidden pl-3`}
        onMouseEnter={()=>setComponentsSection(true)} onMouseLeave={()=>setComponentsSection(false)}>
            <Link href="/components/navbar"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Navbar</div></Link>
            <Link href="/components/card"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Card</div></Link>
            <Link href="/components/input"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Input</div></Link>
            <Link href="/components/select"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Select</div></Link>
            <Link href="/components/carousel"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Carousel</div></Link>
        </div>
        <hr className="my-5 border-slate-400"/>
        <div className={`cursor-default h-8 flex place-items-center duration-300 overflow-hidden ${examplesSection?'text-sky-300':'text-slate-400'}`} 
            onMouseEnter={()=>setExamplesSection(true)} onMouseLeave={()=>setExamplesSection(false)}>
            Examples
        </div>
        <div className={`${examplesSection?'max-h-72':'max-h-72'} duration-300 overflow-hidden pl-3`}
        onMouseEnter={()=>setExamplesSection(true)} onMouseLeave={()=>setExamplesSection(false)}>
            <Link href="/examples/blog"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Blog</div></Link>
            <Link href="/examples/catalog"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Catalog</div></Link>
            <Link href="/examples/portfolio"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Portfolio</div></Link>
            <Link href="/examples/e_commerce"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">E-Commerce</div></Link>
            <Link href="/examples/landing"><div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2">Landing</div></Link>
        </div>

    </main>
  );
}

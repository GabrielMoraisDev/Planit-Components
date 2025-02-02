'use client'
import Link from "next/link";
import { useState } from "react";
export default function Menu() {
    const[componentsSection, setComponentsSection] = useState(false)
    const[examplesSection, setExamplesSection] = useState(false)

  return (
    <main className="fixed top-0 left-0 w-60 h-full bg-slate-900 z-50 pt-24 px-10">
        <div className="cursor-pointer h-8 flex place-items-center hover:pl-2 duration-300"><Link href='/'>Get Started</Link></div>

        <div className={`cursor-pointer h-8 flex place-items-center duration-300 ${componentsSection?'text-sky-300':'text-slate-400'}`} 
            onMouseEnter={()=>setComponentsSection(true)} onMouseLeave={()=>setComponentsSection(false)}>
            Components
        </div>
        <div className={`${componentsSection?'max-h-72':'max-h-0'} bg-slate-800 duration-300 overflow-hidden pl-3`}
        onMouseEnter={()=>setComponentsSection(true)} onMouseLeave={()=>setComponentsSection(false)}>
            <div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2"><Link href="/components/navbar">Navbar</Link></div>
            <div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2"><Link href="/components/card">Card</Link></div>
            <div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2"><Link href="/components/input">Input</Link></div>
            <div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2"><Link href="/components/select">Select</Link></div>
            <div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2"><Link href="/components/carousel">Carousel</Link></div>
        </div>
        
        <div className={`cursor-pointer h-8 flex place-items-center duration-300 overflow-hidden ${examplesSection?'text-sky-300':'text-slate-400'}`} 
            onMouseEnter={()=>setExamplesSection(true)} onMouseLeave={()=>setExamplesSection(false)}>
            Examples
        </div>
        <div className={`${examplesSection?'max-h-72':'max-h-0'} bg-slate-800 duration-300 overflow-hidden pl-3`}
        onMouseEnter={()=>setExamplesSection(true)} onMouseLeave={()=>setExamplesSection(false)}>
            <div className="cursor-pointer hover:pl-2 duration-300 py-2"><Link href="/components/navbar">Navbar</Link></div>
            <div className="cursor-pointer hover:pl-2 duration-300 py-2"><Link href="/components/input">Input</Link></div>
            <div className="cursor-pointer hover:pl-2 duration-300 py-2"><Link href="/components/select">Select</Link></div>
            <div className="cursor-pointer hover:pl-2 duration-300 py-2"><Link href="/components/carousel">Carousel</Link></div>
            <div className="cursor-pointer hover:pl-2 hover:text-white text-slate-400 duration-300 py-2"><Link href="/components/carousel">Carousel</Link></div>
        </div>

    </main>
  );
}

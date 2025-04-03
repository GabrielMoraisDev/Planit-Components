"use client";

import { useDataContext } from "../../_context/data";
import ConsoleCopy from "../../_components/copy";
import Hero1 from "./list/Hero1/page";
import Nav from "../../_components/Home/Nav";
import Menu from "../../_components/Home/Menu";

export default function CarouselExamples() {
  const { hero, menuOpen } = useDataContext();

  
  return (
    <div className={`${menuOpen?'md:w-[70%] lg:w-[80%] 2xl:w-[85%] w-[100%]':'w-[100%]'} ml-auto duration-300`}>
      <Nav />
      <Menu />
      <div className="h-16"></div>
      <div className='w-[90%] m-auto duration-300'>
        <div className="h-8"></div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 px-5 pt-5 pb-2 rounded-lg m-auto">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Hero Default</h1>
          </div>
          <Hero1 />
          <div className="h-4"></div>
          <ConsoleCopy codeString={hero.find(item => item.hero1)?.hero1.code || "nop"} />
        </div>
        <div className="h-96 text-center mt-3">More components comming soon!</div>
      </div>
    </div>
  );
}
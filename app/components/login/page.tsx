"use client";

import { useDataContext } from "../../_context/data";
import ConsoleCopy from "../../_components/copy";
import Login1 from "./list/Login1/page";
// import Navbar2 from "./list/Login2/page";
// import Navbar3 from "./list/Navbar3/page";
// import Navbar4 from "./list/Navbar4/page";
import Nav from "../../_components/Home/Nav";
import Menu from "../../_components/Home/Menu";

export default function CarouselExamples() {
  const { login, menuOpen } = useDataContext();

  
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
            <h1 className="ml-3">Login Default</h1>
          </div>
          <Login1 />
          <div className="h-4"></div>
          <ConsoleCopy codeString={login.find(item => item.login1)?.login1.code || ""} />
        </div>
        <div className="h-96 text-center mt-3">More components comming soon!</div>
        {/* <div className="w-full h-full bg-slate-200 dark:bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Nav default</h1>
          </div>
          <Navbar2 />
          <div className="h-4"></div>
          <ConsoleCopy codeString={navbar.find(item => item.navbar2)?.navbar2.code || ""} />
        </div> */}
        {/* 
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Background Move Card</h1>
          </div>
          <Navbar3 />
          <ConsoleCopy codeString={navbar.find(item => item.nabar3)?.navbar3.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Flip Polaroid Card</h1>
          </div>
          <Navbar4 />
          <ConsoleCopy codeString={navbar.find(item => item.nabar4)?.navbar4.code || ""} />
        </div> */}
      </div>
    </div>
  );
}
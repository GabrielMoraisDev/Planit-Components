"use client";

import { useDataContext } from "../../_context/data";
import ConsoleCopy from "../../_components/copy";
import Card1 from "./list/Card1/page";
import Card2 from "./list/Card2/page";
import Card3 from "./list/Card3/page";
import Card4 from "./list/Card4/page";
import Nav from "../../_components/Home/Nav";
import Menu from "../../_components/Home/Menu";

export default function CarouselExamples() {
  const { card, menuOpen } = useDataContext();

  
  return (
    <>
      <Nav />
      <Menu />
      <div className="h-16"></div>
      <div className={`w-[95%] sm:w-[85%] xl:w-[75%] m-auto duration-300 ${menuOpen ? 'xl:mr-[3.5%] 2xl:mr-[5%] lg:float-end':'xl:m-auto 2xl:m-auto lg:float-none '}`}>
        <div className="h-8"></div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 px-5 pt-5 pb-2 rounded-lg m-auto">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Simple Card</h1>
          </div>
          <Card1 />
          <ConsoleCopy codeString={card.find(item => item.card1)?.card1.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Reveal Card</h1>
          </div>
          <Card2 />
          <ConsoleCopy codeString={card.find(item => item.card2)?.card2.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Background Move Card</h1>
          </div>
          <Card3 />
          <ConsoleCopy codeString={card.find(item => item.card3)?.card3.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="w-auto bg-slate-300 dark:bg-slate-900 mb-3 rounded-md pl-5 py-3 flex gap-2 place-items-center">
            <div className="border border-slate-400 dark:border-transparent bg-orange-300 dark:bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-purple-300 dark:bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="border border-slate-400 dark:border-transparent bg-sky-300 dark:bg-green-400 w-4 h-4 rounded-full"></div>
            <h1 className="ml-3">Flip Polaroid Card</h1>
          </div>
          <Card4 />
          <ConsoleCopy codeString={card.find(item => item.card4)?.card4.code || ""} />
        </div>
        <div className="h-96"></div>
      </div>
    </>
  );
}
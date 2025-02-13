// No seu arquivo CarouselExamples.tsx
"use client";

import { useDataContext } from "../../_context/data";
import ConsoleCopy from "../../_components/copy";
import Carousel1 from "./list/Carousel1/page";
import Carousel2 from "./list/Carousel2/page";
import Carousel3 from "./list/Carousel3/page";
import Nav from "../../_components/Home/Nav";
import Menu from "../../_components/Home/Menu";

export default function CarouselExamples() {
  const { carousel } = useDataContext();

  
  return (
    <>
      <Nav />
      <Menu />
      <div className="h-16"></div>
      <div className="w-[85%] xl:w-[75%] m-auto float-end xl:mr-[3.5%] 2xl:mr-[5%]">
        <h1 className="text-center m-auto text-2xl py-10">Exemplos de Carousel</h1>
        <div className="w-full h-full bg-slate-800 px-5 pt-5 pb-2 rounded-lg m-auto">
          <div className="flex justify-center place-items-center rounded-full gap-x-3 relative w-56 m-auto">
            <p className="text-xl text-center mb-3 text-sky-300 bg-slate-700 p-2 h-10 w-10 rounded-full absolute left-0">#1</p>
            <p className="text-xl text-center mb-3 text-slate-400 px-3 rounded-full bg-slate-900 h-10 w-auto flex place-items-center pl-16 pr-5">Fade Carousel</p>
          </div>
          <Carousel1 />
          <ConsoleCopy codeString={carousel.find(item => item.carousel1)?.carousel1.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="flex justify-center place-items-center rounded-full gap-x-3 relative w-56 m-auto">
            <p className="text-xl text-center mb-3 text-sky-300 bg-slate-700 p-2 h-10 w-10 rounded-full absolute left-0">#2</p>
            <p className="text-xl text-center mb-3 text-slate-400 px-3 rounded-full bg-slate-900 h-10 w-auto flex place-items-center pl-16 pr-5">Slide Carousel</p>
          </div>
          <Carousel2 />
          <ConsoleCopy codeString={carousel.find(item => item.carousel2)?.carousel2.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <div className="flex justify-center place-items-center rounded-full gap-x-3 relative w-56 m-auto">
            <p className="text-xl text-center mb-3 text-sky-300 bg-slate-700 p-2 h-10 w-10 rounded-full absolute left-0">#3</p>
            <p className="text-xl text-center mb-3 text-slate-400 px-3 rounded-full bg-slate-900 h-10 w-auto flex place-items-center pl-16 pr-5">3D Carousel</p>
          </div>
          <Carousel3 />
          <ConsoleCopy codeString={carousel.find(item => item.carousel3)?.carousel3.code || ""} />
        </div>
        <div className="h-96"></div>
      </div>
    </>
  );
}
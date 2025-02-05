// No seu arquivo CarouselExamples.tsx
"use client";

import { useDataContext } from "../../_context/data";
import ConsoleCopy from "../../_components/copy";
import Card1 from "./list/Card1/page";
import Card2 from "./list/Card2/page";
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
        <h1 className="text-center m-auto text-2xl py-10">Exemplos de Card</h1>
        <div className="w-full h-full bg-slate-800 px-5 pt-5 pb-2 rounded-lg m-auto">
          <Card1 />
          <div className="h-3"></div>
          <ConsoleCopy codeString={carousel.find(item => item.carousel1)?.carousel1.code || ""} />
        </div>
        <div className="w-full h-full bg-slate-800 p-5 rounded-lg m-auto mt-10">
          <Card2 />
          <div className="h-3"></div>
          <ConsoleCopy codeString={carousel.find(item => item.carousel2)?.carousel2.code || ""} />
        </div>
        <div className="h-96"></div>
      </div>
    </>
  );
}
'use client'
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "./codeNext";
import {codeStringJs} from "./codeJs";
import {codeStringReact} from "./codeReact";

const cardData = [
  {
    title: "Title of post 1",
    image: "https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
  },
  {
    title: "Title of post 2",
    image: "https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
  },
  {
    title: "Title of post 3",
    image: "https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
  }
];

const truncateDescription = (description: string, maxLength: number) => {
  return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
};

export default function Card3() {
  
  const { lang, setCard } = useDataContext();

  useEffect(()=> {
    if(lang === 'js'){
      setCard(prevState => 
        prevState.map(item => 
          item.card3 ? { card3: { code: codeStringJs } } : item
        )
      );
    }else if(lang === 'react'){
      setCard(prevState => 
        prevState.map(item => 
          item.card3 ? { card3: { code: codeStringReact } } : item
        )
      );
    }else{
      setCard(prevState => 
        prevState.map(item => 
          item.card3 ? { card3: { code: codeStringNext } } : item
        )
      );
    }
  }, [lang, setCard])

  const [hovered, setHovered] = useState(-1)
  const [hovered1, setHovered1] = useState(-1)
  const [hovered2, setHovered2] = useState(-1)
  const [hovered3, setHovered3] = useState(-1)
  const [hovered4, setHovered4] = useState(-1)
  const [timeouts, setTimeouts] = useState<number[]>([])

  function hoveredCard(id:number){
    const timeout4 = setTimeout(()=>setHovered4(id), 200) as unknown as number
    const timeout3 = setTimeout(()=>setHovered3(id), 400) as unknown as number
    const timeout2 = setTimeout(()=>setHovered2(id), 600) as unknown as number   
    const timeout1 = setTimeout(()=>setHovered1(id), 800) as unknown as number
    setTimeouts([timeout1, timeout2, timeout3, timeout4])
  }  

  function hoveredClear(){
    timeouts.forEach(timeout => clearTimeout(timeout))
    setHovered1(-1)
    setHovered2(-1)
    setHovered3(-1)
    setHovered4(-1)
  }  

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-t-lg py-5 flex flex-wrap justify-center gap-4">
      {cardData.map((card, index) => (
        <div key={index} className='w-56 h-60 border border-slate-300 dark:border-slate-700 rounded-lg relative cursor-pointer overflow-hidden duration-300 dark:bg-slate-800 bg-white hover:bg-slate-200 dark:hover:bg-slate-700 m-0' onMouseEnter={()=>{setHovered(index);hoveredCard(index)}} onMouseLeave={()=>{setHovered(-1);hoveredClear()}}>
          <div className={`w-full ${hovered === index?'h-full bg-right':'h-full bg-left'} duration-1000 bg-cover absolute top-0 left-0 z-10`} style={{backgroundImage: `url(${card.image})`}}>
            <div className={`w-full h-full ${hovered === index?'bg-white/70 dark:bg-black/50':'bg-white/20 dark:bg-black/30'} duration-300`}></div>
              <h1 className={`absolute bottom-0 bg-white dark:bg-transparent w-full text-slate-800 py-2 left-0 text-xl font-bold dark:text-white ${hovered === index?'opacity-0 left-0 duration-300':'left-0 pl-4 opacity-700 duration-300'} z-20`}>{card.title}</h1>
              <p className={`text-center w-[80%] truncate text-2xl font-bold absolute top-6 text-slate-800 dark:text-white ${hovered4 === index?'opacity-100 right-6':'opacity-0 right-0'} duration-300`}>{card.title}</p>
              <p className={`text-center w-[80%] text-base font-bold absolute top-16 text-slate-800 dark:text-slate-300 ${hovered3 === index?'opacity-100 right-6':'opacity-0 right-[-0.5rem]'} duration-300`}>{truncateDescription(card.description, 80)}</p>
              <p className={`text-center w-[80%] text-sm font-bold absolute bottom-10 text-slate-800 dark:text-slate-400 ${hovered2 === index?'opacity-100 right-6':'opacity-0 right-[-0.5rem]'} duration-300`}>See More</p>
              <p className={`text-center w-[80%] flex justify-center place-items-center text-sm font-bold absolute bottom-5 text-slate-800 dark:text-slate-400 ${hovered1 === index?'opacity-100 right-6':'opacity-0 right-[-0.5rem]'} duration-300`}><Icon.Award className='mr-1'/>01/01/2025</p>
          </div>
        </div>
      ))}
    </div>
  )
}
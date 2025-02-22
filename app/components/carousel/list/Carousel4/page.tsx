'use client'
import { useEffect, useState, useMemo } from "react";
import * as Icon from 'react-bootstrap-icons'
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "../../list/Carousel4/codeNext";
import {codeStringJs} from "../../list/Carousel4/codeJs";
import {codeStringReact} from "../../list/Carousel4/codeReact";

export default function Carousel4() {
  const [qntClass, setQntClass] = useState<string>('w-[125%]')
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { lang, setCarousel } = useDataContext();
    
  useEffect(()=> {
    if(lang === 'js'){
      setCarousel(prevState => 
        prevState.map(item => 
          item.carousel4 ? { carousel4: { code: codeStringJs } } : item
        )
      );
    }else if(lang === 'react'){
      setCarousel(prevState => 
        prevState.map(item => 
          item.carousel4 ? { carousel4: { code: codeStringReact } } : item
        )
      );
    }else{
      setCarousel(prevState => 
        prevState.map(item => 
          item.carousel4 ? { carousel4: { code: codeStringNext } } : item
        )
      );
    }
}, [lang, setCarousel])

  const items = useMemo(() => [
    { id: 1, title: 'First Card!', description: "This is the first card!", img: 'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380' },
    { id: 2, title: 'Second Card!', description: "This is the second!", img: 'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380' },
    { id: 3, title: 'Third Card!', description: "I'm the third!", img: 'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380' },
    { id: 4, title: 'Fourth Card!', description: "fourth", img: 'https://img.freepik.com/vetores-gratis/fundo-de-montanhas-em-aquarela_23-2149238186.jpg?t=st=1739410913~exp=1739414513~hmac=db6c0c016287d8b1e24cca28a5acccb61a4ce212d87cc0127c46b07c4735bb5f&w=1380' },
    { id: 5, title: 'Fifth Card!', description: "Last in List :)", img: 'https://img.freepik.com/vetores-gratis/fundo-de-paisagem-de-verao-para-zoom_52683-42162.jpg?t=st=1739411112~exp=1739414712~hmac=ab98c321de7cc4e633095f87b49eb7886f6e2f3e0aa1677070c9e4b0034c6036&w=1380' },
  ], []);

  useEffect(()=>{
    switch (items.length) {
      case 5:
        setQntClass('w-[500%] sm:w-[250%] md:w-[165%] lg:w-[165%] xl:w-[167%] 2xl:w-[125%]')
      break;
      case 6:
        setQntClass('w-[150%]')
      break;
      case 7:
        setQntClass('w-[175%]')
      break;
      case 8:
        setQntClass('w-[200%]')
      break;
      case 9:
        setQntClass('w-[225%]')
      break;
      case 10:
        setQntClass('w-[250%]')
      break;
      default:
        setQntClass('w-[100%]')
    }
  }, [items])

  const [firstItem, setFirstItem] = useState(0)
  const [toRight, setToRight] = useState(false)
  const [isClickable, setIsClickable] = useState(true)

  function handleClick(action: () => void) {
    if (!isClickable) return;
    setIsClickable(false);
    action();
    setTimeout(() => setIsClickable(true), 300);
  }

  function leftClick(){
    setToRight(false)
    if(firstItem === 0){
      setFirstItem(items.length)
      setTimeout(()=>setFirstItem(items.length - 1), 0)
    }else{
      setFirstItem(firstItem - 1)
    }
  }

  function rightClick(){
    setToRight(true)
    setFirstItem(firstItem + 1)
    if(firstItem === items.length - 1 || firstItem === items.length){
      setTimeout(()=>setFirstItem(0), 300)
    }
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        rightClick();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, firstItem]);

  interface Item {
    id: number;
    title: string;
    description: string;
    img: string;
  }

  const Card = ({ item }:{ item: Item }) => (
    <div key={item.id} className="h-auto min-w-56 border border-slate-300 dark:border-slate-700 rounded-lg relative cursor-pointer overflow-hidden duration-300 dark:bg-slate-800 bg-white hover:bg-slate-200 dark:hover:bg-slate-700 m-0">
      <div className="w-full h-32 bg-center bg-cover" style={{backgroundImage: `url(${item.img})`}}></div>
      <div className="w-full h-auto min-h-32 light:bg-white p-3 pb-9 duration-300">
        <h1 className="text-xl font-bold dark:text-white text-slate-800">{item.title}</h1>
        <p className="truncate dark:text-white text-slate-800">
          {item.description}
        </p>
        <p className='text-sm my-2 dark:text-white text-slate-900 duration-300'>See more</p>
        <hr className='dark:border-slate-400 border-slate-600 duration-300'/>
      </div>
      <div className="absolute bottom-0 w-full h-auto text-left px-3 pb-2 dark:text-slate-400 text-slate-800 text-sm flex place-items-center duration-300"><Icon.Award className='mr-1'/>01/01/2025</div>
    </div>
  );

  return (
    <div className="w-full relative bg-white rounded-t-lg dark:bg-slate-900"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className="w-[85%] overflow-hidden m-auto">
        <div className={`flex ${qntClass}`}>
        {items.map((item)=>( 
          <div key={item.id} className={`h-72 overflow-hidden
            ${toRight ? 
              (firstItem > 0 && firstItem < items.length + 1) && 'duration-300'
                : 
              (firstItem < items.length) && 'duration-300'
            } 
            ${firstItem >= item.id ? 'w-0' : 'w-full'} 
            justify-center place-items-center flex`}>
            <Card item={item} />
          </div>
        ))}
        {items.map((item)=>( 
          <div key={item.id} className={`h-72 overflow-hidden
            ${toRight ? 
              (firstItem > 0 && firstItem < items.length + 1) && 'duration-300'
                : 
              (firstItem < items.length) && 'duration-300'
            } 
            ${firstItem < item.id ? 'w-0' : 'w-full'} 
            justify-center place-items-center flex`}>
            <Card item={item} />  
          </div>
        ))}
        </div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:text-black bg-white hover:bg-slate-200 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white border-slate-600 dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-2 lg:right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
          onClick={()=>handleClick(rightClick)}>
            <Icon.ChevronRight />
          </div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:text-black bg-white hover:bg-slate-200 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white border-slate-600 dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-2 lg:left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
          onClick={()=>handleClick(leftClick)}>
            <Icon.ChevronLeft />
          </div>
      </div>
    </div>
  );
}

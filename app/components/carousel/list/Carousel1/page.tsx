'use client'

import { useState, useEffect, useCallback } from 'react';
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "../../list/Carousel1/codeNext";
import {codeStringJs} from "../../list/Carousel1/codeJs";
import {codeStringReact} from "../../list/Carousel1/codeReact";

import * as Icon from 'react-bootstrap-icons'

export default function Carousel1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
    const { lang, setCarousel } = useDataContext();
  
    useEffect(()=> {
      if(lang === 'js'){
        setCarousel(prevState => 
          prevState.map(item => 
            item.carousel1 ? { carousel1: { code: codeStringJs } } : item
          )
        );
      }else if(lang === 'react'){
        setCarousel(prevState => 
          prevState.map(item => 
            item.carousel1 ? { carousel1: { code: codeStringReact } } : item
          )
        );
      }else{
        setCarousel(prevState => 
          prevState.map(item => 
            item.carousel1 ? { carousel1: { code: codeStringNext } } : item
          )
        );
      }
  }, [lang, setCarousel])

  const images = [
    'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380', 
    'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380', 
    'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380'
  ];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextImage, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextImage]);

  return (
    <>
    <div
      className="w-full h-[10rem] lg:h-[25rem] flex m-auto justify-center rounded-t-lg overflow-hidden" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-slate-200 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden">
        <div className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:text-black bg-white/40 hover:bg-slate-100 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white dark:border-slate-500 border border-slate-500 rounded-full absolute -translate-y-1/2 top-1/2 left-2 lg:left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
          onClick={prevImage}
        >
          <Icon.ChevronLeft/>
        </div>
        {images.map((bg, index) => (
          <div
            key={index}
            className={`h-full w-full absolute ${index === currentImage ? 'opacity-100' : 'opacity-0'} duration-300 bg-cover bg-center`} 
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
        <div className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:text-black bg-white/40 hover:bg-slate-100 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white dark:border-slate-500 border border-slate-500 rounded-full absolute -translate-y-1/2 top-1/2 right-2 lg:right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
          onClick={nextImage}
        >
          <Icon.ChevronRight />
        </div>

        <div className="w-full h-3 lg:h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center z-30">
        {(() => {
          const dots = [];
          for (let i = 0; i < images.length; i++) {
            dots.push(
              <div
                key={i}
                className={`border-slate-500 border h-full w-3 lg:w-5 duration-300 rounded-full ${i === currentImage ? 'dark:bg-white bg-slate-100' : 'dark:bg-slate-600 bg-white/40'}`}
              ></div>
            );
          }
          return dots;
          })()}
        </div>
      </div>

    </div>

    </>
  );
}

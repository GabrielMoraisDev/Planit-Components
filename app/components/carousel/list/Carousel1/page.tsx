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
    'https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg', 
    'https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-f7f5eax71jomzq3h.jpg', 
    'https://wallpapers.com/images/hd/4k-beach-background-f9un4jfonc05kg9r.jpg'
  ];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextImage]);

  return (
    <>
    <div
      className="w-full h-[30rem] flex m-auto justify-center rounded-t-lg overflow-hidden" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden">
        <div className="w-32 h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 z-10 opacity-75"></div>
        <div className="w-12 h-12 text-slate-100 hover:text-black bg-white/40 hover:bg-slate-100 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
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
        <div className="w-32 h-full bg-gradient-to-l from-slate-950 to-transparent absolute right-0 z-10 opacity-75"></div>
        <div className="w-12 h-12 text-slate-100 hover:text-black bg-white/40 hover:bg-slate-100 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
          onClick={nextImage}
        >
          <Icon.ChevronRight />
        </div>

        <div className="w-full h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center z-30">
        {(() => {
          const dots = [];
          for (let i = 0; i < images.length; i++) {
            dots.push(
              <div
                key={i}
                className={`h-full w-5 duration-300 rounded-full ${i === currentImage ? 'dark:bg-white bg-slate-100' : 'dark:bg-slate-600 bg-white/40'}`}
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

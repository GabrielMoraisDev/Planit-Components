'use client'
import React, { useState, useEffect } from 'react';
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "../../list/Carousel3/codeNext";
import {codeStringJs} from "../../list/Carousel3/codeJs";
import {codeStringReact} from "../../list/Carousel3/codeReact";
import Image from 'next/image';
import * as Icon from 'react-bootstrap-icons';

const Carousel3D = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const { lang, setCarousel } = useDataContext();
    
      useEffect(()=> {
        if(lang === 'js'){
          setCarousel(prevState => 
            prevState.map(item => 
              item.carousel3 ? { carousel3: { code: codeStringJs } } : item
            )
          );
        }else if(lang === 'react'){
          setCarousel(prevState => 
            prevState.map(item => 
              item.carousel3 ? { carousel3: { code: codeStringReact } } : item
            )
          );
        }else{
          setCarousel(prevState => 
            prevState.map(item => 
              item.carousel3 ? { carousel3: { code: codeStringNext } } : item
            )
          );
        }
    }, [lang, setCarousel])

  const items = [
    { title: 'Index 1', description: 'Description of index 1', imageUrl: 'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380' },
    { title: 'Index 2', description: 'Description of index 2', imageUrl: 'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380' },
    { title: 'Index 3', description: 'Description of index 3', imageUrl: 'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380' },
    { title: 'Index 4', description: 'Description of index 4', imageUrl: 'https://img.freepik.com/vetores-gratis/fundo-de-montanhas-em-aquarela_23-2149238186.jpg?t=st=1739410913~exp=1739414513~hmac=db6c0c016287d8b1e24cca28a5acccb61a4ce212d87cc0127c46b07c4735bb5f&w=1380' },
    { title: 'Index 5', description: 'Description of index 5', imageUrl: 'https://img.freepik.com/vetores-gratis/fundo-de-paisagem-de-verao-para-zoom_52683-42162.jpg?t=st=1739411112~exp=1739414712~hmac=ab98c321de7cc4e633095f87b49eb7886f6e2f3e0aa1677070c9e4b0034c6036&w=1380' },
  ];

  const numberOfItems = items.length;
  const theta = 360 / numberOfItems;
  const radius = 450;

  const rotate = (direction: number) => {
    setRotation(prev => prev + direction * theta);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setRotation(prev => prev - theta);
        setCurrentItem(currentItem === 4 ? 0 : currentItem + 1)
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, theta, currentItem]);

  return (

    <div 
      className="relative w-full mx-auto h-[14rem] lg:h-[28rem] overflow-hidden perspective bg-white dark:bg-slate-900 py-8 rounded-t-lg duration-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 h-full w-72 lg:bg-gradient-to-l from-transparent to-slate-400 dark:to-black/90 z-10"></div>
      <div className="absolute top-0 right-0 h-full w-72 lg:bg-gradient-to-r from-transparent to-slate-400 dark:to-black/90 z-10"></div>
      <div className="relative w-full h-full">
        <div
          className="m-auto w-full h-full preserve-3d duration-1000"
          style={{ transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`}}
        >
          {items.map((item, index) => {
            const itemRotation = theta * index;
            return (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{ transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)` }}
              >
                <div className='bg-white dark:bg-slate-800 relative w-[15rem] lg:w-[30rem] h-full mx-auto overflow-hidden rounded-lg transform-style-preserve-3d flex justify-center'>
                <div className=
                  {`w-[30rem] h-full duration-300 ${index === currentItem ? 'opacity-100' : (index === currentItem + 1 || index === currentItem - 1) 
                    ? 'opacity-70' : (index === currentItem - (items.length - 1) || index === currentItem + (items.length - 1)) ? 'opacity-70': 'opacity-20'}`}>
                  <Image
                    width={600}
                    height={600}
                    src={item.imageUrl}
                    alt={item.title}
                    className='w-[30rem] h-full'
                    style={{ objectPosition: 'center' }}
                  />

                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 duration-1000">
                      <h2 className="text-xl font-bold mb-1 text-white">{item.title}</h2>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {rotate(1); setCurrentItem(currentItem === 0 ? items.length - 1 : currentItem - 1)}}
          className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:bg-slate-400 bg-slate-100 hover:text-slate-100 dark:text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-600 dark:hover:text-slate-100 border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-2 lg:left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        >
          <Icon.ChevronLeft className="w-6 h-6" />
        </button>
        <div
          onClick={() => {rotate(-1); setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem + 1)}}
          className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:bg-slate-400 bg-slate-100 hover:text-slate-100 dark:text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-600 dark:hover:text-slate-100 border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-2 lg:right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        >
          <Icon.ChevronRight className="w-6 h-6" />
        </div>
      </div>
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Carousel3D;

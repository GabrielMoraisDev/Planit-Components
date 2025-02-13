'use client'
import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const Carousel3D = () => {
  const [rotation, setRotation] = useState(0);
  const items = [
    { title: 'Imagem 1', description: 'Descrição da imagem 1', imageUrl: 'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380' },
    { title: 'Imagem 2', description: 'Descrição da imagem 2', imageUrl: 'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380' },
    { title: 'Imagem 3', description: 'Descrição da imagem 3', imageUrl: 'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380' },
    { title: 'Imagem 4', description: 'Descrição da imagem 4', imageUrl: 'https://img.freepik.com/vetores-gratis/fundo-de-montanhas-em-aquarela_23-2149238186.jpg?t=st=1739410913~exp=1739414513~hmac=db6c0c016287d8b1e24cca28a5acccb61a4ce212d87cc0127c46b07c4735bb5f&w=1380' },
    { title: 'Imagem 2', description: 'Descrição da imagem 2', imageUrl: 'https://img.freepik.com/vetores-gratis/fundo-de-paisagem-de-verao-para-zoom_52683-42162.jpg?t=st=1739411112~exp=1739414712~hmac=ab98c321de7cc4e633095f87b49eb7886f6e2f3e0aa1677070c9e4b0034c6036&w=1380' },
  ];

  const numberOfItems = items.length;
  const theta = 360 / numberOfItems;
  const radius = 400;

  const rotate = (direction: number) => {
    setRotation(prev => prev + direction * theta);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden perspective mt-52 bg-slate-700">
      <div className="absolute left-0 h-full w-44 bg-gradient-to-l from-transparent to-black/90 z-10"></div>
      <div className="absolute right-0 h-full w-44 bg-gradient-to-r from-transparent to-black/90 z-10"></div>
      <div className="relative w-full h-full">
        <div
          className="absolute w-full h-full preserve-3d"
          style={{ transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`, transition: 'transform 1s ease-in-out' }}
        >
          {items.map((item, index) => {
            const itemRotation = theta * index;
            return (
              <div
                key={index}
                className="absolute w-full h-full bg-gradient-to-r from-transparent via-black/80 to-transparent"
                style={{ transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)` }}
              >
                <div className="bg-center bg-cover relative w-[30rem] h-full mx-auto overflow-hidden rounded-lg transform-style-preserve-3d flex justify-center" style={{backgroundImage: `url(${item.imageUrl})`}}>
                  {/* <img src={item.imageUrl} alt={item.title} className="w-[30rem] h-full" style={{ objectPosition: 'center' }} /> */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                    <h2 className="text-xl font-bold mb-1 text-white">{item.title}</h2>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => rotate(1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 focus:outline-none z-10"
        >
          <Icon.ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => rotate(-1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 focus:outline-none z-10"
        >
          <Icon.ChevronRight className="w-6 h-6" />
        </button>
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

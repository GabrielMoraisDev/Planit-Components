export const codeStringNext = `
"use client";

import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

interface Image {
  name: string;
  img: string;
}

export default function Carousel2() {
  const [currentImage, setCurrentImage] = useState&lt;number&gt;(0);
  const [isHovered, setIsHovered] = useState&lt;boolean&gt;(false);

  const images: Image[] = [
    {
      name: "Item 1",
      img: "https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380",
    },
    {
      name: "Item 2",
      img: "https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380",
    },
    {
      name: "Item 3",
      img: "https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380",
    },
  ];

  const prevSlide = () =&gt; {
    setCurrentImage((prev) =&gt; (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () =&gt; {
    setCurrentImage((prev) =&gt; (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() =&gt; {
    if (!isHovered) {
      const interval = setInterval(() =&gt; {
        nextSlide();
      }, 5000);
      return () =&gt; clearInterval(interval);
    }
  }, [isHovered, currentImage]);

  return (
    &lt;div
      className="relative w-full h-[30rem] mx-auto overflow-hidden"
      onMouseEnter={() =&gt; setIsHovered(true)}
      onMouseLeave={() =&gt; setIsHovered(false)}
    &gt;
      &lt;div
        className="h-full flex transition-transform duration-300"
        style={{ transform: \`translateX(-$\{currentImage * 100}%)\`}}
      &gt;
        {images.map((item, index) =&gt; (
          &lt;div
            key={index}
            className="min-w-full h-full flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold"
            style={{ backgroundImage: \`url($\{item.img})\` }}
          &gt;
            &lt;div className="w-full h-full bg-black/30 flex justify-center place-items-center"&gt;
              {item.name}
            &lt;/div&gt;
          &lt;/div&gt;
        ))}
      &lt;/div&gt;

      &lt;div
        className="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        onClick={prevSlide}
      &gt;
        &lt;Icon.ChevronLeft /&gt;
      &lt;/div&gt;

      &lt;div
        className="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        onClick={nextSlide}
      &gt;
        &lt;Icon.ChevronRight /&gt;
      &lt;/div&gt;

      &lt;div className="w-full h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center"&gt;
        {images.map((_, i) =&gt; (
          &lt;div
            key={i}
            className={\`h-full w-5 duration-300 rounded-full $\{i === currentImage ? "bg-white" : "bg-slate-600"}\`}
          &gt;&lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}`
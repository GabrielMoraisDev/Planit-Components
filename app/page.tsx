"use client";

import { useState, useEffect }  from "react";
import * as Icon from "react-bootstrap-icons";

export default function Carousel2() {
  const [currentImage, setcurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
    const images = [
      { name: "Item 1", img: "https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg" },
      { name: "Item 2", img: "https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-f7f5eax71jomzq3h.jpg" },
      { name: "Item 3", img: "https://wallpapers.com/images/hd/4k-beach-background-f9un4jfonc05kg9r.jpg" },
    ];

  const prevSlide = () => {
    setcurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setcurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentImage]);

  return (
    <div
      className="relative w-full h-[30rem] bg-red-400 mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center justify-center bg-cover bg-center text-white text-4xl font-bold"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="w-full h-full bg-black/30 flex justify-center place-items-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        onClick={prevSlide}
      >
        <Icon.ChevronLeft />
      </div>

      <div
        className="w-12 h-12 text-white hover:text-slate-800 bg-slate-800 hover:bg-white border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        onClick={nextSlide}
      >
        <Icon.ChevronRight />
      </div>
      <div className="w-full h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center">
      {(() => {
        const dots = [];
        for (let i = 0; i < images.length; i++) {
          dots.push(
            <div
              key={i}
              className={`h-full w-5 duration-300 rounded-full ${i === currentImage ? 'bg-white' : 'bg-slate-600'}`}
            ></div>
          );
        }
        return dots;
      })()}
    </div>

    </div>
  );
}
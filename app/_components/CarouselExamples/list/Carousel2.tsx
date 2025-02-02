"use client";

import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

const items = [
  { name: "Item 1", img: "https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg" },
  { name: "Item 2", img: "https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-f7f5eax71jomzq3h.jpg" },
  { name: "Item 3", img: "https://wallpapers.com/images/hd/4k-beach-background-f9un4jfonc05kg9r.jpg" },
];

export default function Carousel2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);

  return (
    <div
      className="relative w-[60rem] h-[30rem] bg-red-400 mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
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
        className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        onClick={prevSlide}
      >
        <Icon.ChevronLeft />
      </div>

      <div
        className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
        onClick={nextSlide}
      >
        <Icon.ChevronRight />
      </div>
    </div>
  );
}

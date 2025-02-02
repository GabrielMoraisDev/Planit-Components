'use client'

import { useState, useEffect, useCallback } from 'react';
import * as Icon from 'react-bootstrap-icons'

export default function Carousel1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  const codeString = `
    <div id='copy'
      className="w-[60rem] h-[30rem] flex m-auto justify-center bg-red-900" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden">
        <div className="w-32 h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 z-10 opacity-75"></div>
        <div className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 
           hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 
             z-20 cursor-pointer flex justify-center place-items-center" 
          onClick={prevImage}
        >
          <Icon.ChevronLeft/>
        </div>
        {images.map((bg, index) => (
          <div
            key={index}
            className={\`h-full w-full absolute \${index === currentImage ? 'opacity-100' : 'opacity-0'} duration-300 bg-cover bg-center\`} 
            style={{ backgroundImage: \`url(\${bg})\` }}
          ></div>
        ))}
        <div className="w-32 h-full bg-gradient-to-l from-slate-950 to-transparent absolute right-0 z-10 opacity-75"></div>
        <div className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 
          hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 
            duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
          onClick={nextImage}
        >
          <Icon.ChevronRight />
        </div>
      </div>
    </div>
  `.replace(/<div/g, '<span class="text-blue-500">&lt;div</span>').replace(/className/g, '<span class="text-orange-500">className</span>')
  .replace(/id/g, '<span class="text-green-500">id</span>').replace(/style/g, '<span class="text-purple-500">style</span>')
  .replace(/onClick/g, '<span class="text-yellow-500">onClick</span>').replace(/onMouseEnter/g, '<span class="text-yellow-500">onMouseEnter</span>')
  .replace(/onMouseLeave/g, '<span class="text-yellow-500">onMouseLeave</span>').replace(/{/g, '<span class="text-yellow-500">{</span>')
  .replace(/}/g, '<span class="text-yellow-500">}</span>').replace(/\(/g, '<span class="text-emerald-500">(</span>')
  .replace(/\)/g, '<span class="text-emerald-500">)</span>').replace(/.map/g, '<span class="text-emerald-500">.map</span>')
  .replace(/\$/g, '<span class="text-yellow-500">$</span>').replace(/backgroundImage/g, '<span class="text-yellow-500">backgroundImage</span>')
  .replace(/=>/g, '<span class="text-yellow-500">=></span>').replace(/=>/g, '<span class="text-yellow-500">=></span>')
  .replace(/true/g, '<span class="text-pink-300">true</span>').replace(/false/g, '<span class="text-pink-300">true</span>')
  .replace(/key/g, '<span class="text-green-500">key</span>').replace(/\?/g, '<span class="text-blue-500">?</span>')
  .replace(/===/g, '<span class="text-blue-500">===</span>').replace(/:/g, '<span class="text-blue-500">:</span>')
  .replace(/ >/g, '<span class="text-blue-500">&gt;</span>')

  return (
    <>
      <div id='copy'
        className="w-[60rem] h-[30rem] flex m-auto justify-center bg-red-900" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden">
          <div className="w-32 h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 z-10 opacity-75"></div>
          <div className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
            onClick={prevImage}
          >
            <Icon.ChevronLeft/>
          </div>
          {images.map((bg, index) => (
            <div
              key={index}
              className={`h-full w-full absolute ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              } duration-300 bg-cover bg-center`} 
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          ))}
          <div className="w-32 h-full bg-gradient-to-l from-slate-950 to-transparent absolute right-0 z-10 opacity-75"></div>
          <div className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
            onClick={nextImage}
          >
            <Icon.ChevronRight/>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-slate-800 rounded shadow-md">
        <pre className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: codeString }} />
      </div>

      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => {
          const copyText = document.getElementById('copy')?.outerHTML;
          if (copyText) {
            navigator.clipboard.writeText(copyText).then(() => {
              alert('Texto copiado para a área de transferência!');
            });
          }
        }}
      >
        Copiar código
      </button>
    </>
  );
}

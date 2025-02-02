'use client'

import { useState, useEffect, useCallback } from 'react';
import { cleanConsole } from '@/app/_components/console'
import * as Icon from 'react-bootstrap-icons'

export default function Carousel1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [viewCode, setViewCode] = useState(false);

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

  const copyText = (text:string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const codeString = `  'use client'

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

      return (
      &lt;div
        className="w-[60rem] h-[30rem] flex m-auto justify-center bg-red-900" 
        onMouseEnter={() =&gt; setIsHovered(true)}
        onMouseLeave={() =&gt; setIsHovered(false)}
      &gt;
        &lt;div className="w-full h-full bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden"&gt;
          &lt;div className="w-32 h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 z-10 opacity-75"&gt;&lt;/div&gt;
          &lt;div className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 
             hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 
               z-20 cursor-pointer flex justify-center place-items-center" 
            onClick={prevImage}
          &gt;
            &lt;Icon.ChevronLeft/&gt;
          &lt;/div&gt;
          {images.map((bg, index) => (
            &lt;div
              key={index}
              className={\`h-full w-full absolute \${index === currentImage ? 'opacity-100' : 'opacity-0'} duration-300 bg-cover bg-center\`} 
              style={{ backgroundImage: \`url(\${bg})\` }}
            >&lt;/div&gt;
          ))}
          &lt;div className="w-32 h-full bg-gradient-to-l from-slate-950 to-transparent absolute right-0 z-10 opacity-75"&gt;&lt;/div&gt;
          &lt;div className="w-14 h-14 text-white hover:text-slate-800 bg-white/30 
            hover:bg-white border-slate-300 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 
              duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
            onClick={nextImage}
          &gt;
            &lt;Icon.ChevronRight /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
  `

  return (
    <>
    <div
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
            className={`h-full w-full absolute ${index === currentImage ? 'opacity-100' : 'opacity-0'} duration-300 bg-cover bg-center`} 
            style={{ backgroundImage: `url(${bg})` }}
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

        <div className={`w-[60rem] h-16 bg-slate-700 m-auto relative rounded-b-lg duration-300`}>
          <div className="w-44 h-[60%] bg-slate-600 rounded-full cursor-pointer absolute -translate-y-1/2 top-1/2 left-5 flex justify-center place-items-center" onClick={()=>setViewCode((prev)=>!prev)}>{viewCode?'Ocultar código':'Ver código'}</div>
          <div className="w-20 h-[60%] bg-slate-600 rounded-full cursor-pointer absolute -translate-y-1/2 top-1/2 right-5 flex justify-center place-items-center" onClick={()=>copyText(codeString.replace(/&lt;/g, '<').replace(/&gt;/g, '>'))}><Icon.Clipboard/></div>
          <div className="w-auto h-[60%] p-3 rounded-full cursor-pointer absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 flex justify-center place-items-center">
            <div className='w-24 py-4 rounded-full h-full bg-white mx-2 bg-center bg-contain bg-no-repeat' style={{backgroundImage: `url('https://a.storyblok.com/f/172506/1280x800/00901d9ffe/next-js-logo.webp')`}}></div>
            <div className='w-24 py-4 rounded-full h-full bg-white/10 mx-2 bg-center bg-contain bg-no-repeat' style={{backgroundImage: `url('https://delta-dev-software.fr/wp-content/uploads/2024/02/react-logo-freelogovectors.net_.png')`}}></div>
          </div>
        </div>

      <div className={`bg-slate-800 w-[100%] m-auto mt-4 ${viewCode?'p-4 max-h-[30rem] overflow-y-auto':'max-h-0 p-0 overflow-hidden'} duration-300`}>
        <pre className="whitespace-pre-" dangerouslySetInnerHTML={{ __html: 
          cleanConsole(codeString)
           }} />
      </div>

    </>
  );
}

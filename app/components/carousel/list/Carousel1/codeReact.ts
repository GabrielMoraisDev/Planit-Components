export const codeStringReact = `
import { useState, useEffect, useCallback } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function FadeCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380', 
    'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380', 
    'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380'
  ];

  const nextImage = useCallback(() =&gt; {
    setCurrentImage((prev) =&gt; (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() =&gt; {
    setCurrentImage((prev) =&gt; (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() =&gt; {
    if (!isHovered) {
      const interval = setInterval(nextImage, 3000);
      return () =&gt; clearInterval(interval);
    }
  }, [isHovered, nextImage]);

  return (
    &lt;&gt;
      &lt;div
        className="w-full h-[30rem] flex m-auto justify-center rounded-t-lg overflow-hidden" 
        onMouseEnter={() =&gt; setIsHovered(true)}
        onMouseLeave={() =&gt; setIsHovered(false)}
      &gt;
        &lt;div className="w-full h-full bg-slate-700 dark:bg-slate-800 relative duration-300 flex justify-center overflow-hidden"&gt;
          &lt;div className="w-32 h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 z-10 opacity-75"&gt;&lt;/div&gt;
          &lt;div 
            className="w-12 h-12 text-slate-100 hover:text-black bg-white/40 hover:bg-slate-100 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
            onClick={prevImage}
          &gt;
            &lt;Icon.ChevronLeft/&gt;
          &lt;/div&gt;
          {images.map((bg, index) =&gt; (
            &lt;div
              key={index}
              className={\`h-full w-full absolute $\{index === currentImage ? 'opacity-100' : 'opacity-0'} duration-300 bg-cover bg-center\`} 
              style={{ backgroundImage: \`url($\{bg})\` }}
            &gt;&lt;/div&gt;
          ))}
          &lt;div className="w-32 h-full bg-gradient-to-l from-slate-950 to-transparent absolute right-0 z-10 opacity-75"&gt;&lt;/div&gt;
          &lt;div 
            className="w-12 h-12 text-slate-100 hover:text-black bg-white/40 hover:bg-slate-100 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center"
            onClick={nextImage}
          &gt;
            &lt;Icon.ChevronRight /&gt;
          &lt;/div&gt;

          &lt;div className="w-full h-5 rounded-full absolute bottom-5 -translate-x-1/2 left-1/2 flex gap-x-3 justify-center z-30"&gt;
            {(() =&gt; {
              const dots = [];
              for (let i = 0; i &lt; images.length; i++) {
                dots.push(
                  &lt;div
                    key={i}
                    className={\`h-full w-5 duration-300 rounded-full $\{i === currentImage ? 'dark:bg-white bg-slate-100' : 'dark:bg-slate-600 bg-white/40\'}\`}
                  &gt;&lt;/div&gt;
                );
              }
              return dots;
            })()}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}

`
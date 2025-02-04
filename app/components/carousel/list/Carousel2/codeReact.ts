export const codeStringReact = `
import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

export default function Carousel2() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    {
      name: "Item 1",
      img: "https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg",
    },
    {
      name: "Item 2",
      img: "https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-f7f5eax71jomzq3h.jpg",
    },
    {
      name: "Item 3",
      img: "https://wallpapers.com/images/hd/4k-beach-background-f9un4jfonc05kg9r.jpg",
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
        style={{ transform: \`translateX(-$\{currentImage * 100}%)\` }}
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
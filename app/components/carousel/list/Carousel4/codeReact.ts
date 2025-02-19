export const codeStringReact = `
import { useEffect, useState, useMemo } from "react";
import * as Icon from 'react-bootstrap-icons'

export default function CarouselCards() {
  const [qntClass, setQntClass] = useState('w-[125%]')
  const [isHovered, setIsHovered] = useState(false)

  const items = useMemo(() =&gt; [
    { id: 1, title: 'First Card!', description: "This is the first card!", img: 'https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380' },
    { id: 2, title: 'Second Card!', description: "This is the second!", img: 'https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380' },
    { id: 3, title: 'Third Card!', description: "I'm the third!", img: 'https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380' },
    { id: 4, title: 'Fourth Card!', description: "fouth", img: 'https://img.freepik.com/vetores-gratis/fundo-de-montanhas-em-aquarela_23-2149238186.jpg?t=st=1739410913~exp=1739414513~hmac=db6c0c016287d8b1e24cca28a5acccb61a4ce212d87cc0127c46b07c4735bb5f&w=1380' },
    { id: 5, title: 'Fifth Card!', description: "Last in List :)", img: 'https://img.freepik.com/vetores-gratis/fundo-de-paisagem-de-verao-para-zoom_52683-42162.jpg?t=st=1739411112~exp=1739414712~hmac=ab98c321de7cc4e633095f87b49eb7886f6e2f3e0aa1677070c9e4b0034c6036&w=1380' },
  ], []);

  useEffect(()=&gt;{
    switch (items.length) {
      case 5:
        setQntClass('w-[500%] sm:w-[250%] md:w-[165%] lg:w-[165%] xl:w-[167%] 2xl:w-[125%]')
      break;
      case 6:
        setQntClass('w-[150%]')
      break;
      case 7:
        setQntClass('w-[175%]')
      break;
      case 8:
        setQntClass('w-[200%]')
      break;
      case 9:
        setQntClass('w-[225%]')
      break;
      case 10:
        setQntClass('w-[250%]')
      break;
      default:
        setQntClass('w-[100%]')
    }
  }, [items])

  const [firstItem, setFirstItem] = useState(0)
  const [toRight, setToRight] = useState(false)
  const [isClickable, setIsClickable] = useState(true)

  function handleClick(action) {
    if (!isClickable) return;
    setIsClickable(false);
    action();
    setTimeout(() =&gt; setIsClickable(true), 300);
  }

  function leftClick(){
    setToRight(false)
    if(firstItem === 0){
      setFirstItem(items.length)
      setTimeout(()=&gt;setFirstItem(items.length - 1), 0)
    }else{
      setFirstItem(firstItem - 1)
    }
  }

  function rightClick(){
    setToRight(true)
    setFirstItem(firstItem + 1)
    if(firstItem === items.length - 1 || firstItem === items.length){
      setTimeout(()=&gt;setFirstItem(0), 300)
    }
  }

  useEffect(() =&gt; {
    if (!isHovered) {
      const interval = setInterval(() =&gt; {
        rightClick();
      }, 3000);
      return () =&gt; clearInterval(interval);
    }
  }, [isHovered, firstItem]);

  return (
    &lt;div className="w-full relative bg-white rounded-t-lg dark:bg-slate-900"
    onMouseEnter={() =&gt; setIsHovered(true)}
    onMouseLeave={() =&gt; setIsHovered(false)}&gt;
      &lt;div className="w-[85%] overflow-hidden m-auto"&gt;
        &lt;div className={\`flex $\{qntClass}\`}&gt;
        {items.map((item)=&gt;( 
          &lt;div key={item.id} className={\`h-72 overflow-hidden
            $\{toRight ? 
              (firstItem &gt; 0 && firstItem &lt; items.length + 1) && 'duration-300'
                : 
              (firstItem &lt; items.length) && 'duration-300'
            } 
            $\{firstItem &gt;= item.id ? 'w-0' : 'w-full'} 
            justify-center place-items-center flex\`}&gt;
              &lt;div className="min-w-[11rem] sm:min-w-[10rem] md:min-w-[10rem] lg:min-w-[13rem] 2xl:min-w-[15rem] h-60 bg-slate-300 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 duration-300 cursor-pointer"&gt;
                &lt;div className="m-auto w-full h-32 bg-center bg-cover rounded-md mb-3" style={{backgroundImage: \`url('$\{item.img}')\`}}&gt;&lt;/div&gt;
                &lt;h1 className="text-xl text-black dark:text-white"&gt;{item.title}&lt;/h1&gt;
                &lt;p className="truncate text-slate-700 dark:text-slate-400"&gt;{item.description}&lt;/p&gt;
                &lt;p className="text-sm text-slate-400 dark:text-slate-600"&gt;See more&lt;/p&gt;
              &lt;/div&gt;
          &lt;/div&gt;
        ))}
        {items.map((item)=&gt;( 
          &lt;div key={item.id} className={\`h-72 overflow-hidden
            $\{toRight ? 
              (firstItem &gt; 0 && firstItem &lt; items.length + 1) && 'duration-300'
                : 
              (firstItem &lt; items.length) && 'duration-300'
            } 
            $\{firstItem &lt; item.id ? 'w-0' : 'w-full'} 
            justify-center place-items-center flex\`}&gt;
              &lt;div className="min-w-[11rem] sm:min-w-[10rem] md:min-w-[10rem] lg:min-w-[13rem] 2xl:min-w-[15rem] h-60 bg-slate-300 dark:bg-slate-800 p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 duration-300 cursor-pointer"&gt;
                &lt;div className="m-auto w-full h-32 bg-center bg-cover rounded-md mb-3" style={{backgroundImage: \`url('$\{item.img}')\`}}&gt;&lt;/div&gt;
                &lt;h1 className="text-xl text-black dark:text-white"&gt;{item.title}&lt;/h1&gt;
                &lt;p className="truncate text-slate-700 dark:text-slate-400"&gt;{item.description}&lt;/p&gt;
                &lt;p className="text-sm text-slate-400 dark:text-slate-600"&gt;See more&lt;/p&gt;
              &lt;/div&gt;
          &lt;/div&gt;
        ))}
        &lt;/div&gt;
        &lt;div className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:text-black bg-white hover:bg-slate-200 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white border-slate-600 dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 right-2 lg:right-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
          onClick={()=&gt;handleClick(rightClick)}&gt;
            &lt;Icon.ChevronRight /&gt;
          &lt;/div&gt;
        &lt;div className="w-10 h-10 lg:w-12 lg:h-12 text-slate-800 hover:text-black bg-white hover:bg-slate-200 dark:text-white dark:hover:text-slate-800 dark:bg-slate-800 dark:hover:bg-white border-slate-600 dark:border-slate-500 border rounded-full absolute -translate-y-1/2 top-1/2 left-2 lg:left-7 duration-300 z-20 cursor-pointer flex justify-center place-items-center" 
          onClick={()=&gt;handleClick(leftClick)}&gt;
            &lt;Icon.ChevronLeft /&gt;
          &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
`
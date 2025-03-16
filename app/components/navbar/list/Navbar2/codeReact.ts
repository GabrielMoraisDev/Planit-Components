export const codeStringReact = `import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const cardData = [
  {
    title: "Title of post 1",
    image: "https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
  },
  {
    title: "Title of post 2",
    image: "https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
  },
  {
    title: "Title of post 3",
    image: "https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
  }
];

export default function RevealCard() {
  const [hovered, setHovered] = useState(-1);

  return (
    &lt;div className="w-full bg-white dark:bg-slate-900 rounded-t-lg py-5 flex flex-wrap justify-center gap-4"&gt;
      {cardData.map((card, index) =&gt; (
        &lt;div 
          key={index} 
          className="w-56 h-auto border border-slate-300 dark:border-slate-700 rounded-lg relative cursor-pointer overflow-hidden duration-300 dark:bg-slate-800 bg-white dark:hover:bg-slate-700 m-0" 
          onMouseEnter={() =&gt; setHovered(index)} 
          onMouseLeave={() =&gt; setHovered(-1)}
        &gt;
          &lt;div 
            className={\`w-full $\{hovered === index ? 'h-32' : 'h-full'} duration-300 bg-center bg-cover absolute top-0 left-0 z-10\`} 
            style={{ backgroundImage: \`url($\{card.image})\` }}
          &gt;
            &lt;div className={\`w-full h-full bg-white/30 dark:bg-black/30 duration-300 $\{hovered === index ? 'opacity-0' : 'opacity-100'}\`}&gt;&lt;/div&gt;
            &lt;h1 className={\`absolute bottom-0 bg-white dark:bg-transparent w-full text-slate-800 pl-4 py-2 left-0 text-xl font-bold dark:text-white $\{hovered === index ? 'opacity-0' : 'opacity-100'} duration-300 z-20\`}&gt;
              {card.title}
            &lt;/h1&gt;
          &lt;/div&gt;
          &lt;div className="w-full h-auto min-h-32 light:bg-white p-3 pb-9 mt-32 duration-300"&gt;
            &lt;h1 className={\`text-xl font-bold dark:text-white text-slate-800 $\{hovered === index ? 'ml-0 opacity-100' : 'ml-[-1rem] opacity-0'} duration-[1s]\`}&gt;
              {card.title}
            &lt;/h1&gt;
            &lt;p className={\`truncate dark:text-white text-slate-800 w-full $\{hovered === index ? 'ml-0 opacity-100' : 'ml-[-1rem] opacity-0'} duration-[2s]\`}&gt;
              {card.description}
            &lt;/p&gt;
            &lt;p className={\`text-sm my-2 dark:text-white text-slate-900 duration-[3s] $\{hovered === index ? 'opacity-100' : 'opacity-0'}\`}&gt;
              See more
            &lt;/p&gt;
            &lt;hr className={\`dark:border-slate-400 border-slate-600 duration-700 $\{hovered === index ? 'w-[100%]' : 'w-[0%]'}\`} /&gt;
          &lt;/div&gt;
          &lt;div className="absolute bottom-0 w-full h-auto text-left px-3 pb-2 dark:text-slate-400 text-slate-800 text-sm flex place-items-center duration-300"&gt;
            &lt;Icon.Award className="mr-1" /&gt;01/01/2025
          &lt;/div&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}`
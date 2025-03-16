export const codeStringNext = `'use client'
import Image from 'next/image'
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Nav1() {
  const items = [
    { label: 'Home', href: '#', icon: Icon.House },
    { label: 'Projects', href: '#', icon: Icon.Box2 },
    { label: 'About', href: '#', icon: Icon.InfoCircle },
    { label: 'Enterprise', href: '#', icon: Icon.Building },
    { label: 'Contact', href: '#', icon: Icon.PersonLinesFill }
  ];

  const [hovered, setHovered] = useState&lt;string | null&gt;(null);
  const [menuMobile, setMenuMobile] = useState&lt;boolean&gt;(false);

  return (
    &lt;div className={\`$\{menuMobile ? 'max-h-[70rem] pt-5 pb-24' : 'max-h-20'} lg:py-0 lg:h-16 bg-slate-700 dark:bg-slate-800 relative duration-500 flex justify-center overflow-hidden\`}&gt;

      &lt;div className="lg:hidden text-sky-300 absolute left-4 top-5 w-10 h-10 flex justify-center place-items-center rounded-md" onClick={() =&gt; setMenuMobile(!menuMobile)}&gt;
        &lt;Icon.List className={\`w-8 h-8 absolute duration-300 $\{menuMobile ? 'opacity-0 rotate-[70deg]' : 'opacity-100 rotate-[0deg]'}\`}/&gt; 
        &lt;Icon.X className={\`w-8 h-8 absolute duration-300 $\{!menuMobile ? 'opacity-0 rotate-[-70deg]' : 'opacity-100 rotate-[0deg]\'}\`}/&gt; 
      &lt;/div&gt;

      &lt;div className="absolute right-5 top-2 lg:top-0 lg:left-10 h-16 lg:h-full w-auto flex place-items-center"&gt;
        &lt;Image width={200} height={200} className='h-[70%] w-auto' src='/planit.png' alt='Logo'&gt;&lt;/Image&gt;
      &lt;/div&gt;
      &lt;div className={\`h-full w-auto lg:flex place-items-center inline lg:ml-[-6rem] xl:ml-0 $\{menuMobile ? 'opacity-100' : 'opacity-0 lg:opacity-100'} duration-300\`}&gt;
        {items.map(({ label, href, icon: IconComponent }) =&gt; (
          &lt;a
            key={label}
            href={href}
            className="relative h-full cursor-pointer text-sky-300 hover:text-white dark:hover:text-sky-300 dark:text-white lg:mx-4 xl:mx-7"
            onMouseEnter={() =&gt; setHovered(label)}
            onMouseLeave={() =&gt; setHovered(null)}
          &gt;
            &lt;div className={\`$\{hovered === label ? 'pt-[1rem] lg:pt-0 lg:mt-[0.8rem]' : 'lg:mb-1'} w-auto h-14 lg:h-full flex rounded-md place-items-center duration-300 text-center justify-center\`}&gt;
              {label}
            &lt;/div&gt;
            &lt;div className={\`$\{hovered === label ? 'mt-[-1rem] lg:mt-[-0.7rem] opacity-100' : 'mb-0 opacity-0'} absolute mb-0 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 flex justify-center duration-300\`}&gt;
              &lt;IconComponent className='text-xl'/&gt;
            &lt;/div&gt;
          &lt;/a&gt;
        ))}
      &lt;/div&gt;

      &lt;div className={\`absolute bottom-7 lg:right-5 h-auto w-auto flex lg:-translate-y-1/2 lg:top-1/2 place-items-center duration-300 $\{menuMobile ? 'opacity-100' : 'opacity-0 lg:opacity-100'}\`}&gt;
        &lt;button className="absolute bottom-0 left-0 lg:relative bg-sky-200 hover:bg-white text-slate-800 dark:bg-slate-700 dark:hover:bg-sky-300 dark:text-white dark:hover:text-slate-900 w-32 lg:w-20 px-4 lg:px-2 py-2 lg:py-1 rounded-md mx-2 lg:mx-1 text-base lg:text-sm duration-300"&gt;Sign-in&lt;/button&gt;
        &lt;button className="absolute bottom-0 right-0 lg:relative bg-sky-300 hover:bg-white text-slate-800 dark:bg-sky-400 dark:hover:bg-sky-200 dark:text-slate-900 w-32 lg:w-20 px-4 lg:px-2 py-2 lg:py-1 rounded-md mx-2 lg:mx-1 text-base lg:text-sm duration-300"&gt;Sign-up&lt;/button&gt;
      &lt;/div&gt;

    &lt;/div&gt;
  );
}`
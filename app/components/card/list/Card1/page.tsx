'use client'
import * as Icon from 'react-bootstrap-icons';
import { useEffect } from 'react';
import { useDataContext } from "@/app/_context/data";
import {codeStringNext} from "../../list/Card1/codeNext";
import {codeStringJs} from "../../list/Card1/codeJs";
import {codeStringReact} from "../../list/Card1/codeReact";

export default function Card1() {
      const { lang, setCarousel } = useDataContext();
    
      useEffect(()=> {
        if(lang === 'js'){
          setCarousel(prevState => 
            prevState.map(item => 
              item.carousel1 ? { carousel1: { code: codeStringJs } } : item
            )
          );
        }else if(lang === 'react'){
          setCarousel(prevState => 
            prevState.map(item => 
              item.carousel1 ? { carousel1: { code: codeStringReact } } : item
            )
          );
        }else{
          setCarousel(prevState => 
            prevState.map(item => 
              item.carousel1 ? { carousel1: { code: codeStringNext } } : item
            )
          );
        }
    }, [lang, setCarousel])

  return (
    <div className="h-auto w-56 rounded-lg relative cursor-pointer overflow-hidden hover:scale-105 duration-300 m-auto">
        <div className="w-full h-32 bg-center bg-cover" style={{backgroundImage: `url('https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg')`,}}></div>
        <div className="w-full h-auto min-h-32 light:bg-white dark:bg-slate-600 bg-slate-50 p-3 pb-9 duration-300">
            <h1 className="text-xl font-bold dark:text-white text-slate-800">Title of post</h1>
            <p className="truncate dark:text-white text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum
            inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque
            obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!
            </p>
            <p className='text-sm my-2 dark:text-white text-slate-900 duration-300'>Ver mais</p>
            <hr className='dark:border-slate-400 border-slate-600 duration-300'/>
        </div>
        <div className="absolute bottom-0 w-full h-auto text-left px-3 pb-2 dark:text-slate-400 text-slate-800 text-sm flex place-items-center duration-300"><Icon.Award className='mr-1'/>01/01/2025</div>
    </div>
  )
}
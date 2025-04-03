'use client'
import Nav from '@/app/_components/Home/Nav'
import Menu from '@/app/_components/Home/Menu'
import { useDataContext } from "@/app/_context/data";
export default function App(){
  const { menuOpen } = useDataContext();

  return(
    <>
      <Nav />
      <Menu />
      
      <div className={`h-[43rem] flex justify-center mt-20 ${menuOpen?'w-[86%]':'w-full'} ml-auto duration-300`}>
        <div className="inline">
        <div className='w-[90%] 2xl:w-[65%] m-auto text-center'>
            <h1 className='font-bold text-3xl md:text-4xl text-slate-500 dark:text-slate-300'>Good News!</h1>
            <p className='text-left mt-4 w-[85%] m-auto'>{`- We are working on more components and pages that will be free for users.`}</p>
            <p className='text-left mt-4 w-[85%] m-auto'>{`- We are also working on providing documentation for each component, so that there is more clarity when styling them.`}</p>
            <p className='text-left mt-4 w-[85%] m-auto'>{`- An animated version of components is being developed, which will be a subscription plan, and will include customer support, and componentization integrated into the pages, more details will be revealed in the next update on 01/06/2025.`}</p>
            <p className='text-left mt-4 w-[85%] m-auto'>{`- "HTML and JS components code version" is being developed.`}</p>
            <p className='text-left mt-4 w-[85%] m-auto'>{`- Component bugs are being fixed.`}</p>
        </div>
       
          </div>
      </div>
    </>
  )
}
'use client'
//import Test from './test/page'
import Nav from '@/app/_components/Home/Nav'
import Menu from '@/app/_components/Home/Menu'
import { useDataContext } from "@/app/_context/data";
export default function App(){
    const { menuOpen } = useDataContext();
  return(
    <>
      <Nav />
      <Menu />
      {/* <Test /> */}
      <div className={`h-96 mt-20 w-[95%] sm:w-[85%] xl:w-[75%] m-auto duration-300 ${menuOpen ? 'xl:mr-[3.5%] 2xl:mr-[5%] lg:float-end':' mt-20'}`}>
        <h1 className='text-2xl text-center font-bold'>Planit Components v1.0</h1>
        <p className='text-center mt-2'>Welcome to the world of Planit! Here, you'll find the right components for every occasion. We offer a variety of ready-to-use components that are 100% customizable, just copy and use them however you like! We also provide a range of ready-made templates for your project.</p>
        <p className='text-center mt-2'>Ready to get started?</p>
        <div className="bg-slate-800 h-32 w-96 m-auto mt-10 flex justify-center place-items-center">npm install react-bootstrap-icons</div>
      </div>
    </>
  )
}
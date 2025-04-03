'use client'
import Nav from '@/app/_components/Home/Nav'
import Menu from '@/app/_components/Home/Menu'
import * as Icon from 'react-bootstrap-icons'
import { useDataContext } from "../../_context/data"
import Blog from './blog'

export default function App() {
  const { menuOpen } = useDataContext()

  const handleDownload = () => {
    const zipFilePath = '/blog.zip' // Caminho do arquivo zip na pasta pública
    const link = document.createElement('a')
    link.href = zipFilePath
    link.setAttribute('blog', 'blog.zip')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Nav />
      <Menu />
      <div 
        onClick={handleDownload} 
        className="hidden md:flex fixed z-[200] top-4 right-28 w-auto px-3 py-1 bg-sky-300 rounded-md text-slate-800 cursor-pointer hover:bg-slate-600 hover:text-slate-200 duration-300 justify-center place-items-center gap-3"
      >
        <Icon.Download /> Download Example
      </div>
      <div 
        onClick={handleDownload} 
        className="flex md:hidden fixed z-[200] bottom-4 right-4 w-auto px-3 py-1 bg-sky-300 rounded-md text-slate-800 cursor-pointer hover:bg-slate-600 hover:text-slate-200 duration-300 justify-center place-items-center gap-3"
      >
        <Icon.Download /> Download Example
      </div>
      <div className={`${menuOpen ? 'md:w-[70%] lg:w-[80%] 2xl:w-[85%] w-[100%]' : 'w-[100%]'} ml-auto duration-300`}>
        <Blog />
      </div>
    </>
  )
}

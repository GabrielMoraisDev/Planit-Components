'use client'
import * as Icon from 'react-bootstrap-icons';
import { useState } from 'react';

export default function Nav1() {
  const cardData = [
    {
      title: "Next Post",
      image: "https://img.freepik.com/vetores-gratis/paisagem-montanhosa-de-design-plano_23-2149172160.jpg?t=st=1739410824~exp=1739414424~hmac=d0f36143a64390159e168353ff055b63f381b7224e350663c59db994e18d731f&w=1380",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
    },
    {
      title: "Title of another post",
      image: "https://img.freepik.com/vetores-gratis/tema-de-fundo-de-paisagem-natural_23-2148650336.jpg?t=st=1739410861~exp=1739414461~hmac=2b0e45dba5dcfdda7d49e88982db3c9461e83c6b0a14f7f5179eeeaaa7bad495&w=1380",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
    },
    {
      title: "Hello World",
      image: "https://img.freepik.com/vetores-gratis/desenho-plano-desenhado-a-mao-paisagem-montanhosa_23-2149158786.jpg?t=st=1739410959~exp=1739414559~hmac=9edbb80ea32f6c660b4ad86e059b2ed6c353d54751974f97a733696aaedc3698&w=1380",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius laborum inventore earum sunt? Blanditiis quo saepe, nulla possimus, cumque obcaecati nam modi ex inventore, rem voluptatibus! Rerum, minus eligendi!"
    }
  ];
  
  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
  };

  const [hovered, setHovered] = useState(-1)
    const [hovered1, setHovered1] = useState(-1)
    const [hovered2, setHovered2] = useState(-1)
    const [hovered3, setHovered3] = useState(-1)
    const [hovered4, setHovered4] = useState(-1)
    const [timeouts, setTimeouts] = useState<number[]>([])
  
    function hoveredCard(id:number){
      const timeout4 = setTimeout(()=>setHovered4(id), 200) as unknown as number
      const timeout3 = setTimeout(()=>setHovered3(id), 400) as unknown as number
      const timeout2 = setTimeout(()=>setHovered2(id), 600) as unknown as number   
      const timeout1 = setTimeout(()=>setHovered1(id), 800) as unknown as number
      setTimeouts([timeout1, timeout2, timeout3, timeout4])
    }  
  
    function hoveredClear(){
      timeouts.forEach(timeout => clearTimeout(timeout))
      setHovered1(-1)
      setHovered2(-1)
      setHovered3(-1)
      setHovered4(-1)
    }  

  return (
    <div className='bg-slate-200 lg:bg-slate-200'>
      <div className="w-full h-[22rem] bg-slate-800 bg-center bg-cover flex justify-start place-items-center text-slate-900" 
      style={{backgroundImage: `url('https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg')`,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backgroundBlendMode: "overlay",}}>
        <div className="inline mt-[-8rem] ml-12">
          <h1 className='text-3xl font-extrabold'>Title of post here!</h1>
          <p className='text-xl font-bold'>And subtitle, as well</p>
          <p className='text-base font-bold w-[60%] mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi possimus consectetur animi reiciendis dolorum.</p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent via-transparent to-slate-200 w-full h-72 mt-[-18rem]"></div>
      <div className="w-[97%] h-auto bg-white m-auto mt-[-8rem] rounded-md py-5 px-8 flex gap-5">
        <div className="lg:w-[70%] text-base h-auto text-slate-800">

          <h1 className='mt-3 text-xl font-bold'>Lorem ipsum dolor</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum earum non cupiditate, corrupti rerum perspiciatis ut quaerat doloribus ipsa ea deleniti ipsum praesentium soluta cum amet, aut maxime possimus?</p>

          <div className="flex gap-4">

            <div className="my-3 w-[50%] h-auto bg-white p-3 rounded-md border-slate-300 hover:border-slate-400 cursor-pointer border flex place-items-center justify-center duration-300">
              <div className="h-20 w-20 bg-slate-200 text-slate-500 rounded-md flex justify-center place-items-center">
                <Icon.FileEarmarkImage className='text-3xl'/>
              </div>
              <div className="inline ml-auto">
                <h1 className='text-right lg:text-lg xl:text-xl font-bold mr-2'>Here, one feature</h1>
                <p className='text-right text-base mr-2'>Nice example</p>
              </div>
            </div>

            <div className="my-3 w-[50%] h-auto bg-white p-3 rounded-md border-slate-300 hover:border-slate-400 cursor-pointer border flex place-items-center justify-center duration-300">
              <div className="h-20 w-20 bg-slate-200 text-slate-500 rounded-md flex justify-center place-items-center">
                <Icon.FileEarmarkImage className='text-3xl'/>
              </div>
              <div className="inline ml-auto">
                <h1 className='text-right lg:text-lg xl:text-xl font-bold mr-2'>And another feature</h1>
                <p className='text-right text-base mr-2'>Awesome!</p>
              </div>
            </div>

          </div>

          <h1 className='mt-8 text-xl font-bold'>Lorem ipsum dolor</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum earum non cupiditate, corrupti rerum perspiciatis ut quaerat doloribus ipsa ea deleniti ipsum praesentium soluta cum amet, aut maxime possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam recusandae sint id perspiciatis veniam quis atque veritatis ipsam architecto, autem repudiandae cumque odit aspernatur.</p>

          <div style={{backgroundImage: `url("https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg")`}} className='w-full h-72 rounded-md my-5 bg-cover bg-center'></div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos aliquid dolorum voluptatum, excepturi eaque minima totam iusto, odio et suscipit libero reiciendis placeat vero. Ratione corrupti exercitationem repudiandae delectus?</p>

          <h1 className='mt-8 text-xl font-bold'>Lorem ipsum dolor</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum earum non cupiditate, corrupti rerum perspiciatis ut quaerat doloribus ipsa ea deleniti ipsum praesentium soluta cum amet, aut maxime possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam recusandae sint id perspiciatis veniam quis atque veritatis ipsam architecto, autem repudiandae cumque odit aspernatur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum earum non cupiditate, corrupti rerum perspiciatis ut quaerat doloribus ipsa ea deleniti ipsum praesentium soluta cum amet, aut maxime possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam recusandae sint id perspiciatis veniam quis atque veritatis ipsam architecto, autem repudiandae cumque odit aspernatur.</p>

        <hr className='my-6 border-slate-300'/>

        <h1 className='text-center font-bold text-xl mt-14 text-slate-700'>More News Bellow!</h1>
        <div className="w-full bg-white dark:bg-slate-900 rounded-t-lg py-3 grid grid-cols-1 lg:grid-cols-3 justify-center gap-4">
          {cardData.map((card, index) => (
            <div key={index} className='w-full h-52 lg:h-52 xl:h-52 border border-slate-300 dark:border-slate-700 rounded-lg relative cursor-pointer overflow-hidden duration-300 dark:bg-slate-800 bg-white hover:bg-slate-200 dark:hover:bg-slate-700 m-0' onMouseEnter={()=>{setHovered(index);hoveredCard(index)}} onMouseLeave={()=>{setHovered(-1);hoveredClear()}}>
              <div className={`w-full ${hovered === index?'h-full bg-right':'h-full bg-left'} duration-1000 bg-cover absolute top-0 left-0 z-10 bg-slate-200`}>
                <div className={`w-full h-full flex justify-center place-items-center ${hovered === index?'bg-white/60 dark:bg-black/50 text-slate-300':'bg-trasnparent dark:bg-black/30 text-slate-500'} duration-300`}>
                  <Icon.FileEarmarkImage className='text-6xl mt-[-2.3rem]'/>
                </div>
                  <h1 className={`truncate lg:text-lg absolute bottom-0 bg-white dark:bg-transparent w-full text-slate-800 py-2 left-0 text-xl font-bold dark:text-white ${hovered === index?'opacity-0 left-0 duration-300':'left-0 px-4 opacity-700 duration-300'} z-20`}>{card.title}</h1>
                  <p className={`text-center w-[80%] truncate text-2xl font-bold absolute top-6 text-slate-800 dark:text-white ${hovered4 === index?'opacity-100 right-6 lg:right-5 xl:right-7':'opacity-0 right-0'} duration-300`}>{card.title}</p>
                  <p className={`text-sm lg:text-sm xl:text-base text-center w-[80%] font-bold absolute top-16 text-slate-800 dark:text-slate-300 ${hovered3 === index?'opacity-100 right-6 lg:right-5 xl:right-7':'opacity-0 right-[-0.5rem]'} duration-300`}>{truncateDescription(card.description, 80)}</p>
                  <p className={`underline text-center w-[80%] text-sm font-bold absolute bottom-10 text-slate-800 dark:text-slate-400 ${hovered2 === index?'opacity-100 right-6 lg:right-5 xl:right-7':'opacity-0 right-[-0.5rem]'} duration-300`}>See More</p>
                  <p className={`text-center w-[80%] flex justify-center place-items-center text-sm font-bold absolute bottom-5 text-slate-800 dark:text-slate-400 ${hovered1 === index?'opacity-100 right-6 lg:right-5 xl:right-7':'opacity-0 right-[-0.5rem]'} duration-300`}><Icon.Calendar className='mr-1'/>01/01/2025</p>
                </div>
            </div>
            ))}
          </div>
          <p className='text-center flex justify-center place-items-center gap-2 mt-1 hover:opacity-60 cursor-pointer text-sm duration-300'>All News <Icon.ArrowRight/></p>
        </div>

        <div className="w-[30%] sticky top-5 h-1 hidden lg:inline">
          <h1 className='ml-3 font-bold text-xl mb-3'>Latest News</h1>
          <div className="flex place-items-center w-full border border-white hover:border-slate-400 p-2 rounded-md duration-300 cursor-pointer">
            <div className="min-w-20 h-20 bg-slate-200 text-slate-500 rounded-md flex justify-center place-items-center">
              <Icon.FileEarmarkImage className='text-3xl'/>
            </div>
            <div className="inline ml-4">
              <h1 className='mr-auto lg:max-w-40 xl:max-w-52 font-bold truncate text-slate-900'>Title here</h1>
              <p className='mr-auto lg:max-w-40 xl:max-w-52 truncate text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nam nostrum ipsa, ipsam architecto fugiat ratione autem distinctio reiciendis doloremque numquam. Dicta hic corrupti minima ullam ad enim iure numquam.</p>
              <a href='#' className="text-sm underline rounded-md text-slate-700">See More</a>
            </div>
          </div>

          <div className="flex mt-2 place-items-center w-full border border-white hover:border-slate-400 p-2 rounded-md duration-300 cursor-pointer">
            <div className="min-w-20 h-20 bg-slate-200 text-slate-500 rounded-md flex justify-center place-items-center">
              <Icon.FileEarmarkImage className='text-3xl'/>
            </div>
            <div className="inline ml-4">
              <h1 className='mr-auto lg:max-w-40 xl:max-w-52 font-bold truncate text-slate-900'>Title here</h1>
              <p className='mr-auto lg:max-w-40 xl:max-w-52 truncate text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nam nostrum ipsa, ipsam architecto fugiat ratione autem distinctio reiciendis doloremque numquam. Dicta hic corrupti minima ullam ad enim iure numquam.</p>
              <a href='#' className="text-sm underline rounded-md text-slate-700">See More</a>
            </div>
          </div>

          <div className="flex mt-2 place-items-center w-full border border-white hover:border-slate-400 p-2 rounded-md duration-300 cursor-pointer">
            <div className="min-w-20 h-20 bg-slate-200 text-slate-500 rounded-md flex justify-center place-items-center">
              <Icon.FileEarmarkImage className='text-3xl'/>
            </div>
            <div className="inline ml-4">
              <h1 className='mr-auto lg:max-w-40 xl:max-w-52 font-bold truncate text-slate-900'>Title here</h1>
              <p className='mr-auto lg:max-w-40 xl:max-w-52 truncate text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nam nostrum ipsa, ipsam architecto fugiat ratione autem distinctio reiciendis doloremque numquam. Dicta hic corrupti minima ullam ad enim iure numquam.</p>
              <a href='#' className="text-sm underline rounded-md text-slate-700">See More</a>
            </div>
          </div>

          <p className='text-center flex justify-center place-items-center gap-2 mt-2 hover:opacity-60 cursor-pointer text-sm duration-300'>All News <Icon.ArrowRight/></p>

          <div className="ml-2">
            <div className="max-w-full h-28 bg-slate-200 mt-5 rounded-md justify-center place-items-center flex text-slate-500">
              <Icon.FileEarmarkImage className='text-3xl'/>
            </div>
            <h1 className='font-bold text-lg mt-3 w-full truncate'>Another title?</h1>
            <p className='max-w-full truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde optio repellat, modi, consequatur, consectetur eveniet nisi ex quos eaque odio sit in et veniam natus nesciunt minima consequuntur. Ut, obcaecati?</p>
            <a href='#' className="text-sm underline rounded-md text-slate-700">See More</a>
          </div>

        </div>
      </div>
    </div>    
  );
}

'use client'
import Image from 'next/image';
import * as Icon from 'react-bootstrap-icons'
export default function Landing(){
  return(
    <>
    <section className='border-t border-slate-300 w-full h-16 md:h-20 fixed top-0 right-0 bg-white z-50 shadow-sm duration-300'>
        <div className="hidden lg:flex items-center w-full h-full mx-auto px-4">
          <Image width={500} height={500} src="/planit.png" alt="Planit Logo" className="w-12 ml-5"/>
      
          <ul className="flex ml-8 lg:ml-3 text-slate-700 lg:text-sm xl:text-[1vw] 2xl:text-[0.8vw]">
            <a href="#"><li className="ml-10 lg:ml-5 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-700 duration-300">Home</li></a>
            <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-700 duration-300">Products</li></a>
            <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-700 duration-300">Certifications</li></a>
            <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-700 duration-300">Customers</li></a>
            <a href="#"><li className="ml-10 lg:ml-8 xl:ml-8 2xl:ml-12 cursor-pointer opacity-100 hover:text-sky-700 duration-300">About</li></a>
          </ul>
        </div>

        <div className="absolute left-0 w-10 h-10 -translate-y-1/2 top-1/2 ml-5 flex justify-center place-items-center lg:hidden">
          <Icon.List id='list' className="text-2xl text-slate-500 z-20 opacity-100 absolute duration-300"/>
          <Icon.X id='close' className="text-2xl text-slate-500 z-10 opacity-0 absolute duration-300"/>
        </div>
        <Image width={500} height={500} src="/planit.png" alt="Planit Logo" className="absolute right-3 -translate-y-1/2 top-1/2 w-10 h-10 md:hidden"/>
        <div className="absolute right-0 w-auto h-10 -translate-y-1/2 top-1/2 mr-5 flex justify-center place-items-center">
          <div className="hidden md:flex w-24 h-9 text-sm text-white font-bold bg-sky-400 hover:bg-sky-500 mr-2 md:ml-5 lg:ml-96 justify-center place-items-center text-md rounded-full duration-300 cursor-pointer lg:w-20 lg:h-8 lg:text-xs xl:w-24 xl:h-9 xl:text-[1vw] 2xl:text-[0.75vw]">Sign-in</div>
          <div className="hidden md:flex w-24 h-9 text-sm text-white font-bold bg-sky-600 hover:bg-sky-500 mr-16 md:ml-5 lg:mr-0 justify-center place-items-center text-md rounded-full duration-300 cursor-pointer lg:w-20 lg:h-8 lg:text-xs xl:w-24 xl:h-9 xl:text-[1vw] 2xl:text-[0.75vw]">Sign-out</div> 
          <Icon.Whatsapp className="hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 mx-8 lg:mx-4 xl:mx-7 lg:text-base xl:text-md 2xl:text-xl"/>
          <Icon.Search className="hidden md:block cursor-pointer text-xl text-slate-500 hover:text-sky-600 duration-300 mr-6 lg:mr-1 xl:mr-6 lg:text-base xl:text-md 2xl:text-xl"/>
        </div>
        
        <div id="menu" className="w-full max-h-0 mt-14 bg-white duration-300 overflow-hidden lg:hidden">
          <ul className="flex flex-col justify-center items-center h-full mt-5">
            <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Home</li><hr className="w-[80vw]"/></a>
            <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Products</li><hr className="w-[80vw]"/></a>
            <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Certifications</li><hr className="w-[80vw]"/></a>
            <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">Customers</li><hr className="w-[80vw]"/></a>
            <a href="#"><li className="w-full h-16 flex justify-center place-items-center text-slate-700 hover:text-sky-600 duration-300">About</li><hr className="w-[80vw]"/></a>
          </ul>
        </div>
    </section>

    <div className="h-16"></div>
  
  
    <section className="lg:flex jusitfy-center place-items-center relative bg-gradient-to-b from-slate-300 to-slate-200 lg:h-[26rem] 2xl:h-[30rem] overflow-hidden">
      <div className="w-full lg:h-[30rem] bg-transparent lg:z-40 lg:mt-[3rem] mt-8 2xl:ml-8 jusitfy-center place-items-center m-auto">
        <Image width={500} height={500} src="/planit.png" alt="Planit Logo" className="w-32"/>
        <h1 className="mt-3 md:mt-5 md:pt-10 lg:pt-0 text-2xl font-bold m-auto text-center w-[90%] lg:text-3xl lg:mt-2 2xl:text-4xl 2xl:mt-7 text-slate-500">This is Planit Components!</h1>
        <p className="w-[85%] lg:w-[80%] xl:w-[60%] m-auto text-center mt-2 2xl:mt-2 2xl:text-xl text-slate-600">{"See how easy it is to use? With these ready-made pages, you'll save a lot of time and effort. Planit's ready-made pages are perfect for every taste, responsive, and stylish. They are the best choice for anyone who wants something fast and practical."}</p>
        <div className="inline lg:flex justify-center lg:place-items-center 2xl:mt-2">
          <div className="w-44 lg:my-6 lg:mx-3 py-3 flex justify-center rounded-full bg-sky-400 font-bold text-white m-auto mb-4 mt-8 hover:bg-white hover:text-sky-800 cursor-pointer duration-300">Awesome!</div>
          <div className="lg:w-44 lg:my-6 lg:mx-3 w-44 py-3 flex justify-center rounded-full border-2 border-sky-400 hover:border-white font-bold text-sky-400 m-auto my-4 hover:bg-sky-700 hover:text-white cursor-pointer duration-300">See more</div>
        </div>
      </div>
    </section>


    <section className="pb-12 mt-16">
      <div className="2xl:w-[85%] xl:w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          <div className="bg-white rounded-lg shadow-lg pb-6 text-center justify-center overflow-hidden lg:relative lg:pb-20">
            <div className="w-full h-60 object-cover bg-slate-300 flex justify-center place-items-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
            <h3 className="text-xl font-semibold mt-6 mb-4 w-[85%] m-auto text-slate-500">Example 1</h3>
            <p className="mt-2 text-gray-600 w-[85%] m-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nisi rem eveniet voluptatibus quas ut soluta porro sed natus, velit odio, earum autem impedit rerum quia nemo laudantium voluptate!</p>
            <button className="mt-8 mb-2 text-center font-bold text-sky-400 hover:text-sky-300 duration-300 uppercase lg:absolute lg:bottom-5 lg:-translate-x-1/2 lg:left-1/2">View example</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg pb-6 text-center justify-center overflow-hidden lg:relative lg:pb-20">
            <div className="w-full h-60 object-cover bg-slate-300 flex justify-center place-items-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
            <h3 className="text-xl font-semibold mt-6 mb-4 w-[85%] m-auto text-slate-500">Example 2</h3>
            <p className="mt-2 text-gray-600 w-[85%] m-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nisi rem eveniet voluptatibus quas ut soluta porro sed natus, velit odio, earum autem impedit rerum quia nemo laudantium voluptate!</p>
            <button className="mt-8 mb-2 text-center font-bold text-sky-400 hover:text-sky-300 duration-300 uppercase lg:absolute lg:bottom-5 lg:-translate-x-1/2 lg:left-1/2">View example</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg pb-6 text-center justify-center overflow-hidden lg:relative lg:pb-20">
            <div className="w-full h-60 object-cover bg-slate-300 flex justify-center place-items-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
            <h3 className="text-xl font-semibold mt-6 mb-4 w-[85%] m-auto text-slate-500">Example 3</h3>
            <p className="mt-2 text-gray-600 w-[85%] m-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nisi rem eveniet voluptatibus quas ut soluta porro sed natus, velit odio, earum autem impedit rerum quia nemo laudantium voluptate!</p>
            <button className="mt-8 mb-2 text-center font-bold text-sky-400 hover:text-sky-300 duration-300 uppercase lg:absolute lg:bottom-5 lg:-translate-x-1/2 lg:left-1/2">View example</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg pb-6 text-center justify-center overflow-hidden lg:relative lg:pb-20">
            <div className="w-full h-60 object-cover bg-slate-300 flex justify-center place-items-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
            <h3 className="text-xl font-semibold mt-6 mb-4 w-[85%] m-auto text-slate-500">Example 4</h3>
            <p className="mt-2 text-gray-600 w-[85%] m-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nisi rem eveniet voluptatibus quas ut soluta porro sed natus, velit odio, earum autem impedit rerum quia nemo laudantium voluptate!</p>
            <button className="mt-8 mb-2 text-center font-bold text-sky-400 hover:text-sky-300 duration-300 uppercase lg:absolute lg:bottom-5 lg:-translate-x-1/2 lg:left-1/2">View example</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg pb-6 text-center justify-center overflow-hidden lg:relative lg:pb-20">
            <div className="w-full h-60 object-cover bg-slate-300 flex justify-center place-items-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
            <h3 className="text-xl font-semibold mt-6 mb-4 w-[85%] m-auto text-slate-500">Example 5</h3>
            <p className="mt-2 text-gray-600 w-[85%] m-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nisi rem eveniet voluptatibus quas ut soluta porro sed natus, velit odio, earum autem impedit rerum quia nemo laudantium voluptate!</p>
            <button className="mt-8 mb-2 text-center font-bold text-sky-400 hover:text-sky-300 duration-300 uppercase lg:absolute lg:bottom-5 lg:-translate-x-1/2 lg:left-1/2">View example</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg pb-6 text-center justify-center overflow-hidden lg:relative lg:pb-20">
            <div className="w-full h-60 object-cover bg-slate-300 flex justify-center place-items-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
            <h3 className="text-xl font-semibold mt-6 mb-4 w-[85%] m-auto text-slate-500">Example 6</h3>
            <p className="mt-2 text-gray-600 w-[85%] m-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nisi rem eveniet voluptatibus quas ut soluta porro sed natus, velit odio, earum autem impedit rerum quia nemo laudantium voluptate!</p>
            <button className="mt-8 mb-2 text-center font-bold text-sky-400 hover:text-sky-300 duration-300 uppercase lg:absolute lg:bottom-5 lg:-translate-x-1/2 lg:left-1/2">View example</button>
          </div>

        </div>
      </div>
    </section>
      
    <section>
    <div className="lg:flex lg:w-[95%] 2xl:w-[82%] 2xl:mt-10 2xl:m-auto lg:mt-12">
      <div className="w-full h-96 lg:ml-11 2xl:ml-1">
        <h1 className="text-2xl text-slate-500 font-bold text-center lg:text-left lg:ml-6 2xl:ml-0">Some Features</h1>
        <p className="text-center w-[90%] lg:text-left lg:mt-3 m-auto text-slate-700 lg:ml-6 2xl:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati facilis error autem ipsum animi saepe deleniti libero optio rerum, similique sequi dolore unde excepturi, vitae reprehenderit voluptas sunt culpa?</p>
        <div className="grid grid-cols-2 grid-rows-4 mt-6 gap-2 w-[80%] m-auto justify-center place-items-center lg:ml-0 2xl:ml-[-4rem]">
          <div className="m-1 text-base w-40 lg:w-52 h-12 text-slate-500 flex place-items-center "><Icon.Lightbulb className="text-2xl  mr-3"/>Imagination</div>
          <div className="m-1 text-base w-40 lg:w-52 h-12 text-slate-500 flex place-items-center "><Icon.Award className="text-2xl  mr-3"/>Awards</div>
          <div className="m-1 text-base w-40 lg:w-52 h-12 text-slate-500 flex place-items-center "><Icon.List className="text-2xl  mr-3"/>Lists</div>
          <div className="m-1 text-base w-40 lg:w-52 h-12 text-slate-500 flex place-items-center "><Icon.CardHeading className="text-2xl mr-3"/>Notes</div>  
          <div className="m-1 text-base w-40 lg:w-52 h-12 text-slate-500 flex place-items-center "><Icon.Cart className="text-2xl  mr-3"/>Products</div>
          <div className="m-1 text-base w-40 lg:w-52 h-12 text-slate-500 flex place-items-center "><Icon.Plus className="text-2xl  mr-3"/>More</div>
          
        </div>
      </div>
      <div className="w-full lg:w-[70%] lg:h-[21rem] lg:rounded-md h-52 bg-slate-300 mb-12 bg-cover bg-center flex justify-center place-items-center" style={{backgroundImage: "url('')"}}>
        <Icon.FileEarmarkImage className="bi bi-file-earmark-image text-slate-400 text-[5rem]"/>
      </div>
    </div>
    <div className="w-full h-12 bg-slate-100 mt-3 mb-10 shadow-divider"></div>
    </section>

    <section>
    <div className="2xl:w-[60%] 2xl:mt-5 lg:w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-500 text-center">{"Here's a Section"}</h2>
      <p className="text-center m-auto text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur aliquam ratione voluptate consequatur similique laudantium quos, et unde alias magni nulla voluptatem dolorum, aperiam rem adipisci quaerat nisi ipsa?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

        <div className="pb-6 text-center justify-center overflow-hidden">
          <div className="bg-slate-300 rounded-full w-44 h-44 object-cover m-auto flex place-items-center justify-center">
            <Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-slate-900 w-[85%] m-auto">Example 1</h3>
          <button className="mb-2 text-center font-bold text-white uppercase bg-sky-400 py-2 px-5 rounded-full hover:bg-sky-800 duration-300">See more</button>
        </div>

        <div className="pb-6 text-center justify-center overflow-hidden">
          <div className="bg-slate-300 rounded-full w-44 h-44 object-cover m-auto flex place-items-center justify-center">
            <Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-slate-900 w-[85%] m-auto">Example 2</h3>
          <button className="mb-2 text-center font-bold text-white uppercase bg-sky-400 py-2 px-5 rounded-full hover:bg-sky-800 duration-300">See more</button>
        </div>

        <div className="pb-6 text-center justify-center overflow-hidden">
          <div className="bg-slate-300 rounded-full w-44 h-44 object-cover m-auto flex place-items-center justify-center">
            <Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-slate-900 w-[85%] m-auto">Example 3</h3>
          <button className="mb-2 text-center font-bold text-white uppercase bg-sky-400 py-2 px-5 rounded-full hover:bg-sky-800 duration-300">See more</button>
        </div>

      </div>
    </div>
    </section>

    <section className="mt-3 mb-10 border-t border-slate-300">
      <div className="max-w-7xl lg:w-[100%] xl:w-[75%] mx-auto text-center pt-2 pb-8 sm:px-6 lg:px-8 mt-4 lg:flex lg:relative">
        <div className="lg:inline">
          <div className="lg:flex lg:place-items-center lg:justify-center">
            <Icon.Whatsapp className="text-5xl text-sky-400 mr-3 lg:mt-7"/>
            <div className="lg:inline">
            <h2 className="text-2xl font-bold text-slate-600 lg:text-left text-center mt-4 lg:mt-6 w-[80%] m-auto lg:ml-5">Do you need quick assistance?</h2>
              <p className="mt-4 text-gray-600 mx-4 lg:ml-5 lg:mt-0">
                Clique         
                <label className="hidden lg:inline">Click beside</label> 
                <label className="md:inline lg:hidden">Click below</label> 
                and talk to one of our specialists via WhatsApp.
              </p>
            </div>
          </div>
        </div>
        <button className="m-auto text-center lg:absolute lg:right-12 lg:mt-10 mt-4 bg-sky-400 hover:bg-sky-800 text-white py-2 px-5 rounded-full duration-300">Falar via WhatsApp</button>
      </div>
      <div className="w-full h-12 bg-slate-100 mt-3 shadow-divider"></div>
    </section>

    <section className="pb-12 pt-2 mt-[-1.3rem] lg:mx-9 2xl:mx-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-500 text-center mt-7">Product Examples</h2>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 2xl:w-[80%] 2xl:m-auto 2xl:mt-10">

            <div className="bg-white px-6 border rounded-lg 2xl:rounded-md relative pb-10 w-[90%] lg:w-full h-auto shadow-lg 2xl:w-[17rem] overflow-hidden m-auto text-center">
              <div className="w-full lg:w-[70%] lg:my-8 lg:m-auto h-44 object-cover rounded-sm 2xl:rounded-md flex place-items-center justify-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
              <h3 className="text-xl font-semibold mt-4 text-sky-400 w-[90%] m-auto">Example 1</h3>
              <button className="m-auto text-center mt-4 bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-full duration-300 text-xl lg:text-base">See more</button>
              <p className="mt-4 text-slate-600 m-auto text-center flex justify-center place-items-center cursor-pointer hover:opacity-55 duration-300 lg:text-sm"><Icon.Whatsapp className="text-xl text-slate-600 mr-2"/>WHATSAPP</p>
            </div>
      
            <div className="bg-white px-6 border rounded-lg 2xl:rounded-md relative pb-10 w-[90%] lg:w-full h-auto shadow-lg 2xl:w-[17rem] overflow-hidden m-auto text-center">
              <div className="w-full lg:w-[70%] lg:my-8 lg:m-auto h-44 object-cover rounded-sm 2xl:rounded-md flex place-items-center justify-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
              <h3 className="text-xl font-semibold mt-4 text-sky-400 w-[90%] m-auto">Example 2</h3>
              <button className="m-auto text-center mt-4 bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-full duration-300 text-xl lg:text-base">See more</button>
              <p className="mt-4 text-slate-600 m-auto text-center flex justify-center place-items-center cursor-pointer hover:opacity-55 duration-300 lg:text-sm"><Icon.Whatsapp className="text-xl text-slate-600 mr-2"/>WHATSAPP</p>
            </div>

            <div className="bg-white px-6 border rounded-lg 2xl:rounded-md relative pb-10 w-[90%] lg:w-full h-auto shadow-lg 2xl:w-[17rem] overflow-hidden m-auto text-center">
              <div className="w-full lg:w-[70%] lg:my-8 lg:m-auto h-44 object-cover rounded-sm 2xl:rounded-md flex place-items-center justify-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
              <h3 className="text-xl font-semibold mt-4 text-sky-400 w-[90%] m-auto">Example 3</h3>
              <button className="m-auto text-center mt-4 bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-full duration-300 text-xl lg:text-base">See more</button>
              <p className="mt-4 text-slate-600 m-auto text-center flex justify-center place-items-center cursor-pointer hover:opacity-55 duration-300 lg:text-sm"><Icon.Whatsapp className="text-xl text-slate-600 mr-2"/>WHATSAPP</p>
            </div>

            <div className="bg-white px-6 border rounded-lg 2xl:rounded-md relative pb-10 w-[90%] lg:w-full h-auto shadow-lg 2xl:w-[17rem] overflow-hidden m-auto text-center">
              <div className="w-full lg:w-[70%] lg:my-8 lg:m-auto h-44 object-cover rounded-sm 2xl:rounded-md flex place-items-center justify-center"><Icon.FileEarmarkImage className="text-slate-400 text-[5rem]"/></div>
              <h3 className="text-xl font-semibold mt-4 text-sky-400 w-[90%] m-auto">Example 4</h3>
              <button className="m-auto text-center mt-4 bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-full duration-300 text-xl lg:text-base">See more</button>
              <p className="mt-4 text-slate-600 m-auto text-center flex justify-center place-items-center cursor-pointer hover:opacity-55 duration-300 lg:text-sm"><Icon.Whatsapp className="text-xl text-slate-600 mr-2"/>WHATSAPP</p>
            </div>
  
          </div>
        </div>
    </section>

  <hr className="w-[90%] lg:w-full m-auto border-slate-300"/>
    <section className="2xl:w-full mt-10">
      <div className="max-w-7xl mx-auto text-center pt-2 pb-8 sm:px-6 lg:px-8 mt-4">
        <Icon.Envelope className="text-5xl text-sky-400 m-auto"/>
        <h2 className="text-2xl font-bold text-slate-600 text-center mt-4 mx-4">Receive Tips and News!</h2>
        <p className="mt-4 text-gray-600 mx-4 lg:w-[50%] lg:m-auto lg:my-3">Sign up for our <b>newsletter</b> and receive weekly tips about our segment. Just fill in your email in the field below.</p>
        <div className="inline lg:flex lg:w-[60%] lg:m-auto">
          <input type="email" className="mt-4 border-2 rounded-full w-[80%] lg:w-[65%] px-7 py-2 bg-slate-200 lg:rounded-r-none lg:ml-[2.8rem] lg:mr-[-1rem]" placeholder="example@example.com"/>
          <button className="mt-4 bg-sky-400 hover:bg-sky-500 w-[80%] lg:w-[25%] text-white lg:rounded-l-none lg:ml-0 lg:py-3 py-2 px-4 rounded-full duration-300 flex justify-center place-items-center m-auto">Register</button>
        </div>
      </div>
    </section>

    <footer className="text-white py-8 bg-white pb-20">
        <hr className="w-[90%] lg:w-full m-auto border-slate-300"/>

        <div className="lg:flex">
          <div className="hidden lg:flex max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8 justify-center items-center text-gray-500 text-center lg:text-left lg:ml-2">
            <div>
              <Image width={500} height={500} src="/planit.png" alt="Planit Logo" className="mt-[2rem] w-16"/>
            </div>
          </div>

          <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8 flex justify-center items-center text-gray-500 text-center lg:text-left lg:mr-[-16rem]">
            <div>
              <p className="text-sky-400 font-bold text-lg lg:ml-2">Contact</p>
              <p className="text-sm flex place-items-center"><Icon.Whatsapp width={40} height={40} className="text-xl p-2 justify-center place-items-center flex"/>0000-0000</p>
              <p className="text-sm flex place-items-center"><Icon.Telephone width={40} height={40} className="text-xl p-2 justify-center place-items-center flex"/>00 0000-0000</p>
              <p className="text-sm flex place-items-center"><Icon.Envelope width={40} height={40} className="text-xl p-2 justify-center place-items-center flex"/>planitcomponents@gmail.com</p>
            </div>
          </div>
        
          <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8 flex justify-center items-center text-gray-500 text-center lg:text-left lg:mr-2">
            <div>
              <p className="text-sky-400 font-bold text-lg">More</p>
              <p className="text-sm lg:w-52">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, eius! Voluptatem fuga porro eos harum dolorem non pariatur obcaecati repellendus debitis, voluptates hic molestias ratione ea nostrum assumenda natus maxime?</p>
            </div>
          </div>
        </div>

        <hr className="lg:w-[95%] m-auto border-slate-300"/>

        <div className="lg:relative">

          <div className="absolute bottom-[-3rem] left-10 text-gray-600 hidden lg:inline">© 2025 Planit Components.</div>

        <div className="lg:flex lg:absolute lg:right-5">

        <div className="mx-auto mt-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center text-center lg:mr-0 lg:mb-9">
          <label className="text-gray-500 text-left">Follow on social media!</label>
        </div>
        
        <div className="max-w-7xl lg:w-72 mx-auto mt-2 mb-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center w-[80%] m-auto bg-white">
          <Icon.Facebook width={35} height={35} className="hover:bg-gray-600 cursor-pointer rounded-md bg-gray-500 p-2 text-xl text-white justify-center place-items-center flex duration-300"/>
          <Icon.Instagram width={35} height={35} className="hover:bg-gray-600 cursor-pointer rounded-md bg-gray-500 p-2 text-xl text-white justify-center place-items-center flex duration-300"/>
          <Icon.Youtube width={35} height={35} className="hover:bg-gray-600 cursor-pointer rounded-md bg-gray-500 p-2 text-xl text-white justify-center place-items-center flex duration-300"/>
          <Icon.Linkedin width={35} height={35} className="hover:bg-gray-600 cursor-pointer rounded-md bg-gray-500 p-2 text-xl text-white justify-center place-items-center flex duration-300"/>
          <Icon.Whatsapp width={35} height={35} className="hover:bg-gray-600 cursor-pointer rounded-md bg-gray-500 p-2 text-xl text-white justify-center place-items-center flex duration-300"/>
        </div>
      </div>
      </div>

        <div className="inline lg:hidden max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8 justify-between items-center bg-white">
          <Image width={500} height={500} src="/planit.png" alt="Planit Logo" className="w-20 m-auto"/>
          <p className="text-gray-400 text-center lg:text-right mt-3 lg:mt-0">© 2025 Planit Components.</p>
        </div>

    </footer>
    </>

  )
}
import Carousel1 from "./list/Carousel1";
import Nav from "../../_components/Home/Nav";
import Menu from "../../_components/Home/Menu";
export default function CarouselExamples() {
  return (
    <>
    <Nav />
    <Menu />
    <div className="h-16"></div>
    <div className="w-[85%] m-auto float-end pr-16">
    <h1 className="text-center m-auto text-2xl py-10">Exemplos de Carousel</h1>
        <Carousel1></Carousel1>
    </div>
    </>
  )
}
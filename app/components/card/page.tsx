import Card1 from "./list/Card1";
import Nav from "../../_components/Home/Nav";
import Menu from "../../_components/Home/Menu";
export default function CardExamples() {
  return (
    <>
    <Nav />
    <Menu />
    <div className="h-16"></div>
    <div className="w-[85%] m-auto float-end">
    <h1 className="text-center m-auto text-2xl py-10 ml-[-6rem]">Exemplos de Cards</h1>
        <Card1></Card1>
    </div>
    </>
  )
}
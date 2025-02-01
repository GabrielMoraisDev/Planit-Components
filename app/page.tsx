import Nav from "./components/Home/Nav";
import NavExamples from "./components/NavExamples";
import CardExamples from "./components/CardExamples";
import InputExamples from "./components/InputExamples";
import SelectExamples from "./components/SelectExamples";
import CarouselExamples from "./components/CarouselExamples";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#080f1d] h-full w-full">
      <Nav />
      <div className="h-16"></div>
      <NavExamples />
      <CardExamples />
      <InputExamples />
      <SelectExamples />
      <CarouselExamples />
      <div className="h-96"></div>
    </div>
  );
}

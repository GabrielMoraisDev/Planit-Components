import Nav from "./components/Home/Nav";
import NavExamples from "./components/NavExamples";
import CardExamples from "./components/CardExamples";
import InputExamples from "./components/InputExamples";
import SelectExamples from "./components/SelectExamples";

export default function Home() {
  return (
    <>
      <Nav />
      <NavExamples />
      <CardExamples />
      <InputExamples />
      <SelectExamples />
      <div className="h-96"></div>
    </>
  );
}

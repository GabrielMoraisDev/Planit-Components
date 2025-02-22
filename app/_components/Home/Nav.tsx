import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import { useDataContext } from "@/app/_context/data";

export default function Navbar() {
  const { menuOpen } = useDataContext();
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex justify-center bg-slate-300 dark:bg-slate-900 place-items-center z-50 duration-300">
      <Image width={200} height={200} className={`h-[70%] w-auto ${menuOpen && 'lg:ml-60'} duration-300`} src='/planit.png' alt='Logo'></Image>
      <ThemeSwitch />
    </nav>
  );
}

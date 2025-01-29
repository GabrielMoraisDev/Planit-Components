import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full h-16 flex justify-center bg-slate-900 place-items-center">
      <Image width={200} height={200} className='h-[70%] w-auto' src='/planit.png' alt='Logo'></Image>
      <ThemeSwitch />
    </nav>
  );
}

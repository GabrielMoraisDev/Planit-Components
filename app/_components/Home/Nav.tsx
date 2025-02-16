import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex justify-center bg-slate-900 place-items-center z-50">
      <Image width={200} height={200} className='h-[70%] w-auto' src='/planit.png' alt='Logo'></Image>
      <ThemeSwitch />
    </nav>
  );
}

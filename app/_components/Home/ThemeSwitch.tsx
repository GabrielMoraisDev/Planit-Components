import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setIsDark(true);
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className={`absolute h-8 w-16 p-2 ${isDark ? 'bg-slate-700' : 'bg-white'} right-5 transition-all rounded-full`} onClick={toggleTheme}>
      <div className={`w-6 h-6 absolute ${isDark ? 'left-[9%] bg-sky-300' : 'left-[55%] bg-sky-300'} duration-500 -translate-y-1/2 top-1/2 rounded-full flex place-items-center`}>
        <Icon.Sun className={`flex absolute left-1/2 -translate-x-1/2 text-slate-100 ${!isDark ? 'rotate-[0deg] opacity-100' : 'rotate-[-70deg] opacity-0'} duration-500`} />
        <Icon.Moon className={`flex absolute left-1/2 -translate-x-1/2 text-slate-800 ${isDark ? 'rotate-[0deg] opacity-100' : 'rotate-[70deg] opacity-0'} duration-500`} />
      </div>
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons'

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className={`absolute h-8 w-16 p-2 ${isDark ? 'bg-slate-700' : 'bg-slate-300'} right-5 transition-all rounded-full`} onClick={toggleTheme}>
      <div className={`w-6 h-6 absolute ${isDark ? 'left-[9%] bg-slate-300' : 'left-[55%] bg-slate-400'} duration-300 -translate-y-1/2 top-1/2 rounded-full flex justify-center place-items-center`}></div>
        <Icon.Sun className={``}/>
        {isDark}
    </div>
  );
}

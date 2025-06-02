import React, { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';

export const ThemeSwitch: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verifica o tema salvo no localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    setIsDark(newIsDark);
  };

  return (
    <div
      className={`absolute h-8 w-16 p-2 cursor-pointer ${
        isDark ? 'bg-slate-700' : 'bg-slate-200'
      } right-5 transition-all rounded-full`}
      onClick={toggleTheme}
    >
      <div
        className={`w-6 h-6 absolute ${
          isDark ? 'left-[9%] bg-sky-300' : 'left-[55%] bg-sky-300'
        } duration-500 -translate-y-1/2 top-1/2 rounded-full flex place-items-center`}
      >
        <Icon.Sun
          className={`flex absolute left-1/2 -translate-x-1/2 text-slate-100 ${
            !isDark ? 'rotate-[0deg] opacity-100' : 'rotate-[-70deg] opacity-0'
          } duration-500`}
        />
        <Icon.Moon
          className={`flex absolute left-1/2 -translate-x-1/2 text-slate-800 ${
            isDark ? 'rotate-[0deg] opacity-100' : 'rotate-[70deg] opacity-0'
          } duration-500`}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
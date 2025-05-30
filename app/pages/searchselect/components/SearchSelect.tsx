'use client'
import React, { useState, useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";

interface DropSelectProps {
  options: { label: string; value: string }[];
  value?: string;
  name: string;
  onChange: (value: string | null) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  notFoundPlaceholder?: string;
  sizes?: string[];
  borders?: string[];
  spaces?: string[];
  colors?: string[];
  align?: string[];
  iconChevron?: string;
  iconSearch?: string;
  icons?: string[];
  bgSearch?: string;
}

export default function SearchSelect({
  options,
  value,
  name,
  onChange,
  placeholder = "Select your value...",
  searchPlaceholder = "Search...",
  notFoundPlaceholder = "Not found",
  colors = ['', '', ''],
  icons = ['', '', ''],
  borders = ['', '', ''],
  spaces = ['', '', ''],
  sizes = ['', '', ''],
  bgSearch = '',
}: DropSelectProps) {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [selectSearch, setSelectSearch] = useState<string>("");
  const [internalValue, setInternalValue] = useState<string>(value || "");
  const ref = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  if (selectActive) {
    setTimeout(() => {
      searchInputRef.current?.focus();
      const scrollContainer = ref.current?.querySelector('.custom-scrollbar');
      scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }
}, [selectActive]);

  useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSelectActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectActive) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }
  }, [selectActive]);

  const filteredOptions = (options || []).filter((opt) =>
    opt.label.toLowerCase().includes(selectSearch.toLowerCase())
  );

  const handleSelect = (val: string) => {
    setInternalValue(val);
    onChange?.(val);
    setSelectActive(false);
  };

  return (
    <div
      ref={ref}
      className={`
        relative m-10 
        inline-block w-auto
        cursor-pointer 
        duration-300 
        place-items-center 
        justify-start
      `}
      onClick={() => (!selectActive ? setSelectActive(true) : "")}
    >
      <style jsx>{`
        .no-custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #94a3b8;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #64748b;
        }
      `}</style>

      <div className="flex justify-start place-items-center h-10">

        <div className={`${!icons[0] ? 'w-0' : 'w-10'}`}></div>
        
        <div
          className={`absolute left-0 w-full h-full z-10 border-slate-300 border 
          ${!colors[0] ? 'dark:bg-slate-700 dark:text-slate-100 bg-white text-slate-800' : colors[0]}
          ${selectActive ? borders[0].includes('rounded') ? borders[0] : "rounded-t-md" : "rounded-md duration-300"} overflow-hidden`}
          onClick={() => setSelectActive((prev) => !prev)}
        >
          <div className={`${!icons[1] ? 'w-0' : 'w-10'} h-full ml-auto flex justify-center place-items-center duration-300 pointer-events-none`}>
            <div className={`${selectActive ? "rotate-180" : "rotate-0"} duration-300`}>
              {Icon[icons[1] as keyof typeof Icon] && React.createElement(Icon[icons[1] as keyof typeof Icon])}
            </div>
          </div>
          <div className={`${icons[0] === '' ? 'w-0' : 'w-10'} h-full flex justify-center place-items-center absolute left-0 top-0 z-10`}>
            {Icon[icons[0] as keyof typeof Icon] && React.createElement(Icon[icons[0] as keyof typeof Icon])}
          </div>
        </div>

        <input type="hidden" name={name} value={internalValue} required />
        <p className={`${!icons[0] ? 'p-4 pr-9' : 'p-0'} ${internalValue !== "" ? "text-slate-800 dark:text-white" : "text-slate-400"} truncate ${!sizes[0] ? 'w-44' : sizes[0]} select-none z-10`}>
          {internalValue === ""
            ? placeholder
            : options?.find((opt) => opt.value === internalValue)?.label || placeholder}
        </p>

        <div className={`${!icons[0] ? 'w-0' : 'w-10'} ml-auto`}></div>

          <div
            className={`absolute w-full top-10 z-10 bg-slate-200 dark:bg-slate-700 mt-[-1px] custom-scrollbar ${
              selectActive
                ? "max-h-60 rounded-b-md overflow-y-auto border-slate-300 dark:border-slate-500 border-b border-x border-t"
                : "max-h-0"
            } duration-300`}
            style={{ overflowY: filteredOptions.length > 4 ? 'auto' : 'hidden' }}
          >
            <div className={`${!bgSearch ? 'bg-slate-300 dark:bg-slate-600' : bgSearch} sticky top-0 h-auto w-full flex justify-center place-items-center`}>
          <div className={`${!sizes[1] ? 'w-full h-11' : sizes[1]} flex place-items-center sticky top-0 bg-slate-100 dark:bg-slate-600 px-4 ${spaces[1]} ${borders[1]}`}>
            <div className="dark:text-slate-300 mr-3 absolute left-3.5 text-sm">
              {Icon[icons[2] as keyof typeof Icon] && React.createElement(Icon[icons[2] as keyof typeof Icon])}
            </div>
            <input
              ref={searchInputRef}
              type="text"
              className={`${!icons[2] ? 'pl-0' : 'pl-6'} bg-transparent outline-none w-full focus:ring-0 ring-0 border-none focus:outline-none dark:text-slate-300`}
              placeholder={searchPlaceholder}
              onChange={(e) => setSelectSearch(e.target.value)}
            />
          </div>
          </div>

          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, index) => (
              <div key={index}>
                <hr className="border-transparent" />
                <div
                  className={`${!sizes[2] ? 'w-full min-h-11' : sizes[2]} ${!spaces[2] ? 'px-4' : spaces[2]} flex place-items-center cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500 dark:text-slate-300`}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full min-h-11 flex place-items-center justify-center text-slate-400">
              {notFoundPlaceholder}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client'
import { useState, useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";

interface DropSelectProps {
  options: { label: string; value: string }[];
  value?: string;
  name: string;
  onChange: (value: string | null) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  notFoundPlaceholder?: string;
  sizes?: string;
  borders?: string;
  colors?: string;
  align?: string[];
  icon?: string[];
}

export default function SearchSelect({
  options,
  value,
  name,
  onChange,
  placeholder = "Select your value...",
  searchPlaceholder = "Search...",
  notFoundPlaceholder = "Not found",
  sizes = '',
  borders = '',
  colors = '',
  align = ['right'],
  icon = ['Github'],
}: DropSelectProps) {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [selectSearch, setSelectSearch] = useState<string>("");
  const [internalValue, setInternalValue] = useState<string>(value || "");
  const ref = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
        w-auto 
        cursor-pointer 
        h-10 
        dark:bg-slate-700 
        duration-300 
        flex 
        place-items-center 
        justify-start
        ${selectActive ? "rounded-t-md" : "rounded-md"}
        `}
      onClick={() => (!selectActive ? setSelectActive(true) : "")}
    >
      <div className={`${icon[0] === '' ? 'w-0' : 'w-10'} h-10 bg-red-400`}>
        {Icon[icon[0] as keyof typeof Icon] && 
          React.createElement(Icon[icon[0] as keyof typeof Icon])}
      </div>

      <div
        className={`absolute left-0 w-full h-full z-10 border-slate-300 border ${selectActive ? "rounded-t-md" : "rounded-md"} dark:border-transparent`}
        onClick={() => setSelectActive((prev) => !prev)}
      >
      </div>

      <input type="hidden" name={name} value={internalValue} required />
      <p className={`p-4 ${internalValue !== "" ? "text-slate-800 dark:text-white" : "text-slate-500"}`}>
        {internalValue === ""
          ? placeholder
          : options?.find((opt) => opt.value === internalValue)?.label || placeholder}
      </p>
      <Icon.ChevronDown
        className={`absolute right-3 text-slate-800 dark:text-white duration-300 ${selectActive ? "rotate-180" : "rotate-0"} cursor-pointer`}
        onClick={() => setSelectActive((prev) => !prev)}
      />
      <div
        className={`absolute w-full top-10 z-10 bg-slate-200 dark:bg-slate-700 mt-[-1px] ${
          selectActive
            ? "max-h-56 rounded-b-md overflow-y-auto border-slate-300 dark:border-slate-500 border-b border-x"
            : "max-h-0 overflow-hidden"
        } duration-300`}
      >
        <div className="w-full h-11 p-4 flex place-items-center sticky top-0 bg-slate-100 dark:bg-slate-600">
          <Icon.Search className="mr-3 dark:text-slate-300" />
          <input
            ref={searchInputRef}
            type="text"
            className="bg-transparent outline-none w-full focus:ring-0 ring-0 border-none focus:outline-none dark:text-slate-300"
            placeholder={searchPlaceholder}
            onChange={(e) => setSelectSearch(e.target.value)}
          />
        </div>

        {filteredOptions.length > 0 ? (
          filteredOptions.map((opt, index) => (
            <div key={index}>
              <hr className="border-transparent" />
              <div
                className="w-full min-h-11 flex place-items-center px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500 dark:text-slate-300"
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
  );
}

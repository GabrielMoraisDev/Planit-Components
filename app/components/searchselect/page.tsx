"use client";
import { useState, useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";

interface DropSelectProps {
  options: { label: string; value: string }[];
  value: string;
  name: string;
  onChange: (value: string | null) => void;
  placeholder?: string;
}

export default function DropSelect({
  options,
  value,
  name,
  onChange,
  placeholder = "Selecione o valor...",
}: DropSelectProps) {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [selectSearch, setSelectSearch] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

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

  const filteredOptions = (options || []).filter((opt) =>
    opt.label.toLowerCase().includes(selectSearch.toLowerCase())
  );

  return (
    <div
      ref={ref}
      className={`relative w-full cursor-pointer h-10 bg-white dark:bg-slate-700 duration-300 flex place-items-center border-transparent border dark:border-transparent ${
        selectActive ? "rounded-t-md" : "rounded-md"
      }`}
      onClick={() => (!selectActive ? setSelectActive(true) : "")}
    >
        <input type="hidden" name={name} value={value} required/>
        <p
          className={`p-4 ${
            value !== "" ? "text-slate-800 dark:text-white" : "text-slate-500"
          }`}
        >
          {value === ""
            ? placeholder
            : options?.find((opt) => opt.value === value)?.label || placeholder}
        </p>
      <Icon.ChevronDown
        className={`absolute right-3 text-slate-800 dark:text-white duration-300 ${
          selectActive ? "rotate-180" : "rotate-0"
        } cursor-pointer`}
        onClick={() => setSelectActive((prev) => !prev)}
      />
      <div
        className={`absolute w-full top-10 z-10 bg-slate-200 dark:bg-slate-700 ${
          selectActive
            ? "max-h-48 rounded-b-md overflow-y-auto border-slate-300 dark:border-slate-500 border"
            : "max-h-0 overflow-hidden border-transparent"
        } duration-300`}
      >
        <div className="w-full h-11 p-4 flex place-items-center sticky top-0 bg-slate-100 dark:bg-slate-600">
          <Icon.Search className="mr-3 dark:text-slate-300" />
          <input
            type="text"
            className="bg-transparent outline-none w-full focus:ring-0 ring-0 border-none focus:outline-none dark:text-slate-300"
            placeholder="Buscar..."
            onChange={(e) => setSelectSearch(e.target.value)}
          />
        </div>

        {filteredOptions.length > 0 ? (
          filteredOptions.map((opt, index) => (
            <div key={index}>
              <hr className="border-transparent" />
              <div
                className="w-full min-h-11 flex place-items-center px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500 dark:text-slate-300"
                onClick={() => {
                  onChange(opt.value);
                  setSelectActive(false);
                }}
              >
                {opt.label}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full min-h-11 flex place-items-center justify-center text-slate-400">
            Nenhum resultado encontrado
          </div>
        )}
      </div>
    </div>
  );
}
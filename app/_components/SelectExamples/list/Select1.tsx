"use client";
import { useState, useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";

export default function Select1() {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectData, setSelectData] = useState<string>("");
  const [selectSearch, setSelectSearch] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { label: "Data", slug: "data" },
    { label: "Users", slug: "users" },
    { label: "Product", slug: "prod" },
    { label: "Other", slug: "other" },
  ];

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

  console.log("Value to backend:" + selectData);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(selectSearch.toLowerCase())
  );

  return (
    <div
      ref={ref}
      className={`relative w-60 h-11 bg-slate-50 dark:bg-slate-800 duration-300 flex place-items-center border-slate-300 border dark:border-none ${
        selectActive ? "rounded-t-md" : "rounded-md"
      }`}
      onClick={() => (!selectActive ? setSelectActive(true) : "")}
    >
      <p className={`p-4 ${selectValue !== "" ? "text-slate-100" : "text-slate-500"}`}>
        {selectValue === "" ? "Selecione o valor..." : selectValue}
      </p>
      <Icon.ChevronDown
        className={`absolute right-3 text-slate-800 dark:text-white duration-300 ${
          selectActive ? "rotate-180" : "rotate-0"
        } cursor-pointer`}
        onClick={() => setSelectActive((prev) => !prev)}
      />
      <div
        className={`absolute w-full top-11 bg-slate-700 dark:bg-slate-700 ${
          selectActive ? "max-h-48 rounded-b-md overflow-y-auto" : "max-h-0 overflow-hidden"
        } duration-300`}
      >
        <div className="w-full h-11 p-4 flex place-items-center sticky top-0 bg-slate-600">
          <Icon.Search className="mr-3" />
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Buscar..."
            onChange={(e) => setSelectSearch(e.target.value)}
          />
        </div>
        
        {filteredOptions.length > 0 ? (
          filteredOptions.map((opt, index) => (
            <div key={index}>
              <hr className="border-slate-400" />
              <div
                className="w-full min-h-11 flex place-items-center px-4 cursor-pointer hover:bg-slate-500"
                onClick={() => {
                  setSelectData(opt.label);
                  setSelectValue(opt.label);
                  setSelectActive(false);
                }}
              >
                {opt.label}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full min-h-11 flex place-items-center justify-center text-slate-400">
            No results
          </div>
        )}
      </div>
    </div>
  );
}

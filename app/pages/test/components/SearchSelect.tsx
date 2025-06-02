import React, { useState, useEffect, useRef } from "react";
import * as Icon from "react-bootstrap-icons";
import clsx from "clsx";

interface SearchSelectProps {
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
  classIcons?: string[];
  icons?: string[];
  bgSearch?: string;
  colorPlaceholder?: string;
}

export type SearchSelectOption = { label: string; value: string };
export type { SearchSelectProps };

export const SearchSelect: React.FC<SearchSelectProps> = ({
  options,
  value,
  name,
  onChange,
  placeholder = "Select your value...",
  searchPlaceholder = "Search...",
  notFoundPlaceholder = "Not found",
  colors = ['', '', '', ''],
  icons = ['none', 'ChevronDown', 'Search'],
  borders = ['', '', '', ''],
  spaces = ['', '', '', ''],
  sizes = ['', '', '', ''],
  colorPlaceholder = '',
  bgSearch = '',
  classIcons = ['', '', '', ''],
}) => {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [selectSearch, setSelectSearch] = useState<string>("");
  const [internalValue, setInternalValue] = useState<string>(value || "");
  
  // Estado para forçar re-renderização quando o tema muda
  const [themeKey, setThemeKey] = useState(0);
  
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

  // Observer para detectar mudanças de tema
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // Forçar re-renderização mudando o themeKey
          setThemeKey(prev => prev + 1);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
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

  // Função auxiliar para renderizar ícones
  const renderIcon = (iconName: string) => {
    if (!iconName || iconName === 'none') return null;
    
    const IconComponent = Icon[iconName as keyof typeof Icon] as React.ComponentType<Record<string, never>>;
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div
      key={themeKey} // Força re-renderização quando o tema muda
      ref={ref}
      className={clsx(
        "relative",
        "inline-block w-auto",
        "cursor-pointer",
        "duration-300",
        "place-items-center",
        "justify-start"
      )}
      onClick={() => (!selectActive ? setSelectActive(true) : "")}
    >
      <style>{`
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

      <div className={clsx("flex justify-start place-items-center h-10")}>

        <div className={clsx(icons[0] === 'none' ? 'w-10' : classIcons[0] === '' ? 'w-10 pr-0 pl-1' : classIcons[0])}></div>
        
        <div
          className={clsx(
            "absolute left-0 w-full h-full z-10 border-slate-300 dark:border-slate-500 border duration-300",
            !colors[0] ? 'dark:bg-slate-700 dark:text-slate-100 bg-white text-slate-800' : colors[0],
            borders[0].includes('rounded') ? borders[0] : selectActive ? "rounded-t-md" : "rounded-md duration-300",
            "overflow-hidden"
          )}
          onClick={() => setSelectActive((prev) => !prev)}
        >
          <div className={clsx(
            icons[1] === 'none' ? 'w-0' : classIcons[1] === '' ? 'w-9' : classIcons[1],
            "h-full ml-auto flex justify-center place-items-center duration-300 pointer-events-none",
          )}>
            <div className={clsx(
              selectActive ? "rotate-180" : "rotate-0",
              "duration-300"
            )}>
              {renderIcon(icons[1] || 'ChevronDown')}
            </div>
          </div>

          <div className={clsx(
            icons[0] === 'none' ? 'w-10' : classIcons[0] === '' ? 'w-10 pr-0 pl-0' : classIcons[0],
            "h-full flex justify-center place-items-center absolute left-0 top-0 z-10",
          )}>
            {icons[0] !== 'none' && renderIcon(icons[0])}
          </div>
        </div>

        <input type="hidden" name={name} value={internalValue} required />
          <p className={clsx(
            internalValue !== "" ? "text-slate-800 dark:text-white" : "text-slate-400 dark:text-slate-500",
            "truncate mt-1",
            spaces[0],
            icons[0] === 'none' && 'ml-[-1.4rem]',
            !sizes[0] ? 'w-48' : sizes[0],
            "select-none pointer-events-none mr-0.5 z-10",
            colors[0] && colors[0]
              .split(" ")
              .filter(c => !c.startsWith("bg-") && !c.startsWith("hover:bg-"))
              .join(" ")
          )}>
            {internalValue === ""
              ? placeholder
              : options?.find((opt) => opt.value === internalValue)?.label || placeholder}
          </p>

        <div className={clsx(
          icons[1] === 'none' ? 'w-5' : classIcons[1] === '' ? 'w-9' : classIcons[1],
          "ml-auto"
        )}></div>

        <div
          className={clsx(
            "absolute w-full top-10 z-10 bg-slate-200 dark:bg-slate-700 mt-[-1px] custom-scrollbar",
            selectActive
              ? "max-h-60 rounded-b-md overflow-y-auto border-slate-300 dark:border-slate-500 border-b border-x border-t"
              : "max-h-0",
            "duration-300"
          )}
          style={{ overflowY: filteredOptions.length > 4 ? 'auto' : 'hidden' }}
        >
          <div className={clsx(
            !bgSearch ? 'bg-slate-300 dark:bg-slate-600' : bgSearch,
            "sticky top-0 h-auto w-full flex justify-center place-items-center"
          )}>
            <div className={clsx(
              !sizes[1] ? 'w-full h-11' : sizes[1],
              colors[1] !== '' ? colors[1] : 'bg-slate-100 dark:bg-slate-600',
              "flex place-items-center sticky top-0 pr-4",
              spaces[1],
              borders[1]
            )}>
              <div className={clsx(
                "flex h-full text-sm",
                icons[2] === 'none' ? 'w-4' : classIcons[2] === '' ? 'w-10 pl-2 pr-0' : classIcons[2],
                "justify-center place-items-center text-slate-600 dark:text-slate-300"
              )}>
                {renderIcon(icons[2] || 'Search')}
              </div>
              <input
                ref={searchInputRef}
                type="text"
                className={clsx(
                  icons[2] === 'none' ? 'pl-0' : 'pl-2',
                  colors[1] !== '' ? colors[1] : 'dark:text-slate-300 text-slate-700',
                  colorPlaceholder === '' ? ' placeholder-slate-400 dark:placeholder-slate-400' : colorPlaceholder,
                  "bg-transparent outline-none w-full focus:ring-0 ring-0 border-none focus:outline-none"
                )}
                placeholder={searchPlaceholder}
                onChange={(e) => setSelectSearch(e.target.value)}
              />
            </div>
          </div>

          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, index) => (
              <div key={index}>
                <hr className={clsx("border-transparent")} />
                <div
                  className={clsx(
                    !sizes[3] ? 'w-full min-h-11' : sizes[3],
                    !spaces[3] ? 'px-4' : spaces[3],
                    !colors[3] ? 'hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-300' : colors[3],
                    "flex place-items-center cursor-pointer"
                  )}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </div>
              </div>
            ))
          ) : (
            <div className={clsx("w-full min-h-11 flex place-items-center justify-center text-slate-400 dark:text-slate-500")}>
              {notFoundPlaceholder}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSelect;
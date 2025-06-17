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
  paletteColor?: string; // Nova prop para paleta automática
}

export type SearchSelectOption = { label: string; value: string };
export type { SearchSelectProps };

// Função para converter hex para RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Função para converter RGB para HSL
const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return { h: h * 360, s: s * 100, l: l * 100 };
};

// Função para gerar paleta de cores
const generateColorPalette = (baseColor: string) => {
  const rgb = hexToRgb(baseColor);
  if (!rgb) return null;
  
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
  
  if(l > 50){
    return {
    // Cor principal (input background)
    primary: `hsl(${h}, ${Math.max(s - 10, 0)}%, ${Math.min(l + 10, 95)}%)`,
    // Cor mais escura (hover)
    primaryDark: `hsl(${h}, ${Math.max(s - 5, 0)}%, ${Math.max(l - 15, 87)}%)`,
    // Cor do dropdown
    secondary: `hsl(${h}, ${Math.max(s - 20, 0)}%, ${Math.min(l + 15, 90)}%)`,
    // Cor do search background
    searchBg: `hsl(${h}, ${Math.max(s - 25, 0)}%, ${Math.min(l + 15, 93)}%)`,
    // Cor do hover nos items
    itemHover: `hsl(${h}, ${Math.max(s - 15, 0)}%, ${Math.max(l - 10, 85)}%)`,
    // Cor do texto (baseada na luminosidade)
    text: '#1f2937',
    textSecondary: '#64748b',
    // Cor da borda
    border: `hsl(${h}, ${Math.max(s - 30, 0)}%, ${l > 50 ? Math.max(l - 20, 20) : Math.min(l + 20, 80)}%)`
  };
  }else{
    return {
      // Cor principal (input background)
      primary: `hsl(${h}, ${Math.max(s - 10, 0)}%, ${Math.min(l + 10, 90)}%)`,
      // Cor mais escura (hover)
      primaryDark: `hsl(${h}, ${Math.max(s - 5, 0)}%, ${Math.max(l - 15, 20)}%)`,
      // Cor do dropdown
      secondary: `hsl(${h}, ${Math.max(s - 15, 0)}%, ${Math.min(l + 5, 70)}%)`,
      // Cor do search background
      searchBg: `hsl(${h}, ${Math.max(s - 10, 0)}%, ${Math.min(l + 15, 23)}%)`,
      // Cor do hover nos items
      itemHover: `hsl(${h}, ${Math.max(s - 10, 0)}%, ${Math.max(l - 10, 20)}%)`,
      // Cor do texto (baseada na luminosidade)
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      // Cor da borda
      border: `hsl(${h}, ${Math.max(s - 30, 0)}%, ${l > 50 ? Math.max(l - 20, 20) : Math.min(l + 20, 80)}%)`
    };
  }
};

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
  paletteColor, // Nova prop
}) => {
  const [selectActive, setSelectActive] = useState<boolean>(false);
  const [selectSearch, setSelectSearch] = useState<string>("");
  const [internalValue, setInternalValue] = useState<string>(value || "");
  const [themeKey, setThemeKey] = useState(0);
  
  const ref = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Gerar paleta de cores se paletteColor for fornecida
  const palette = paletteColor ? generateColorPalette(paletteColor) : null;

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
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
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

  const filteredOptions = (options || []).filter((opt) =>
    opt.label.toLowerCase().includes(selectSearch.toLowerCase())
  );

  const handleSelect = (val: string) => {
    setInternalValue(val);
    onChange?.(val);
    setSelectActive(false);
  };

  const renderIcon = (iconName: string) => {
    if (!iconName || iconName === 'none') return null;
    
    const IconComponent = Icon[iconName as keyof typeof Icon] as React.ComponentType<Record<string, never>>;
    return IconComponent ? <IconComponent /> : null;
  };

  // Função para obter estilos baseados na paleta
  const getStyles = () => {
    if (!palette) return {};
    
    return {
      main: {
        backgroundColor: palette.primary,
        borderColor: palette.border,
        color: palette.text
      },
      mainHover: {
        backgroundColor: palette.primaryDark
      },
      dropdown: {
        backgroundColor: palette.secondary,
        borderColor: palette.border
      },
      searchBg: {
        backgroundColor: palette.searchBg
      },
      itemHover: {
        backgroundColor: palette.itemHover
      },
      text: {
        color: palette.text
      },
      textSecondary: {
        color: palette.textSecondary
      }
    };
  };

  const styles = getStyles();

  return (
    <div
      key={themeKey}
      ref={ref}
      className={clsx(
        "relative",
        "inline-block w-auto",
        "cursor-pointer",
        "duration-300",
        "place-items-center",
        "justify-start"
      )}
      onClick={() => (!selectActive && setSelectActive(true))}
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
          background-color: ${palette?.border || '#94a3b8'};
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: ${palette?.primaryDark || '#64748b'};
        }
        ${palette ? `
          .palette-main-hover:hover {
            background-color: ${palette.primaryDark} !important;
          }
          .palette-item-hover:hover {
            background-color: ${palette.itemHover} !important;
          }
        ` : ''}
      `}</style>

      <div className={clsx("flex justify-start place-items-center h-10")}>

        <div className={clsx(icons[0] === 'none' ? 'w-10' : classIcons[0] === '' ? 'w-10 pr-0 pl-1' : classIcons[0])}></div>
        
        <div
          className={clsx(
            "absolute left-0 w-full h-full z-10 border duration-300 palette-main-hover",
            !palette && !colors[0] ? 'tdark:bg-zinc-700 tdark:text-zinc-100 bg-white text-zinc-800 border-zinc-300 tdark:border-zinc-500' : '',
            palette ? '' : colors[0],
            borders[0].includes('rounded') ? borders[0] : selectActive ? "rounded-t-md" : "rounded-md duration-300",
            "overflow-hidden"
          )}
          style={palette ? styles.main : {}}
          onClick={() => setSelectActive((prev) => !prev)}
        >
          <div className={clsx(
            icons[1] === 'none' ? 'w-0' : classIcons[1] === '' ? 'w-9' : classIcons[1],
            "h-full ml-auto flex justify-center place-items-center duration-300 pointer-events-none",
          )}>
            <div className={clsx(
              selectActive ? "rotate-180" : "rotate-0",
              "duration-300"
            )} style={palette ? styles.text : {}}>
              {renderIcon(icons[1] || 'ChevronDown')}
            </div>
          </div>

          <div className={clsx(
            icons[0] === 'none' ? 'w-10' : classIcons[0] === '' ? 'w-10 pr-0 pl-0' : classIcons[0],
            "h-full flex justify-center place-items-center absolute left-0 top-0 z-10",
          )} style={palette ? styles.text : {}}>
            {icons[0] !== 'none' && renderIcon(icons[0])}
          </div>
        </div>

        <input type="hidden" name={name} value={internalValue} required />
        <p className={clsx(
          !palette && (internalValue !== "" ? "text-zinc-800 tdark:text-white" : "text-zinc-400 tdark:text-zinc-500"),
          "truncate mt-1",
          spaces[0],
          icons[0] === 'none' && 'ml-[-1.4rem]',
          !sizes[0] ? 'w-48' : sizes[0],
          "select-none pointer-events-none mr-0.5 z-10",
          colors[0] && colors[0]
            .split(" ")
            .filter(c => !c.startsWith("bg-") && !c.startsWith("hover:bg-"))
            .join(" ")
        )} style={palette ? (internalValue !== "" ? styles.text : styles.textSecondary) : {}}>
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
            "absolute w-full top-10 z-10 mt-[-1px] custom-scrollbar",
            !palette ? 'bg-zinc-200 tdark:bg-zinc-700 border-zinc-300 tdark:border-zinc-500' : '',
            selectActive
              ? "max-h-60 rounded-b-md overflow-y-auto border-b border-x border-t"
              : "max-h-0 overflow-hidden",
            "duration-300"
          )}
          style={palette ? { ...styles.dropdown, borderColor: palette.border } : {}}
        >
          <div 
            className={clsx(
              !palette && !bgSearch ? 'bg-zinc-300 tdark:bg-zinc-600' : '',
              !palette && bgSearch ? bgSearch : '',
              "sticky top-0 h-auto w-full flex justify-center place-items-center"
            )}
            style={palette ? styles.searchBg : {}}
          >
            <div className={clsx(
              !sizes[1] ? 'w-full h-11' : sizes[1],
              !palette && colors[1] !== '' ? colors[1] : '',
              !palette && colors[1] === '' ? 'bg-zinc-100 tdark:bg-zinc-600' : '',
              "flex place-items-center sticky top-0 pr-4",
              spaces[1],
              borders[1]
            )} style={palette ? styles.searchBg : {}}>
              <div className={clsx(
                "flex h-full text-sm",
                icons[2] === 'none' ? 'w-4' : classIcons[2] === '' ? 'w-10 pl-2 pr-0' : classIcons[2],
                "justify-center place-items-center",
                !palette ? 'text-zinc-600 tdark:text-zinc-300' : ''
              )} style={palette ? styles.textSecondary : {}}>
                {renderIcon(icons[2] || 'Search')}
              </div>
              <input
                ref={searchInputRef}
                type="text"
                className={clsx(
                  icons[2] === 'none' ? 'pl-0' : 'pl-2',
                  !palette && colors[1] !== '' ? colors[1] : '',
                  !palette && colors[1] === '' ? 'tdark:text-zinc-300 text-zinc-700' : '',
                  !palette && colorPlaceholder === '' ? ' placeholder-zinc-400 tdark:placeholder-zinc-400' : colorPlaceholder,
                  "bg-transparent outline-none w-full focus:ring-0 ring-0 border-none focus:outline-none"
                )}
                style={palette ? { ...styles.text, backgroundColor: 'transparent' } : {}}
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
                    !borders[3] ? 'border-transparent' : borders[3],
                    !sizes[3] ? 'w-full min-h-11' : sizes[3],
                    !spaces[3] ? 'px-4' : spaces[3],
                    !palette && !colors[3] ? 'hover:bg-zinc-300 tdark:hover:bg-zinc-500 text-zinc-700 tdark:text-zinc-300' : '',
                    !palette && colors[3] ? colors[3] : '',
                    palette ? 'palette-item-hover' : '',
                    "flex place-items-center cursor-pointer"
                  )}
                  style={palette ? styles.text : {}}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </div>
              </div>
            ))
          ) : (
            <div 
              className={clsx(
                "w-full min-h-11 flex place-items-center justify-center",
                !palette ? 'text-zinc-400 tdark:text-zinc-500' : ''
              )}
              style={palette ? styles.textSecondary : {}}
            >
              {notFoundPlaceholder}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSelect;
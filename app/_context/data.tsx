"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CarouselItem {
  [key: string]: { code: string };
}

interface Data {
  lang: string;
  carousel: CarouselItem[];
  setLang: React.Dispatch<React.SetStateAction<string>>;
  setCarousel: React.Dispatch<React.SetStateAction<CarouselItem[]>>;
}

const initialCarousel: CarouselItem[] = [
  { carousel1: { code: "" } },
  { carousel2: { code: "" } },
  { carousel3: { code: "" } },
];

const DataContext = createContext<Data | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<string>('next');
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [carousel, setCarousel] = useState<CarouselItem[]>(initialCarousel);

  return (
    <DataContext.Provider value={{ lang, setLang, carousel, setCarousel, menuOpen, setMenuOpen }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
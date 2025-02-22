"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CarouselItem {
  [key: string]: { code: string };
}

interface CardItem {
  [key: string]: { code: string };
}

interface Data {
  lang: string;
  carousel: CarouselItem[];
  card: CardItem[];
  setLang: React.Dispatch<React.SetStateAction<string>>;
  setCard: React.Dispatch<React.SetStateAction<CardItem[]>>;
  setCarousel: React.Dispatch<React.SetStateAction<CarouselItem[]>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialCarousel: CarouselItem[] = [
  { carousel1: { code: "" } },
  { carousel2: { code: "" } },
  { carousel3: { code: "" } },
  { carousel4: { code: "" } },
];

const initialCard: CardItem[] = [
  { card1: { code: "" } },
  { card2: { code: "" } },
  { card3: { code: "" } },
  { card4: { code: "" } },
];

const DataContext = createContext<Data | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<string>('next');
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [carousel, setCarousel] = useState<CarouselItem[]>(initialCarousel);
  const [card, setCard] = useState<CardItem[]>(initialCard);

  return (
    <DataContext.Provider value={{ lang, setLang, carousel, setCarousel, card, setCard, menuOpen, setMenuOpen }}>
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
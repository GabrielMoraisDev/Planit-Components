"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CarouselItem {
  [key: string]: { code: string };
}

interface CardItem {
  [key: string]: { code: string };
}

interface NavbarItem {
  [key: string]: { code: string };
}

interface LoginItem {
  [key: string]: { code: string };
}

interface HeroItem {
  [key: string]: { code: string };
}

interface Data {
  lang: string;
  carousel: CarouselItem[];
  card: CardItem[];
  navbar: NavbarItem[];
  login: LoginItem[];
  hero: HeroItem[];
  setLang: React.Dispatch<React.SetStateAction<string>>;
  setCard: React.Dispatch<React.SetStateAction<CardItem[]>>;
  setCarousel: React.Dispatch<React.SetStateAction<CarouselItem[]>>;
  setNavbar: React.Dispatch<React.SetStateAction<NavbarItem[]>>;
  setLogin: React.Dispatch<React.SetStateAction<LoginItem[]>>;
  setHero: React.Dispatch<React.SetStateAction<HeroItem[]>>;
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

const initialNavbar: NavbarItem[] = [
  { navbar1: { code: "" } },
  { navbar2: { code: "" } },
  { navbar3: { code: "" } },
  { navbar4: { code: "" } },
];

const initialLogin: LoginItem[] = [
  { login1: { code: "" } },
  { login2: { code: "" } },
  { login3: { code: "" } },
  { login4: { code: "" } },
];

const initialHero: HeroItem[] = [
  { hero1: { code: "" } },
  { hero2: { code: "" } },
  { hero3: { code: "" } },
  { hero4: { code: "" } },
];

const DataContext = createContext<Data | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<string>('next');
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [navbar, setNavbar] = useState<NavbarItem[]>(initialNavbar);
  const [login, setLogin] = useState<LoginItem[]>(initialLogin);
  const [carousel, setCarousel] = useState<CarouselItem[]>(initialCarousel);
  const [card, setCard] = useState<CardItem[]>(initialCard);
  const [hero, setHero] = useState<HeroItem[]>(initialHero);

  return (
    <DataContext.Provider value={{ lang, setLang, carousel, setCarousel, navbar, setNavbar, card, setCard, login, setLogin, hero, setHero, menuOpen, setMenuOpen }}>
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
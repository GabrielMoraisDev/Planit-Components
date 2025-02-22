import { Dancing_Script, Nunito } from "next/font/google";
import { DataProvider } from "@/app/_context/data";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const fontNunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Planit Components",
  description: "Created by Gabriel Morais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontNunito.variable} ${dancingScript.variable}`}>
      <body className="font-nunito duration-300">
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
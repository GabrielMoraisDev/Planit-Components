import { Geist, Geist_Mono } from "next/font/google";
import { DataProvider } from "@/app/_context/data";  // DataProvider should be used
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}

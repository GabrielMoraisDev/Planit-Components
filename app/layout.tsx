import { Dancing_Script, Nunito } from "next/font/google";
import { DataProvider } from "@/app/_context/data";
import "./globals.css";
import Script from "next/script";

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
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5CV2BCWDQ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5CV2BCWDQ2');
          `}
        </Script>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const noto = Noto_Sans({ subsets: ['latin'], weight: ['300', '400', '700'] })

export const metadata: Metadata = {
  title: "Calendlix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <main className="container">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

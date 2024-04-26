import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from './components/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mps Cargas - Atendendo toda a região sul",
  description: "Cargas Frácionadas, Palets e Granel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}

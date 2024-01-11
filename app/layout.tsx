import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";
import Cover from "@/components/Cover";
import Categories from "@/components/Categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revie",
  description: "App de vente de produits d'occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={clsx(inter.className, "min-h-screen bg-white mt-16")}>
        <Header />
        <main className="">
          <Cover />
          <Categories />
          {children}
        </main>
      </body>
    </html>
  );
}

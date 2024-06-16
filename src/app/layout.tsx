import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Divider from "./Components/Divider";
import BottomNav from "./Components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Commerce App",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Divider />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}

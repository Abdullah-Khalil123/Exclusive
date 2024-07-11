import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../Components/NavBar";
import Divider from "../Components/Divider";
import BottomNav from "../Components/BottomNav";
import StoreProvider from "./StoreProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NavBar />
          <Divider />
          {children}
          <SpeedInsights />
          <BottomNav />
        </StoreProvider>
      </body>
    </html>
  );
}

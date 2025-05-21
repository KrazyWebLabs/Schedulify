import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/ui/SideBar/SideBar";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schedulify",
  description: "An app to help you organize your school schedule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-gray-100 dark:bg-gray-900 min-h-screen bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]`}
      >
        <SideBar />
        <main className="flex-1 p-6 flex flex-col ml-[255px]">
          <Image
          priority={true}
          className="dark:invert"
           src={"/umad.svg"} alt="Logo UMAD" width={120} height={10}/>
          <Breadcrumb />
          {children}
        </main>
      </body>
    </html>
  );
}

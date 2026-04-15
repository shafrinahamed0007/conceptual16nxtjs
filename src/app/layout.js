import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PH Play Store",
  description: "This is an application management website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"  data-theme="abyss"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <h2 className="bg-green-200 text-center py-7 text-white font-bold">Footer</h2>
        
        </body>
    </html>
  );
}

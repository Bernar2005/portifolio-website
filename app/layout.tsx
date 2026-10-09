import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KWIZERA Bernard | Software Developer & IT Specialist - Kigali, Rwanda",
  description: "Official portfolio of KWIZERA Bernard, an IT student at IPRC Kigali specializing in JavaScript, Node.js, MySQL databases, Web Development, and Modern ICT Solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth dark`}>
      <body className="font-sans antialiased selection:bg-[#38bdf8] selection:text-[#0b0f19] bg-[#0b0f19] text-[#f8fafc] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import { EnquiryProvider } from "@/components/EnquiryContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { EnquiryModal } from "@/components/EnquiryModal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vintours & Travels | Premium Bus Travel & Charter Services",
  description: "Experience premium bus journeys, luxury Volvo coaches, intercity express routes, and customized tour packages across India.",
  keywords: "Vintours Travels, bus rental, tourist bus, car rental, van rental, tour packages, corporate travel, Volvo sleeper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${lora.variable} scroll-smooth max-w-full overflow-x-hidden`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-[#00B4D8] selection:text-white max-w-full overflow-x-hidden">
        <EnquiryProvider>
          <Navbar />
          <main className="flex-grow pt-20 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <FloatingContact />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}

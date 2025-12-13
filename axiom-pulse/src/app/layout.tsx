import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/providers/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Axiom Pulse - Token Discovery",
  description: "Real-time crypto token discovery dashboard",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#06070B] text-zinc-100 text-[11px] lg:text-xs xl:text-sm 2xl:text-base`}
      >
        <Providers>{children}</Providers>
        <div className="fixed bottom-2 right-2 text-[10px] text-zinc-600 font-mono opacity-50 hover:opacity-100 transition-opacity z-50">
          v1.1.4
        </div>
      </body>
    </html>
  );
}

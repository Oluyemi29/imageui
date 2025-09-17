import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import NavbarInfo from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Image UI",
    default: "Image UI",
  },
  description: "Image UI Site",
  openGraph: {
    title: "Image UI",
    description: "am image ui",
    url: "https://imageui.vercel.app",
    siteName: "Image UI",
    images: {
      url: "/imageui.jpg",
      width: 1200,
      height: 630,
      alt: "Image UI",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="w-[95%] mx-auto">
            <NavbarInfo />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}

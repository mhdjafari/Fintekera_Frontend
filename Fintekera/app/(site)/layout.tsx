"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from "@/components/GoogleAnalytic";
import "../globals.css";
import Prism from "prismjs";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";

import ToasterContext from "../context/ToastContext";


function applyCodeHighlighting() {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((codeBlock) => {
    Prism.highlightElement(codeBlock);
  });
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    applyCodeHighlighting();
    Prism.highlightAll();
  }, []);


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
       {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}

        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
        <Analytics />
        <SpeedInsights />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

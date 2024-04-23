import React from "react";
import { Inter } from "next/font/google";
// import "../../styles/prism-vsc-dark-plus.css";
import "../../styles/index.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] flex justify-center dark:bg-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
};

export default Layout;

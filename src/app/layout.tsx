import type { Metadata } from "next";
import "./globals.css";

import { Source_Code_Pro, Source_Sans_3 } from "next/font/google";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louis Facun: Full-Stack Web Developer",
  description:
    "Louis Facun is a full-stack web developer from the Philippines, specializing in Next.js, Tailwind CSS, and Django Rest Framework. Discover his innovative web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100 ${sourceSans3.className} ${sourceCodePro.variable}`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

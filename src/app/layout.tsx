import type { Metadata } from "next";
import { Providers } from "./providers";
import {
  //Inter,
  //Montserrat,
  Source_Code_Pro,
  //IBM_Plex_Mono,
  Geologica,
  //Anonymous_Pro,
  //Azeret_Mono,
} from "next/font/google";
import "./globals.css";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});
const geologica = Geologica({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louis Facun | Full-Stack Web Developer",
  description:
    "I'm a passionate software developer based in Philippines specializing in Next.js, React.js, Tailwind CSS, and Django Rest Framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100 ${geologica.className} ${sourceCodePro.variable}`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

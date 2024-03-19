import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import { ThemeProvider } from "@/components/theme-provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://othmane-po.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "ait taleb ",
    "othmane",
    "ait taleb ",
    "ait taleb ",
    "othmane",
    "othmane",
    " ait taleb  othmane",
    " ait taleb  othmane",
    "ait taleb ",
    "ait taleb othmane",
    "ait taleb  othmane",
    "ait taleb  othmane",
    "ait taleb othmane",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    " ait taleb  othmane ",
    "website",
    "@ait taleb othmane",
    "ait taleb othmane",
    "ait taleb  developer",
  ],
  authors: [
    {
      name: "ait taleb  othmane",
      url: "https://github.com/proxy-o",
    },
  ],
  creator: "ait taleb  othmane",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@ait taleb othmane14",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={cn(
              "flex relative screen break-words min-h-screen items-center justify-between  container  "
            )}
          >
            {/* NAVBAR ->  */}
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

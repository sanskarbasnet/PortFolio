import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url, // Base URL of your site
    siteName: `${DATA.name}`,
    images: [
      {
        url: "https://www.sanskarbasnet.me/thumbnail.png", // Correct path to your thumbnail
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Thumbnail`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: `${DATA.name}`,
    description: DATA.description,
    card: "summary_large_image",
    images: ["https://www.sanskarbasnet.me/thumbnail.png"], // Thumbnail for Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={DATA.name} />
        <meta property="og:description" content={DATA.description} />
        <meta property="og:image" content="https://www.sanskarbasnet.me/thumbnail.png" />
        <meta property="og:url" content={DATA.url} />
        <meta property="og:site_name" content={DATA.name} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DATA.name} />
        <meta name="twitter:description" content={DATA.description} />
        <meta name="twitter:image" content="https://www.sanskarbasnet.me/thumbnail.png" />

        {/* Optional: Add viewport meta tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

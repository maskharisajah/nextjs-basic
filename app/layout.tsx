import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { getSetting } from "./queries/getSetting";

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontSants = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

// dynamic metadata template
export async function generateMetadata() {
  const setting = await getSetting();

  return {
    title: {
      default: "Untitled",
      template: `%s | ${setting.siteName}`,
    },
    description: "Tame Blog",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${fontSants.variable} ${fontMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

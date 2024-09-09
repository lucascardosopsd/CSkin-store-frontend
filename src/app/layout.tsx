import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";
import { fonts } from "./Fonts";
import { DM_Sans } from "next/font/google";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./config/theme";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CSkin Store",
  description: "As melhores skins de CS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fonts.dmSans.variable} ${dmSans.className}`}
    >
      <body>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

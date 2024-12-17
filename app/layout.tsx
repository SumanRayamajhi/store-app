import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import Container from "@/components/global/Container";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const redaction = localFont({
  src: "../public/Fonts/Redaction_10-Regular.woff2",
  variable: "--font-redaction",
  weight: "400",
});

export const metadata: Metadata = {
  title: "5Monkey Bistro - Premium Coffee Experience",
  description: "Experience the finest coffee at 5Monkey Bistro. Premium beans, skilled baristas, and perfect atmosphere for work and relaxation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redaction.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

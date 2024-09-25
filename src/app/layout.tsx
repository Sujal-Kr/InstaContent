import type { Metadata } from "next";
import localFont from "next/font/local";
import {Outfit} from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const outfit=Outfit({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
          {children}
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </body>
      </html>
    </ClerkProvider>
  );
}

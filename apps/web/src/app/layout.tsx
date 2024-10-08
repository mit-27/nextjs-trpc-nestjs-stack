import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Provider from "@/trpc/Provider";
import SessionProvider from "@/providers/SessionProvider";
import { auth } from "@/lib/auth";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans",
          fontSans.variable
        )}
      >
        <SessionProvider session={session}>
        <Provider>
        {children}
        </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strava App",
  description: "Strava activity filter application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

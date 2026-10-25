import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { projectConfig } from "@/config/projectConfig";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${projectConfig.metadata.title} | Autonomous Mission Operations Platform`,
  description: projectConfig.metadata.description,
  keywords: [
    "AeroGrid OS",
    "Aerospace",
    "Autonomous Swarm",
    "Satellite Constellation",
    "Drone Operations",
    "Telemetry HUD",
    "Mission Control"
  ],
  authors: [{ name: "AeroGrid Mission Architecture" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark bg-black`}>
      <body className="min-h-screen bg-black text-white font-sans antialiased selection:bg-aerogrid-cyan/30 selection:text-aerogrid-glow">
        <div className="fixed inset-0 pointer-events-none scanline-overlay z-50 opacity-20" />
        {children}
      </body>
    </html>
  );
}

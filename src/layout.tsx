import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ayomikun Ayantunji - Frontend Developer",
  description:
    "Personal portfolio of Ayomikun Ayantunji - Frontend Developer specializing in React.js, TypeScript, and modern web technologies",
  generator: "v0.app",
  keywords: ["Frontend Developer", "React.js", "TypeScript", "JavaScript", "Web Developer", "Ayomikun Ayantunji"],
  authors: [{ name: "Ayomikun Ayantunji" }],
  openGraph: {
    title: "Ayomikun Ayantunji - Frontend Developer",
    description: "Personal portfolio showcasing frontend development projects and skills",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

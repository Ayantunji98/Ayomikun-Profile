import React from "react"
import type { Metadata } from "next/types"
import { GeistSans, GeistMono } from "@geist-ui/react/fonts"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ayomikun Ayantunji - Frontend Developer",
  description:
    "Personal portfolio of Ayomikun Ayantunji - Frontend Developer specializing in React.js, TypeScript, and modern web technologies",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
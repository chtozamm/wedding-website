import type { Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import "./globals.css"

const sourceserif = Source_Serif_4({ subsets: ["cyrillic", "latin"]})

export const metadata: Metadata = {
  title: "Севастьян & Екатерина",
  // description: "",
  openGraph: {
    title: "Севастьян & Екатерина",
  // description: "",
    // url: "https://www....ru",
  },
  twitter: {
    title: "Севастьян & Екатерина",
  // description: "",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={sourceserif.className}>{children}</body>
    </html>
  )
}

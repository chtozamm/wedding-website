import type { Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import "./globals.css"

const sourceserif = Source_Serif_4({ subsets: ["cyrillic", "latin"] })

export const metadata: Metadata = {
  title: "Севастьян & Екатерина",
  description: "💐",
  openGraph: {
    title: "Севастьян & Екатерина",
    description: "💐",
    url: "https://summer-wedding.vercel.app/",
  },
  twitter: {
    title: "Севастьян & Екатерина",
    description: "💐",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${sourceserif.className} flex flex-col bg-white text-base relative select-none selection:bg-black selection:bg-opacity-85 selection:text-white`}>{children}</body>
    </html>
  )
}

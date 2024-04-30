import type { Metadata } from "next"
import { Bebas_Neue, PT_Sans } from "next/font/google"

import "./globals.css"

import SubjectContextProvider from "@/components/subject-context-provider"

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-letters",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-digits",
})

export const metadata: Metadata = {
  title: "Date Intervals",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${bebasNeue.variable}`}>
        <SubjectContextProvider>{children}</SubjectContextProvider>
      </body>
    </html>
  )
}

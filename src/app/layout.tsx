import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


const ageo = localFont({
  src: [
    {
      path: '../../public/font/circular-std.ttf',
    },
  ],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={ageo.className} >{children}</body>
    </html>
  )
}
import './globals.css'

export const metadata = {
  title: 'Gravichem - Coming Soon',
  description: 'Highly Purified Graphite Up to 99.99%',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
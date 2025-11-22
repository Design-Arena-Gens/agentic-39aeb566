import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'محلل منتجات أمازون الإمارات',
  description: 'اكتشف أفضل المنتجات المربحة في أمازون الإمارات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Head from './head'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: 'Sitewise Design Agency',
  description: '台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。',
  generator: 'Next.js',
  keywords: '網站建置,網站設計,數位行銷,品牌設計,網站開發,SEO優化',
  authors: [{ name: 'Sitewise Team' }],
  creator: 'Sitewise Design Agency',
  publisher: 'Sitewise Design Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'http://localhost:3001',
  },
  openGraph: {
    title: 'Sitewise Design Agency',
    description: '台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。',
    type: 'website',
    locale: 'zh_TW',
    url: 'http://localhost:3001',
    siteName: 'Sitewise Design Agency',
    images: [
      {
        url: '/meta-og-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Sitewise Design Agency - 專業網站建置服務',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitewise Design Agency',
    description: '台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。',
    images: ['/meta-og-thumbnail.png'],
    creator: '@Sitewise_official',
    site: '@Sitewise_official',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'website development',
  referrer: 'origin-when-cross-origin',
  other: {
    'msapplication-TileColor': '#10b981',
    'theme-color': '#10b981',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sitewise',
    'application-name': 'Sitewise',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileImage': '/placeholder-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  )
}

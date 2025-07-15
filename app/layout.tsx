import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sitewise.com.tw'),
  title: 'Sitewise Design Agency',
  description: '台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。',
  generator: 'v0.dev',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'website',
    title: 'Sitewise Design Agency',
    description: '台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。',
    url: 'https://sitewise.com.tw',
    siteName: 'Sitewise Design Agency',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg',
        width: 1024,
        height: 1024,
        alt: 'Sitewise Design Agency - 專業網站建置服務',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitewise Design Agency',
    description: '台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg'],
    creator: '@Sitewise_official',
  },
  icons: {
    icon: 'https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg',
    apple: 'https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg',
  },
  other: {
    'article:published_time': '2024-01-01T00:00:00+08:00',
    'article:modified_time': new Date().toISOString(),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

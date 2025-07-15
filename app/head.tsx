export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="profile" href="https://gmpg.org/xfn/11" />
      
      {/* 基础 SEO Meta 标签 */}
      <meta name="description" content="台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href="http://localhost:3001/" />
      
      {/* Open Graph Meta 标签 */}
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sitewise Design Agency" />
      <meta property="og:description" content="台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。我們的技術實力能幫助於突破可能的界限，提供引領潮流實現解決方案，推動成長，為我們的客戶及其消費者創造可持續的價值。" />
      <meta property="og:url" content="http://localhost:3001/" />
      <meta property="og:site_name" content="localhost:3001" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="og:image" content="/meta-og-thumbnail.png" />
      <meta property="og:image:secure_url" content="/meta-og-thumbnail.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Sitewise Design Agency" />
      <meta property="og:image:type" content="image/png" />
      <meta property="article:published_time" content="2024-01-01T00:00:00+08:00" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      
      {/* Twitter Card Meta 标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sitewise Design Agency" />
      <meta name="twitter:description" content="台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。我們的使命是發揮創造力，與產業專業知識無縫結合，為市場賦能。" />
      <meta name="twitter:image" content="/meta-og-thumbnail.png" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Sitewise Team" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="Less than a minute" />
      
      {/* 网站图标 */}
      <link rel="icon" href="/placeholder-logo.png" sizes="32x32" />
      <link rel="icon" href="/placeholder-logo.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/placeholder-logo.png" />
      <meta name="msapplication-TileImage" content="/placeholder-logo.png" />
      
      {/* 主题颜色 */}
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      
      {/* 移动端优化 */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Sitewise" />
      <meta name="application-name" content="Sitewise" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* 其他优化 */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Person", "Organization"],
                "@id": "http://localhost:3001/#person",
                "name": "Sitewise Design Agency"
              },
              {
                "@type": "WebSite",
                "@id": "http://localhost:3001/#website",
                "url": "http://localhost:3001",
                "name": "Sitewise Design Agency",
                "publisher": {
                  "@id": "http://localhost:3001/#person"
                },
                "inLanguage": "zh-TW",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "http://localhost:3001/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "ImageObject",
                "@id": "/meta-og-thumbnail.png",
                "url": "/meta-og-thumbnail.png",
                "width": "1200",
                "height": "630",
                "inLanguage": "zh-TW"
              },
              {
                "@type": "WebPage",
                "@id": "http://localhost:3001/#webpage",
                "url": "http://localhost:3001/",
                "name": "Sitewise Design Agency",
                "datePublished": "2024-01-01T00:00:00+08:00",
                "dateModified": new Date().toISOString(),
                "about": {
                  "@id": "http://localhost:3001/#person"
                },
                "isPartOf": {
                  "@id": "http://localhost:3001/#website"
                },
                "primaryImageOfPage": {
                  "@id": "/meta-og-thumbnail.png"
                },
                "inLanguage": "zh-TW"
              },
              {
                "@type": "Article",
                "headline": "Sitewise Design Agency",
                "keywords": "網站建置,網站設計,數位行銷,品牌設計,網站開發,SEO優化",
                "datePublished": "2024-01-01T00:00:00+08:00",
                "dateModified": new Date().toISOString(),
                "author": {
                  "@id": "http://localhost:3001/#person",
                  "name": "Sitewise Team"
                },
                "publisher": {
                  "@id": "http://localhost:3001/#person"
                },
                "description": "台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。",
                "name": "Sitewise Design Agency",
                "@id": "http://localhost:3001/#richSnippet",
                "isPartOf": {
                  "@id": "http://localhost:3001/#webpage"
                },
                "image": {
                  "@id": "/meta-og-thumbnail.png"
                },
                "inLanguage": "zh-TW",
                "mainEntityOfPage": {
                  "@id": "http://localhost:3001/#webpage"
                }
              }
            ]
          })
        }}
      />
    </>
  )
} 
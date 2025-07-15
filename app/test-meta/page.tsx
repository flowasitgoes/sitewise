import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meta 图片测试 - Sitewise',
  description: '测试 Open Graph 和 Twitter 图片显示',
  openGraph: {
    title: 'Meta 图片测试 - Sitewise',
    description: '测试 Open Graph 和 Twitter 图片显示',
    type: 'website',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg',
        width: 1024,
        height: 1024,
        alt: 'Sitewise Design Agency - 專業網站建置服務',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta 图片测试 - Sitewise',
    description: '测试 Open Graph 和 Twitter 图片显示',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg'],
  },
}

export default function TestMetaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Meta 图片测试页面</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">当前 Meta 图片</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <img 
                src="https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg" 
                alt="Meta OG Thumbnail" 
                className="max-w-full h-auto rounded"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              图片路径: https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">测试工具链接</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Facebook 分享调试工具</h3>
                <a 
                  href="https://developers.facebook.com/tools/debug/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://developers.facebook.com/tools/debug/
                </a>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Twitter Card 验证器</h3>
                <a 
                  href="https://cards-dev.twitter.com/validator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://cards-dev.twitter.com/validator
                </a>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">LinkedIn Post Inspector</h3>
                <a 
                  href="https://www.linkedin.com/post-inspector/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.linkedin.com/post-inspector/
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">当前页面 Meta 信息</h2>
            <div className="bg-gray-100 rounded p-4 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
{`<meta property="og:title" content="Meta 图片测试 - Sitewise" />
<meta property="og:description" content="测试 Open Graph 和 Twitter 图片显示" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg" />
<meta property="og:image:width" content="1024" />
<meta property="og:image:height" content="1024" />
<meta property="og:image:alt" content="Sitewise Design Agency - 專業網站建置服務" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Meta 图片测试 - Sitewise" />
<meta name="twitter:description" content="测试 Open Graph 和 Twitter 图片显示" />
<meta name="twitter:image" content="https://conflux-tech.com/wp-content/uploads/2025/07/ChatGPT-Image-2025年7月15日-下午07_28_29.jpg" />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
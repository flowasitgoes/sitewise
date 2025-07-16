"use client"

import "@/styles/pricing-page.css"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, Globe, Mail, MessageCircle, Users, Palette, Video, Languages, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [language, setLanguage] = useState<"zh" | "en">("zh")

  const translations = {
    zh: {
      nav: {
        pricing: "方案價格",
        services: "加購服務",
        contact: "聯絡我們",
        consult: "立即諮詢",
      },
      hero: {
        title: "專業網站建置",
        subtitle: "讓品牌閃耀線上",
        description:
          "我們是台灣專業的網站建置公司，擁有熟稔最新技術的工程師、知道時代潮流的設計師，以及精通社群媒體操作的行銷與攝影團隊",
        team: "專業團隊",
        design: "時尚設計",
        marketing: "行銷整合",
      },
      pricing: {
        title: "選擇適合的方案",
        subtitle: "從基礎到豪華，我們提供四種不同層級的網站建置方案，滿足各種規模的商家需求",
        selectPlan: "選擇方案",
        pages: "頁面數量",
        maintenance: "維護期為網站上線後 12 個月內有效",
        renewal: "超過維護期可選擇續約（年約 NT$",
        renewalEnd: "），維持內容更新與主機空間",
      },
      plans: {
        basic: {
          name: "Basic",
          subtitle: "基礎方案",
          target: "剛開業或經營初期的小型商家",
          description: "想用最小預算快速建立品牌線上門面，無需太多自訂功能或動態更新",
          features: [
            "Logo 企業識別設計",
            "行銷文案撰寫與優化",
            "一站式網站架構(SPA)、滾動特效",
            "RWD 響應式設計、手機優化",
            "精選圖片（8 張高質感照片 + 1 個影片）",
            "Google Map / FB 串接",
            "上線協助與基本教學",
            "專屬網域名稱與主機空間",
            "代管與協助更新：每月 1 次",
          ],
        },
        pro: {
          name: "Pro",
          subtitle: "擴充方案",
          target: "已有一定客群的商家",
          description: "希望網站能更完整展示菜單、空間與活動資訊，並具備基本的社群串接功能",
          features: [
            "Logo 企業識別設計",
            "行銷文案撰寫與優化",
            "網站版型與視覺設計",
            "RWD 響應式設計、手機優化",
            "精選圖片（12 張高質感照片 + 2 個影片）",
            "基礎 SEO（標題、描述設定）",
            "Google Map / FB 串接",
            "官方 Line 串接",
            "上線協助與基本教學",
            "專屬網域名稱與主機空間",
            "代管與協助更新：每月 1 次",
          ],
        },
        branding: {
          name: "Branding",
          subtitle: "品牌整合方案",
          target: "重視品牌形象的業者",
          description: "透過更豐富的頁面結構與圖文內容，強化顧客印象與搜尋曝光",
          features: [
            "Logo 企業識別設計",
            "行銷文案撰寫與優化",
            "網站版型與視覺設計",
            "客製多功能程式碼",
            "RWD 響應式設計、手機優化",
            "精選圖片（15 張高質感照片 + 3 個影片）",
            "基礎 SEO（標題、描述設定）",
            "Google Map / FB 串接",
            "官方 Line 串接",
            "Email 系統整合",
            "上線協助與基本教學",
            "專屬網域名稱與主機空間",
            "代管與協助更新：每月 1 次",
          ],
        },
        premium: {
          name: "Premium",
          subtitle: "豪華型方案",
          target: "重視品牌價值與視覺表現",
          description: "透過專業攝影與影片呈現，建立獨特線上形象、吸引媒體與合作機會",
          features: [
            "Logo 企業識別設計",
            "行銷文案撰寫與優化",
            "網站版型與視覺設計",
            "客製多功能程式碼",
            "RWD 響應式設計、手機優化",
            "精選圖片（20 張高質感照片 + 3-5 個影片）",
            "團隊現場攝影、影片製作",
            "基礎 SEO（標題、描述設定）",
            "Google Map / FB 串接",
            "官方 Line 串接",
            "Email 系統整合",
            "上線協助與基本教學",
            "專屬網域名稱與主機空間",
            "代管與協助更新：每月 1 次",
          ],
        },
      },
      services: {
        title: "可加購服務",
        subtitle: "彈性報價，視需求而定，讓您的網站功能更加完整",
        items: [
          { name: "多次內容更新", price: "2,000 起" },
          { name: "多語系網站", price: "3,000 起" },
          { name: "自動化表單", price: "5,000～10,000" },
          { name: "社群經營代操", price: "每月 5,000 起" },
          { name: "短影片拍攝 & 行銷", price: "10,000 起" },
        ],
        customNote: "歡迎來訊洽詢更多客製化方案",
        consultNow: "立即諮詢",
      },
      cta: {
        title: "親切的客服團隊",
        description: "Sitewise 會一步步陪你上線完成，讓我們幫您打造專屬的線上品牌形象",
        emailConsult: "Email 諮詢",
        lineConsult: "Line 諮詢",
      },
      footer: {
        description: "台灣專業網站建置公司，提供完整的數位解決方案，讓您的品牌在線上發光發熱。",
        services: "服務項目",
        serviceItems: ["網站設計開發", "品牌視覺設計", "社群媒體經營", "攝影影片製作"],
        contact: "聯絡方式",
        copyright: "All rights reserved.",
      },
      badges: {
        popular: "熱門推薦",
        luxury: "豪華推薦",
      },
    },
    en: {
      nav: {
        pricing: "Pricing",
        services: "Services",
        contact: "Contact",
        consult: "Get Quote",
      },
      hero: {
        title: "Professional Website Development",
        subtitle: "Make Your Brand Shine Online",
        description:
          "We are a professional website development company in Taiwan, with engineers proficient in the latest technologies, designers who understand current trends, and marketing & photography teams skilled in social media operations",
        team: "Professional Team",
        design: "Modern Design",
        marketing: "Marketing Integration",
      },
      pricing: {
        title: "Choose the Right Plan",
        subtitle:
          "From basic to premium, we offer four different levels of website development plans to meet the needs of businesses of all sizes",
        selectPlan: "Select Plan",
        pages: "Pages",
        maintenance: "Maintenance period is valid for 12 months after website launch",
        renewal: "After maintenance period, you can choose to renew (Annual fee NT$",
        renewalEnd: ") to maintain content updates and hosting space",
      },
      plans: {
        basic: {
          name: "Basic",
          subtitle: "Basic Plan",
          target: "Small businesses just starting or in early stages",
          description:
            "Build your brand's online presence with minimal budget, no need for extensive custom features or dynamic updates",
          features: [
            "Logo & Corporate Identity Design",
            "Marketing Copywriting & Optimization",
            "Single Page Application (SPA)",
            "RWD Responsive Design & Mobile Optimization",
            "Curated Images (8 high-quality photos + 1 video)",
            "Google Map / FB Integration",
            "Launch Assistance & Basic Training",
            "Dedicated Domain Name & Hosting Space",
            "Management & Update Assistance: Once per month",
          ],
        },
        pro: {
          name: "Pro",
          subtitle: "Enhanced Plan",
          target: "Businesses with established customer base",
          description:
            "Comprehensive website showcasing menus, spaces, and event information with basic social media integration",
          features: [
            "Logo & Corporate Identity Design",
            "Marketing Copywriting & Optimization",
            "Crafted  Visual Design",
            "RWD Responsive Design & Mobile Optimization",
            "Curated Images (12 high-quality photos + 2 videos)",
            "Basic SEO (Title & Description Setup)",
            "Google Map / FB Integration",
            "Official Line Integration",
            "Launch Assistance & Basic Training",
            "Dedicated Domain Name & Hosting Space",
            "Management & Update Assistance: Once per month",
          ],
        },
        branding: {
          name: "Branding",
          subtitle: "Brand Integration Plan",
          target: "Businesses focused on brand image",
          description: "Strengthen customer impression and search visibility through richer page structure and content",
          features: [
            "Logo & Corporate Identity Design",
            "Marketing Copywriting & Optimization",
            "Crafted  Visual Design",
            "Custom Multi-functional Code",
            "RWD Responsive Design & Mobile Optimization",
            "Curated Images (15 high-quality photos + 3 videos)",
            "Basic SEO (Title & Description Setup)",
            "Google Map / FB Integration",
            "Official Line Integration",
            "Email System Integration",
            "Launch Assistance & Basic Training",
            "Dedicated Domain Name & Hosting Space",
            "Management & Update Assistance: Once per month",
          ],
        },
        premium: {
          name: "Premium",
          subtitle: "Luxury Plan",
          target: "Businesses valuing brand value & visual presentation",
          description:
            "Create unique online image through professional photography and video production, attracting media and partnership opportunities",
          features: [
            "Logo & Corporate Identity Design",
            "Marketing Copywriting & Optimization",
            "Crafted  Visual Design",
            "Custom Multi-functional Code",
            "RWD Responsive Design & Mobile Optimization",
            "Curated Images (20 high-quality photos + 3-5 videos)",
            "On-site Photography & Video Production by Team",
            "Basic SEO (Title & Description Setup)",
            "Google Map / FB Integration",
            "Official Line Integration",
            "Email System Integration",
            "Launch Assistance & Basic Training",
            "Dedicated Domain Name & Hosting Space",
            "Management & Update Assistance: Once per month",
          ],
        },
      },
      services: {
        title: "Additional Services",
        subtitle: "Flexible pricing based on requirements, making your website functionality more complete",
        items: [
          { name: "Multiple Content Updates", price: "From 2,000" },
          { name: "Multi-language Website", price: "From 3,000" },
          { name: "Automated Forms", price: "5,000～10,000" },
          { name: "Social Media Management", price: "From 5,000/month" },
          { name: "Short Video Production & Marketing", price: "From 10,000" },
        ],
        customNote: "Welcome to inquire about more customized solutions",
        consultNow: "Consult Now",
      },
      cta: {
        title: "Sincerely Yours",
        description:
          "Sitewise will guide you step by step to get online. You can ask questions anytime during the process! Let us help you create your unique online brand image",
        emailConsult: "Email Consultation",
        lineConsult: "Line Consultation",
      },
      footer: {
        description:
          "Professional website development company in Taiwan, providing comprehensive digital solutions to make your brand shine online.",
        services: "Services",
        serviceItems: [
          "Website Design & Development",
          "Brand Visual Design",
          "Social Media Management",
          "Photography & Video Production",
        ],
        contact: "Contact",
        copyright: "All rights reserved.",
      },
      badges: {
        popular: "Most Popular",
        luxury: "Premium Choice",
      },
    },
  }

  const t = translations[language]

  const plans = [
    {
      name: "Basic",
      subtitle: t.plans.basic.subtitle,
      price: "42,000",
      target: t.plans.basic.target,
      description: t.plans.basic.description,
      pages: "3–5",
      backgroundColor: "bg-slate-50/50",
      borderColor: "border-slate-200",
      features: t.plans.basic.features,
      maintenance: "12,000",
      popular: false,
    },
    {
      name: "Pro",
      subtitle: t.plans.pro.subtitle,
      price: "60,000",
      target: t.plans.pro.target,
      description: t.plans.pro.description,
      pages: "6–10",
      backgroundColor: "bg-blue-50/60",
      borderColor: "border-blue-200",
      features: t.plans.pro.features,
      maintenance: "12,000",
      popular: true,
    },
    {
      name: "Branding",
      subtitle: t.plans.branding.subtitle,
      price: "72,000",
      target: t.plans.branding.target,
      description: t.plans.branding.description,
      pages: "10–15",
      backgroundColor: "bg-purple-50/50",
      borderColor: "border-purple-200",
      features: t.plans.branding.features,
      maintenance: "15,000",
      popular: false,
    },
    {
      name: "Premium",
      subtitle: t.plans.premium.subtitle,
      price: "85,000",
      target: t.plans.premium.target,
      description: t.plans.premium.description,
      pages: "15–20",
      backgroundColor: "bg-green-50/60",
      borderColor: "border-green-200",
      features: t.plans.premium.features,
      maintenance: "15,000",
      popular: true,
    },
  ]

  const additionalServices = t.services.items.map((item, index) => ({
    icon: [
      <FileText className="w-5 h-5" />,
      <Languages className="w-5 h-5" />,
      <Mail className="w-5 h-5" />,
      <TrendingUp className="w-5 h-5" />,
      <Video className="w-5 h-5" />,
    ][index],
    name: item.name,
    price: item.price,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-800">Sitewise</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.pricing}
              </Link>
              <Link href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.services}
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                className="border-slate-300 hover:bg-slate-50 bg-transparent"
                key="language-toggle"
              >
                <Languages className="w-4 h-4 mr-1" />
                {language === "zh" ? "EN" : "中文"}
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800" key="consult-button">
                {t.nav.consult}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              {t.hero.title}
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {t.hero.subtitle}
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{t.hero.description}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t.hero.team}
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                {t.hero.design}
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                {t.hero.marketing}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">{t.pricing.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.backgroundColor} ${plan.borderColor} ${
                  plan.popular
                    ? plan.name === "Pro"
                      ? "ring-2 ring-blue-400 scale-105 shadow-blue-100/50"
                      : "ring-2 ring-amber-400 scale-105 shadow-amber-100/50"
                    : "hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div
                    className={`absolute top-0 right-0 text-white px-3 py-1 text-xs font-medium ${
                      plan.name === "Pro"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : "bg-gradient-to-r from-amber-500 to-orange-500"
                    }`}
                  >
                    {plan.name === "Premium" ? t.badges.luxury : t.badges.popular}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {plan.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-medium text-slate-900">{plan.subtitle}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-light text-slate-900">NT$</span>
                    <span className="text-3xl font-semibold text-slate-900">{plan.price.toLocaleString()}</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    <div className="font-medium text-slate-700 mb-1">{plan.target}</div>
                    <div className="text-slate-500">{plan.description}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">
                      {t.pricing.pages}：{plan.pages} {language === "zh" ? "頁" : "Pages"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="text-xs text-slate-500 space-y-1">
                    <div>👉 {t.pricing.maintenance}</div>
                    <div>
                      👉 {t.pricing.renewal}
                      {plan.maintenance.toLocaleString()}
                      {t.pricing.renewalEnd}
                    </div>
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" : "bg-slate-900 hover:bg-slate-800"}`}
                  >
                    {t.pricing.selectPlan}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">{t.services.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="font-medium text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-blue-600 font-semibold">NT${service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">👉 {t.services.customNote}</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.services.consultNow}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">☕</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">{t.cta.title}</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{t.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Mail className="w-4 h-4 mr-2" />
                {t.cta.emailConsult}
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.cta.lineConsult}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">Sitewise</span>
              </div>
              <p className="text-slate-400 leading-relaxed">{t.footer.description}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="font-semibold mb-4">{t.footer.services}</h3>
              <ul className="space-y-2 text-slate-400">
                {t.footer.serviceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>flowasitgoes@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>@Sitewise_official</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Sitewise. {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import React from "react";
import Link from "next/link";
import {
  Headphones,
  ShoppingCart,
  Heart,
  GraduationCap,
  Building,
  CreditCard,
  Home,
  Users,
  MessageCircle,
  Globe,
  ArrowLeft,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "الفئات",
  description: "استكشف فئات المساعدات الصوتية",
};

const categories = [
  {
    id: "customer-service",
    title: "خدمة العملاء",
    description:
      "مساعدات صوتية متطورة للرد على استفسارات العملاء وحل مشاكلهم بكفاءة عالية",
    icon: <Headphones className="h-10 w-10" />,
    color: "bg-blue-500",
    projects: "120+ مشروع",
    popular: true,
  },
  {
    id: "ecommerce",
    title: "التجارة الإلكترونية",
    description:
      "مساعدات ذكية لمساعدة العملاء في التسوق وإتمام عمليات الشراء والدفع",
    icon: <ShoppingCart className="h-10 w-10" />,
    color: "bg-green-500",
    projects: "95+ مشروع",
    popular: true,
  },
  {
    id: "healthcare",
    title: "الرعاية الصحية",
    description:
      "حلول صوتية للمؤسسات الطبية لتحسين تجربة المرضى وتقديم المعلومات الصحية",
    icon: <Heart className="h-10 w-10" />,
    color: "bg-red-500",
    projects: "80+ مشروع",
    popular: false,
  },
  {
    id: "education",
    title: "التعليم",
    description:
      "مساعدات تعليمية تفاعلية لدعم الطلاب والمعلمين في العملية التعليمية",
    icon: <GraduationCap className="h-10 w-10" />,
    color: "bg-purple-500",
    projects: "65+ مشروع",
    popular: false,
  },
  {
    id: "hospitality",
    title: "الضيافة والسياحة",
    description: "خدمات صوتية للفنادق والمطاعم لتحسين تجربة النزلاء والزوار",
    icon: <Building className="h-10 w-10" />,
    color: "bg-orange-500",
    projects: "70+ مشروع",
    popular: false,
  },
  {
    id: "banking",
    title: "المصارف والتمويل",
    description:
      "حلول مصرفية آمنة للاستفسارات المالية والخدمات المصرفية الأساسية",
    icon: <CreditCard className="h-10 w-10" />,
    color: "bg-indigo-500",
    projects: "55+ مشروع",
    popular: false,
  },
  {
    id: "real-estate",
    title: "العقارات",
    description:
      "مساعدات لوكالات العقارات لعرض العقارات والإجابة على استفسارات العملاء",
    icon: <Home className="h-10 w-10" />,
    color: "bg-teal-500",
    projects: "45+ مشروع",
    popular: false,
  },
  {
    id: "business",
    title: "الأعمال والشركات",
    description: "حلول متكاملة للشركات الكبيرة والمتوسطة لأتمتة خدمة العملاء",
    icon: <Users className="h-10 w-10" />,
    color: "bg-cyan-500",
    projects: "90+ مشروع",
    popular: true,
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-500 flex justify-center items-center py-20">
        <div className="absolute inset-0 bg-pattern opacity-15"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-300/20 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Globe className="h-4 w-4" />
              جميع الفئات
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300">
              استكشف فئات المساعدات الصوتية
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              اختر من بين مجموعة واسعة من المساعدات الصوتية المتخصصة لمختلف
              المجالات والصناعات
            </p>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
      </section>

      {/* Categories Grid */}
      <section className="bg-red-50 py-20">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              أكثر من 500 مساعد صوتي متاح
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              اكتشف مجموعة متنوعة من المساعدات الصوتية المصممة خصيصاً لتلبية
              احتياجات كل صناعة
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                {/* Category Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${category.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  {category.popular && (
                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                      <Star className="h-3 w-3" />
                      الأكثر طلباً
                    </div>
                  )}
                </div>

                {/* Category Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Category Stats */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {category.projects}
                  </span>
                  <div className="flex items-center gap-1 text-red-500">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">متعدد اللغات</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/categories/${category.id}`}>
                  <Button
                    className="w-full bg-red-600 text-white hover:bg-red-700 rounded-xl group-hover:bg-red-700 transition-colors"
                    size="sm"
                  >
                    استكشف الفئة
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                لم تجد ما تبحث عنه؟
              </h3>
              <p className="text-gray-600 mb-6">
                يمكننا إنشاء مساعد صوتي مخصص يناسب احتياجات مشروعك تماماً
              </p>
              <a
                href="https://wa.link/nyse0u"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-300 text-red-600 hover:bg-yellow-200 text-lg px-8 py-3 rounded-xl">
                  طلب مساعد مخصص
                  <MessageCircle className="mr-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

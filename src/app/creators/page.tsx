import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  MessageCircle,
  Users,
  Trophy,
  Globe,
  ArrowLeft,
  ExternalLink,
  MapPin,
  Verified,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "المطورون",
  description: "تعرف على نخبة المطورين المعتمدين",
};

const creators = [
  {
    id: "ahmed-ali",
    name: "أحمد علي محمد",
    title: "خبير المساعدات الصوتية متعددة اللغات",
    avatar: "/logo.png", // Using the available logo as placeholder
    rating: 4.9,
    reviews: 127,
    projects: 85,
    languages: ["العربية", "الإنجليزية", "الفرنسية"],
    specialties: ["خدمة العملاء", "التجارة الإلكترونية"],
    location: "الرياض, السعودية",
    verified: true,
    topRated: true,
    responseTime: "خلال ساعتين",
    bio: "متخصص في تطوير المساعدات الصوتية الذكية مع أكثر من 5 سنوات من الخبرة في مجال الذكاء الاصطناعي",
  },
  {
    id: "fatima-hassan",
    name: "فاطمة حسن أحمد",
    title: "مطورة حلول الرعاية الصحية",
    avatar: "/logo.png",
    rating: 4.8,
    reviews: 93,
    projects: 62,
    languages: ["العربية", "الإنجليزية"],
    specialties: ["الرعاية الصحية", "التعليم"],
    location: "دبي, الإمارات",
    verified: true,
    topRated: false,
    responseTime: "خلال 4 ساعات",
    bio: "خبيرة في تصميم المساعدات الصوتية للقطاع الطبي مع تركيز على تحسين تجربة المرضى",
  },
  {
    id: "omar-ibrahim",
    name: "عمر إبراهيم سالم",
    title: "مختص في الحلول المصرفية",
    avatar: "/logo.png",
    rating: 4.7,
    reviews: 76,
    projects: 45,
    languages: ["العربية", "الإنجليزية", "الألمانية"],
    specialties: ["المصارف", "التمويل"],
    location: "القاهرة, مصر",
    verified: true,
    topRated: true,
    responseTime: "خلال 6 ساعات",
    bio: "متخصص في تطوير الحلول المصرفية الآمنة والمساعدات الصوتية للخدمات المالية",
  },
  {
    id: "noor-mohammed",
    name: "نور محمد الزهراني",
    title: "خبيرة التجارة الإلكترونية",
    avatar: "/logo.png",
    rating: 5.0,
    reviews: 142,
    projects: 98,
    languages: ["العربية", "الإنجليزية", "الإسبانية"],
    specialties: ["التجارة الإلكترونية", "التسويق"],
    location: "جدة, السعودية",
    verified: true,
    topRated: true,
    responseTime: "خلال ساعة",
    bio: "رائدة في مجال المساعدات الصوتية للتجارة الإلكترونية مع سجل حافل من المشاريع الناجحة",
  },
  {
    id: "khalid-salem",
    name: "خالد سالم العتيبي",
    title: "مطور حلول الضيافة والسياحة",
    avatar: "/logo.png",
    rating: 4.6,
    reviews: 58,
    projects: 34,
    languages: ["العربية", "الإنجليزية", "الإيطالية"],
    specialties: ["الضيافة", "السياحة"],
    location: "الدوحة, قطر",
    verified: true,
    topRated: false,
    responseTime: "خلال 8 ساعات",
    bio: "خبير في تطوير المساعدات الصوتية لقطاع الضيافة مع تركيز على تحسين تجربة النزلاء",
  },
  {
    id: "sara-abdullah",
    name: "سارة عبدالله المنصوري",
    title: "مختصة في الحلول التعليمية",
    avatar: "/logo.png",
    rating: 4.9,
    reviews: 89,
    projects: 56,
    languages: ["العربية", "الإنجليزية", "الفرنسية"],
    specialties: ["التعليم", "التدريب"],
    location: "أبوظبي, الإمارات",
    verified: true,
    topRated: true,
    responseTime: "خلال 3 ساعات",
    bio: "متخصصة في تطوير المساعدات التعليمية التفاعلية لدعم العملية التعليمية",
  },
];

const stats = [
  {
    number: "500+",
    label: "مطور معتمد",
    icon: <Users className="h-8 w-8" />,
  },
  {
    number: "1200+",
    label: "مشروع مكتمل",
    icon: <Trophy className="h-8 w-8" />,
  },
  {
    number: "4.8",
    label: "متوسط التقييم",
    icon: <Star className="h-8 w-8" />,
  },
  {
    number: "15+",
    label: "لغة مدعومة",
    icon: <Globe className="h-8 w-8" />,
  },
];

export default function CreatorsPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-500 flex justify-center items-center py-20">
        <div className="absolute inset-0 bg-pattern opacity-15"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-300/20 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Users className="h-4 w-4" />
              المطورون المعتمدون
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300">
              تعرف على نخبة المطورين
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              فريق من الخبراء المعتمدين في تطوير المساعدات الصوتية متعددة اللغات
              لجميع المجالات
            </p>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="bg-red-50 py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              مطورونا المتميزون
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              اختر من بين نخبة من المطورين المعتمدين والمتخصصين في مختلف
              المجالات
            </p>
          </div>

          {/* Creators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creators.map((creator) => (
              <div
                key={creator.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Creator Header */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        width={60}
                        height={60}
                        className="rounded-full border-3 border-yellow-300"
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1">
                          <Verified className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {creator.name}
                        </h3>
                        {creator.topRated && (
                          <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            مميز
                          </div>
                        )}
                      </div>
                      <p className="text-red-600 text-sm font-medium mb-2">
                        {creator.title}
                      </p>
                      <div className="flex items-center gap-1 text-yellow-500 mb-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                          {creator.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({creator.reviews} تقييم)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {creator.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>{creator.projects} مشروع</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{creator.responseTime}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{creator.location}</span>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {creator.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 mb-2">
                      اللغات المدعومة:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {creator.languages.map((language) => (
                        <span
                          key={language}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/creators/${creator.id}`} className="flex-1">
                      <Button
                        className="w-full bg-red-600 text-white hover:bg-red-700 rounded-xl"
                        size="sm"
                      >
                        عرض الملف الشخصي
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-xl px-3"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl"
            >
              عرض المزيد من المطورين
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Join as Creator CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                انضم إلى فريق المطورين
              </h3>
              <p className="text-xl mb-6 text-red-100">
                هل لديك خبرة في تطوير المساعدات الصوتية؟ انضم إلى منصتنا وابدأ
                في كسب دخل إضافي
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.link/nyse0u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-yellow-300 text-red-600 hover:bg-yellow-200 text-lg px-8 py-3 rounded-xl">
                    ابدأ كمطور
                    <ExternalLink className="mr-2 h-5 w-5" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3 rounded-xl"
                >
                  تعرف على المتطلبات
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

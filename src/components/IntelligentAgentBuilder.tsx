"use client";

import React, { useState } from "react";
import {
  Utensils,
  Hotel,
  Stethoscope,
  Store,
  ShoppingCart,
  Info,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";

interface AgentCapability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BusinessType {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  capabilities: AgentCapability[];
}

const businessTypes: BusinessType[] = [
  {
    id: "restaurants",
    name: "المطاعم",
    icon: <Utensils className="h-6 w-6" />,
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    capabilities: [
      {
        title: "استلام الحجوزات",
        description:
          "حجز الطاولات وإدارة المواعيد تلقائياً مع تأكيد التفاصيل للعملاء",
        icon: <Clock className="h-5 w-5" />,
      },
      {
        title: "أخذ الطلبات الهاتفية",
        description: "تلقي طلبات الطعام هاتفياً وإدخالها مباشرة في نظام المطعم",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        title: "الإجابة على الاستفسارات",
        description: "تقديم معلومات عن قائمة الطعام والأسعار ومواعيد العمل",
        icon: <Info className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "hotels",
    name: "الفنادق",
    icon: <Hotel className="h-6 w-6" />,
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    capabilities: [
      {
        title: "حجز الغرف",
        description: "إدارة حجوزات الغرف وتأكيد التوفر والأسعار تلقائياً",
        icon: <CheckCircle className="h-5 w-5" />,
      },
      {
        title: "خدمة استقبال ذكية",
        description:
          "الرد على استفسارات النزلاء حول خدمات الفندق والمرافق المتاحة",
        icon: <Info className="h-5 w-5" />,
      },
      {
        title: "طلب الخدمات",
        description: "تلقي طلبات خدمة الغرف والتنظيف والصيانة من النزلاء",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "clinics",
    name: "العيادات",
    icon: <Stethoscope className="h-6 w-6" />,
    color: "text-green-700",
    bgColor: "bg-green-100",
    capabilities: [
      {
        title: "حجز المواعيد",
        description: "إدارة مواعيد المرضى وجدولة الزيارات مع إرسال التذكيرات",
        icon: <Clock className="h-5 w-5" />,
      },
      {
        title: "الاستشارات الأولية",
        description: "الإجابة على الاستفسارات الطبية الأساسية وتوجيه المرضى",
        icon: <Info className="h-5 w-5" />,
      },
      {
        title: "متابعة المرضى",
        description: "التواصل مع المرضى لمتابعة حالتهم وتذكيرهم بالأدوية",
        icon: <CheckCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "stores",
    name: "المتاجر",
    icon: <Store className="h-6 w-6" />,
    color: "text-purple-700",
    bgColor: "bg-purple-100",
    capabilities: [
      {
        title: "استلام الطلبات",
        description:
          "تلقي طلبات العملاء هاتفياً وإدخالها مباشرة في نظام المبيعات",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        title: "خدمة استفسارات المنتجات",
        description:
          "تقديم معلومات تفصيلية عن المنتجات والمخزون والأسعار والعروض الترويجية",
        icon: <Info className="h-5 w-5" />,
      },
      {
        title: "متابعة الطلبات والشحن",
        description:
          "تزويد العملاء بمعلومات حول حالة طلباتهم ومواعيد التسليم المتوقعة",
        icon: <Clock className="h-5 w-5" />,
      },
    ],
  },
];

const IntelligentAgentBuilder = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType>(
    businessTypes[3]
  ); // Default to stores

  return (
    <section className="bg-red-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Zap className="h-4 w-4" />
            وكيل ذكي مخصص
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
            بناء وكيل ذكاء صوتي
            <span className="block text-gray-800">حسب نوع منشأتك</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
            يمكن للمنشآت المختلفة الاستفادة من خدمات وكلاء الذكاء الصوتي بطرق
            متخصصة
          </p>
        </div>

        {/* Business Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {businessTypes.map((business) => (
            <button
              key={business.id}
              onClick={() => setSelectedBusiness(business)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedBusiness.id === business.id
                  ? `${business.bgColor} ${business.color} shadow-lg border-2 border-current`
                  : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              {business.icon}
              {business.name}
            </button>
          ))}
        </div>

        {/* Selected Business Agent Details */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 border-2 border-red-100 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-md">
                {selectedBusiness.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  وكيل ذكاء صوتي للـ{selectedBusiness.name}
                </h3>
                <p className="text-gray-600">
                  مصمم خصيصاً لاحتياجات {selectedBusiness.name}
                </p>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedBusiness.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border-1 border-red-500 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center mb-4 shadow-sm">
                    {capability.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentAgentBuilder;

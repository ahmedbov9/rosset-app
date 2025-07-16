import React from "react";
import {
  MessageCircle,
  Globe,
  FileText,
  Zap,
  ArrowRight,
  Languages,
  Info,
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "أدخل الرسالة الترحيبية",
    description:
      "اجعل مساعدك الصوتي متعدد اللغات يتفاعل مع عملائك بترحيب مخصص ومناسب لطبيعة أعمالك",
    icon: <MessageCircle className="h-8 w-8" />,
  },
  {
    id: "02",
    title: "حدد اللغات المدعومة",
    description:
      "اختر اللغات التي سيدعمها مساعدك الصوتي لتلبية احتياجات مختلف العملاء حول العالم",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    id: "03",
    title: "أدخل تعليمات الاستجابة",
    description:
      "قم بتخصيص طريقة تفاعل المساعد مع الاستفسارات باللغات المختلفة وكيفية التبديل بينها",
    icon: <FileText className="h-8 w-8" />,
  },
  {
    id: "04",
    title: "إنشاء المساعد الصوتي",
    description:
      "تفعيل المساعد الصوتي متعدد اللغات لخدمة العملاء من مختلف البلدان بلغاتهم المفضلة",
    icon: <Zap className="h-8 w-8" />,
  },
];

const ConfigurationStepsSection = () => {
  return (
    <section className="bg-red-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Languages className="h-4 w-4" />
            متعدد اللغات
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
            كيفية إعداد المساعد الصوتي
            <span className="block text-gray-800">متعدد اللغات</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
            إليك الخطوات البسيطة لإعداد مساعد صوتي يدعم لغات متعددة لخدمة عملائك
            العالميين
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Card */}
              <div className="bg-white p-6 rounded-2xl border-1 border-red-500">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center border-4 border-red-100">
                    <span className="text-lg font-bold text-white">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Icon Container */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 bg-red-500 text-white`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes Section */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Important Note */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  ملاحظة هامة
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  يمكن للمساعد الصوتي التعرف تلقائيًا على لغة المستخدم والرد
                  بنفس اللغة، مما يوفر تجربة تفاعلية سلسة للعملاء من مختلف
                  الثقافات.
                </p>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-amber-900 mb-3">نصيحة</h4>
                <p className="text-amber-800 leading-relaxed">
                  استخدم نماذج لغوية متقدمة للتأكد من أن المساعد الصوتي يفهم
                  اللهجات المختلفة والتعبيرات الثقافية الخاصة بكل لغة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationStepsSection;

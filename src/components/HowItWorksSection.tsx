import React from "react";
import {
  Settings,
  UserCheck,
  DollarSign,
  Globe,
  ArrowRight,
  Languages,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "إعداد المساعد الصوتي متعدد اللغات",
    description:
      "قم بتخصيص المساعد الصوتي بالمهارات اللغوية والمعرفة المناسبة لأعمالك التجارية العالمية",
    icon: <Settings className="h-8 w-8" />,
  },
  {
    id: "02",
    title: "اطلب موافقة صاحب العمل",
    description:
      "أرسل المساعد الصوتي للموافقة من قبل صاحب العمل للتأكد من تلبية جميع المتطلبات اللغوية والفنية",
    icon: <UserCheck className="h-8 w-8" />,
  },
  {
    id: "03",
    title: "600 ريال سعودي ربح",
    description:
      "استمتع بعائد قدره 600 ريال سعودي لكل مساعد صوتي متعدد اللغات تقوم بتطويره",
    icon: <DollarSign className="h-8 w-8" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-red-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Globe className="h-4 w-4" />
            متعدد اللغات
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
            كيف يعمل المساعد الصوتي
            <span className="block text-gray-800">متعدد اللغات</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
            منصة روزيت تجعل من السهل إنشاء وتنفيذ مساعد صوتي ذكي يدعم لغات
            متعددة لخدمة عملائك حول العالم
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

                {/* Arrow for large screens (between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 translate-x-full">
                    <ArrowRight className="h-8 w-8 text-red-300" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              جاهز لبدء رحلتك؟
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              انضم إلى مئات الشركات التي تستخدم مساعدنا الصوتي متعدد اللغات
            </p>
            <a
              href="https://wa.link/nyse0u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Languages className="h-6 w-6" />
              صمم مساعدك الصوتي متعدد اللغات الآن
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

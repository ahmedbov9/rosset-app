import React from "react";
import Link from "next/link";
import {
  Settings,
  UserCheck,
  DollarSign,
  MessageCircle,
  Zap,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  Languages,
  Shield,
  Clock,
  Users,
  PlayCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "كيف يعمل المساعد الصوتي",
  description: "تعرف على كيفية عمل المساعد الصوتي",
};

const mainSteps = [
  {
    id: "01",
    title: "اختر نوع المساعد المطلوب",
    description:
      "حدد المجال الذي تريد المساعد الصوتي له (خدمة العملاء، التجارة الإلكترونية، الرعاية الصحية، إلخ)",
    icon: <Settings className="h-12 w-12" />,
    color: "bg-blue-500",
    features: [
      "اختيار من 8+ مجالات متخصصة",
      "تخصيص حسب نوع العمل",
      "دعم متعدد الصناعات",
    ],
  },
  {
    id: "02",
    title: "تخصيص المساعد الصوتي",
    description:
      "أدخل الرسالة الترحيبية، حدد اللغات المدعومة، وأضف تعليمات الاستجابة المخصصة",
    icon: <MessageCircle className="h-12 w-12" />,
    color: "bg-green-500",
    features: [
      "رسائل ترحيبية مخصصة",
      "دعم أكثر من 15 لغة",
      "تعليمات استجابة ذكية",
    ],
  },
  {
    id: "03",
    title: "اختيار المطور المناسب",
    description:
      "تصفح ملفات المطورين المعتمدين واختر الأنسب حسب التخصص والتقييمات والخبرة",
    icon: <UserCheck className="h-12 w-12" />,
    color: "bg-purple-500",
    features: ["500+ مطور معتمد", "تقييمات حقيقية", "تخصصات متنوعة"],
  },
  {
    id: "04",
    title: "تطوير ومراجعة المساعد",
    description:
      "يقوم المطور بإنشاء المساعد الصوتي ويرسله لك للمراجعة والموافقة النهائية",
    icon: <Zap className="h-12 w-12" />,
    color: "bg-orange-500",
    features: ["تطوير احترافي", "مراجعة شاملة", "تعديلات مجانية"],
  },
  {
    id: "05",
    title: "التشغيل واستلام الأرباح",
    description:
      "بعد الموافقة، يتم تشغيل المساعد ويحصل المطور على 600 ريال عن كل مساعد مكتمل",
    icon: <DollarSign className="h-12 w-12" />,
    color: "bg-red-500",
    features: ["600 ريال لكل مساعد", "دفع فوري", "متابعة مستمرة"],
  },
];

const detailedSteps = [
  {
    title: "إعداد المعلومات الأساسية",
    items: [
      "أدخل اسم الشركة أو المشروع",
      "حدد نوع الخدمة أو المنتج",
      "اختر الفئة المناسبة من القائمة",
      "أضف وصف مختصر عن احتياجاتك",
    ],
  },
  {
    title: "تخصيص التفاعل الصوتي",
    items: [
      "كتابة الرسالة الترحيبية بلغتك المفضلة",
      "اختيار اللغات التي سيدعمها المساعد",
      "تحديد نبرة الصوت (رسمية، ودية، احترافية)",
      "إضافة عبارات شائعة خاصة بمجال عملك",
    ],
  },
  {
    title: "إعداد سيناريوهات الاستجابة",
    items: [
      "تحديد الأسئلة الشائعة من العملاء",
      "كتابة الردود المناسبة لكل سؤال",
      "إعداد طريقة التعامل مع الطلبات المعقدة",
      "تحديد متى يتم تحويل المكالمة لمتخصص",
    ],
  },
  {
    title: "الاختبار والتحسين",
    items: [
      "اختبار المساعد مع سيناريوهات مختلفة",
      "تجربة التبديل بين اللغات",
      "فحص جودة الفهم والاستجابة",
      "إجراء التعديلات النهائية حسب الحاجة",
    ],
  },
];

const benefits = [
  {
    icon: <Languages className="h-8 w-8" />,
    title: "دعم متعدد اللغات",
    description: "يدعم أكثر من 15 لغة عالمية مع إمكانية التبديل التلقائي",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "أمان وموثوقية",
    description: "حماية كاملة للبيانات مع ضمان الخصوصية والامتثال للمعايير",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "متوفر 24/7",
    description: "خدمة مستمرة على مدار الساعة بدون انقطاع أو أعطال",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "سهولة الاستخدام",
    description: "واجهة بسيطة وسهلة للعملاء من جميع الأعمار والخلفيات",
  },
];

const faqs = [
  {
    question: "كم يستغرق تطوير المساعد الصوتي؟",
    answer:
      "عادة ما يستغرق تطوير المساعد الصوتي من 3-7 أيام عمل حسب تعقيد المتطلبات وتوفر المطور.",
  },
  {
    question: "هل يمكن تعديل المساعد بعد إنشاؤه؟",
    answer:
      "نعم، يمكن إجراء تعديلات على المساعد الصوتي في أي وقت. التعديلات البسيطة مجانية، أما التغييرات الجوهرية فقد تتطلب رسوم إضافية.",
  },
  {
    question: "كيف يتم ضمان جودة المساعد الصوتي؟",
    answer:
      "جميع المطورين معتمدون ومُقيّمون من قبل العملاء السابقين. كما نوفر فترة اختبار ومراجعة قبل التسليم النهائي.",
  },
  {
    question: "ما هي تكلفة المساعد الصوتي؟",
    answer:
      "التكلفة تختلف حسب التعقيد والمتطلبات. المطورون يحصلون على 600 ريال لكل مساعد، أما تكلفة العميل فتحدد حسب المشروع.",
  },
  {
    question: "هل يدعم المساعد الأصوات المختلفة؟",
    answer:
      "نعم، يمكن اختيار نوع الصوت (ذكر/أنثى) ونبرة الصوت حسب طبيعة العمل والجمهور المستهدف.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-500 flex justify-center items-center py-20">
        <div className="absolute inset-0 bg-pattern opacity-15"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-300/20 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <PlayCircle className="h-4 w-4" />
              كيف تعمل المنصة
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300">
              كيف يعمل المساعد الصوتي متعدد اللغات؟
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              تعرف على الخطوات البسيطة لإنشاء مساعدك الصوتي الذكي والبدء في خدمة
              عملائك بلغات متعددة
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.link/nyse0u"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-300 text-red-600 hover:bg-yellow-200 text-lg px-8 py-4 rounded-2xl">
                  ابدأ الآن مجاناً
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
      </section>

      {/* Main Steps Section */}
      <section className="bg-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              5 خطوات بسيطة لإنشاء مساعدك الصوتي
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              اتبع هذه الخطوات البسيطة وستحصل على مساعد صوتي احترافي في أقل من
              أسبوع
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {mainSteps.map((step, index) => (
              <div key={step.id} className="mb-12 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`${step.color} text-white p-4 rounded-2xl`}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            الخطوة {step.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="space-y-3">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="text-center">
                      <div
                        className={`${step.color} w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                      >
                        <span className="text-4xl font-bold">{step.id}</span>
                      </div>
                      {index < mainSteps.length - 1 && (
                        <ArrowDown className="h-8 w-8 text-red-400 mx-auto mt-8 animate-bounce" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              تفاصيل العملية
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              شرح مفصل لكل مرحلة من مراحل تطوير المساعد الصوتي
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedSteps.map((step, index) => (
              <div
                key={index}
                className="bg-red-50 rounded-2xl p-6 border border-red-100"
              >
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              لماذا تختار مساعدنا الصوتي؟
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              مميزات فريدة تجعل مساعدك الصوتي الخيار الأمثل لخدمة العملاء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول المساعدات الصوتية
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-red-50 rounded-2xl border border-red-100 group"
              >
                <summary className="p-6 cursor-pointer flex items-center justify-between hover:bg-red-100 rounded-2xl transition-colors">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    {faq.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-red-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
              جاهز لإنشاء مساعدك الصوتي؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              ابدأ الآن واحصل على مساعد صوتي متعدد اللغات يخدم عملائك على مدار
              الساعة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.link/nyse0u"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-300 text-red-600 hover:bg-yellow-200 text-lg px-8 py-4 rounded-2xl">
                  إنشاء مساعد صوتي الآن
                  <MessageCircle className="mr-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/categories">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4 rounded-2xl"
                >
                  استكشف الفئات
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

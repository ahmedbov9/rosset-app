"use client";

import { useState } from "react";
import { Languages, Settings, MessageCircle, Bot, X } from "lucide-react";
import { Button } from "./ui/button";

export default function MultilingualAssistantForm() {
  const [formData, setFormData] = useState({
    primaryLanguage: "العربية",
    supportedLanguages: "متعدد اللغات (العربية، الإنجليزية، الفرنسية)",
    welcomeMessage: "",
    responseInstructions: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
  };

  const handleCancel = () => {
    // Reset form or close modal
    setFormData({
      primaryLanguage: "العربية",
      supportedLanguages: "متعدد اللغات (العربية، الإنجليزية، الفرنسية)",
      welcomeMessage: "",
      responseInstructions: "",
    });
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-red-200 mt-5"
      dir="rtl"
    >
      {/* Header */}
      <div className="bg-red-50 px-8 py-6 border-b border-red-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-red-100 rounded-lg">
            <Languages className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            إعداد المساعد الصوتي متعدد اللغات
          </h2>
        </div>
        <p className="text-gray-600">
          قم بتخصيص مساعدك الصوتي وتحديد اللغات التي يدعمها باستخدام النموذج
          أدناه
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-red-100 rounded-lg">
            <Bot className="h-5 w-5 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            إنشاء مساعد صوتي جديد
          </h3>
        </div>

        <p className="text-gray-600 mb-8">
          أدخل المعلومات المطلوبة لتكوين مساعد صوتي متعدد اللغات
        </p>

        {/* Primary Language */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-900">
            اللغة الرئيسية
          </label>
          <select
            value={formData.primaryLanguage}
            onChange={(e) =>
              handleInputChange("primaryLanguage", e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
          >
            <option value="العربية">العربية</option>
            <option value="الإنجليزية">الإنجليزية</option>
            <option value="الفرنسية">الفرنسية</option>
            <option value="الإسبانية">الإسبانية</option>
          </select>
          <p className="text-sm text-gray-500">
            اللغة الرئيسية التي سيستخدمها المساعد الصوتي
          </p>
        </div>

        {/* Supported Languages */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-900">
            اللغات المدعومة
          </label>
          <select
            value={formData.supportedLanguages}
            onChange={(e) =>
              handleInputChange("supportedLanguages", e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
          >
            <option value="متعدد اللغات (العربية، الإنجليزية، الفرنسية)">
              متعدد اللغات (العربية، الإنجليزية، الفرنسية)
            </option>
            <option value="ثنائي اللغة (العربية، الإنجليزية)">
              ثنائي اللغة (العربية، الإنجليزية)
            </option>
            <option value="العربية فقط">العربية فقط</option>
            <option value="متعدد اللغات (العربية، الإنجليزية، الفرنسية، الإسبانية)">
              متعدد اللغات (العربية، الإنجليزية، الفرنسية، الإسبانية)
            </option>
          </select>
          <p className="text-sm text-gray-500">
            اللغات الإضافية التي سيدعمها المساعد الصوتي
          </p>
        </div>

        {/* Welcome Message */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-900">
            الرسالة الترحيبية
          </label>
          <textarea
            value={formData.welcomeMessage}
            onChange={(e) =>
              handleInputChange("welcomeMessage", e.target.value)
            }
            placeholder="مثال: مرحبًا بك في [اسم الشركة]، أنا المساعد الصوتي متعدد اللغات وسأساعدك اليوم. كيف يمكنني خدمتك؟"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
          />
          <p className="text-sm text-gray-500">
            هذه هي الرسالة التي سيستخدمها المساعد للترحيب بالمستخدمين بلغات
            متعددة
          </p>
        </div>

        {/* Response Instructions */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-900">
            تعليمات الاستجابة للمساعد
          </label>
          <textarea
            value={formData.responseInstructions}
            onChange={(e) =>
              handleInputChange("responseInstructions", e.target.value)
            }
            placeholder="أخبر المساعد بطريقة التعامل مع العملاء بلغات مختلفة وكيفية التبديل بين اللغات..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
          />
          <p className="text-sm text-gray-500">
            التعليمات التي تساعد المساعد على التفاعل باللغات المختلفة والإجابة
            بدقة على استفسارات العملاء
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start gap-4 pt-6">
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Settings className="h-5 w-5 ml-2" />
            إنشاء المساعد الصوتي
          </Button>
        </div>
      </form>
    </div>
  );
}

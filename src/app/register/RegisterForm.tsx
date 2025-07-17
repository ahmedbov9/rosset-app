"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <section className="bg-white rounded-3xl shadow-2xl border border-red-100 p-8 mb-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* username field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            اسم المستخدم
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200 text-lg"
              placeholder="أدخل اسم المستخدم"
            />
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>
        </div>
        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            البريد الإلكتروني
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200 text-lg"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            كلمة المرور
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200 text-lg"
              placeholder="أدخل كلمة المرور"
              required
            />
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors duration-200 p-1"
            >
              {showPassword ? (
                <EyeOff className="h-6 w-6" />
              ) : (
                <Eye className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* confirm password field */}

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            تأكيد كلمة المرور
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200 text-lg"
              placeholder="أدخل كلمة المرور مرة أخرى"
              required
            />
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors duration-200 p-1"
            >
              {showPassword ? (
                <EyeOff className="h-6 w-6" />
              ) : (
                <Eye className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              جاري التسجيل...
            </>
          ) : (
            <>
              انشاء حساب جديد
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-6 bg-white text-gray-500 font-medium">
              أو انشاء حساب جديد بـ
            </span>
          </div>
        </div>

        {/* Social Register */}
        <div className="space-y-4">
          <button
            type="button"
            className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-4 shadow-sm hover:shadow-md"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            انشاء حساب جديد باستخدام Google
          </button>

          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            انشاء حساب جديد باستخدام Facebook
          </button>
        </div>
      </form>
    </section>
  );
}

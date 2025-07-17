import { ArrowRight, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "انشاء حساب",
  description: "انشاء حساب جديد للوصول الى الخدمات",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6 shadow-lg">
              <User className="h-10 w-10 text-yellow-300" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              انشاء حساب جديد
            </h1>
            <p className="text-gray-600 text-lg">
              انشاء حساب جديد للوصول إلى الخدمات
            </p>
          </div>

          {/* Login Form Card */}
          <RegisterForm />
          {/* Register Link */}
          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <p className="text-gray-600 text-lg mb-3">لديك حساب بالفعل ؟</p>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200"
                >
                  تسجيل الدخول
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p className="leading-relaxed">
              بانشاء حساب جديد، أنت توافق على{" "}
              <Link
                href="/terms"
                className="text-red-600 hover:text-red-700 transition-colors font-semibold hover:underline"
              >
                شروط الخدمة
              </Link>{" "}
              و{" "}
              <Link
                href="/privacy"
                className="text-red-600 hover:text-red-700 transition-colors font-semibold hover:underline"
              >
                سياسة الخصوصية
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

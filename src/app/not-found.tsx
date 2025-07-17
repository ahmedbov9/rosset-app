"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-red-500 flex justify-center items-center min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-15"></div>

      {/* Content */}
      <div className="container relative py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-yellow-300 opacity-90 leading-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            عذراً، الصفحة غير موجودة
          </h2>

          {/* Description */}
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            يبدو أن الصفحة التي تبحث عنها قد تم حذفها أو نقلها أو أن الرابط غير
            صحيح. لا تقلق، يمكنك العودة إلى الصفحة الرئيسية أو البحث عن ما تريد.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button
                className="bg-yellow-300 text-red-600 hover:bg-yellow-200 text-lg px-8 py-6 rounded-2xl transition-colors min-w-[200px]"
                size="lg"
              >
                <Home className="ml-2 h-5 w-5" />
                العودة للرئيسية
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4 text-lg">أو يمكنك زيارة:</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/categories"
                className="text-yellow-300 hover:text-yellow-100 transition-colors text-lg underline decoration-transparent hover:decoration-current"
              >
                الفئات
              </Link>
              <Link
                href="/creators"
                className="text-yellow-300 hover:text-yellow-100 transition-colors text-lg underline decoration-transparent hover:decoration-current"
              >
                المطورون
              </Link>
              <Link
                href="/how-it-works"
                className="text-yellow-300 hover:text-yellow-100 transition-colors text-lg underline decoration-transparent hover:decoration-current"
              >
                كيف يعمل
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  );
}

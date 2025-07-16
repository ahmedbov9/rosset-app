"use client";

import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="w-full border-b border-border bg-red-600 backdrop-blur supports-[backdrop-filter]:bg-red-600/95 flex justify-center relative z-50">
        <div className="container flex h-16 items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-yellow-300 hover:text-yellow-100 transition-colors p-2"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 md:mr-0 mr-auto">
            <Link href="/" className="font-bold text-xl flex items-center">
              <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="mr-10 hidden md:flex gap-6 text-xl">
            <Link
              href="/categories"
              className="text-yellow-300 hover:text-yellow-100 transition-colors"
            >
              الفئات
            </Link>
            <Link
              href="/creators"
              className="text-yellow-300 hover:text-yellow-100 transition-colors"
            >
              المطورون
            </Link>
            <Link
              href="/how-it-works"
              className="text-yellow-300 hover:text-yellow-100 transition-colors"
            >
              كيف يعمل
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center mr-auto gap-4">
            <div className="relative md:w-64">
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="البحث..."
                className="w-full rounded-md border border-input bg-white pr-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-right"
              />
            </div>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-red-600"
              >
                تسجيل الدخول
              </Button>
            </Link>
            <a
              href="https://wa.link/nyse0u"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-yellow-300 text-red-600 hover:bg-yellow-200 px-5"
                size="sm"
              >
                التسجيل
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-red-600">
          <div className="flex items-center gap-2">
            <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
            <span className="font-bold text-lg text-yellow-300">القائمة</span>
          </div>
          <button
            onClick={closeSidebar}
            className="text-yellow-300 hover:text-yellow-100 transition-colors p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="البحث..."
              className="w-full rounded-lg border border-gray-300 bg-white pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-right"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="/categories"
            onClick={closeSidebar}
            className="flex items-center p-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-lg font-medium"
          >
            الفئات
          </Link>
          <Link
            href="/creators"
            onClick={closeSidebar}
            className="flex items-center p-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-lg font-medium"
          >
            المطورون
          </Link>
          <Link
            href="/how-it-works"
            onClick={closeSidebar}
            className="flex items-center p-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-lg font-medium"
          >
            كيف يعمل
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50 space-y-3">
          <Link href="/login" onClick={closeSidebar} className="block">
            <Button
              variant="outline"
              className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              تسجيل الدخول
            </Button>
          </Link>
          <a
            href="https://wa.link/nyse0u"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeSidebar}
            className="block"
          >
            <Button className="w-full bg-red-600 text-white hover:bg-red-700">
              التسجيل عبر واتساب
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

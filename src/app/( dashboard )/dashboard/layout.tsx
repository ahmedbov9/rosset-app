"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Headphones,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  User,
  MessageCircle,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

const sidebarItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "الرئيسية",
    href: "/dashboard",
    active: true,
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    label: "المساعدات الصوتية",
    href: "/dashboard/assistants",
    active: false,
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: "التحليلات",
    href: "/dashboard/analytics",
    active: false,
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "العملاء",
    href: "/dashboard/clients",
    active: false,
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    label: "المدفوعات",
    href: "/dashboard/payments",
    active: false,
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "الرسائل",
    href: "/dashboard/messages",
    active: false,
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "الإعدادات",
    href: "/dashboard/settings",
    active: false,
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    label: "المساعدة",
    href: "/dashboard/help",
    active: false,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Fixed Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl border-l border-gray-200 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold text-red-600">روزيت</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 mt-6 px-3 overflow-y-auto">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-red-50 text-red-700 border-l-4 border-red-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">أحمد محمد</p>
                <p className="text-xs text-gray-500">مطور مساعدات صوتية</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-gray-600 border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
            >
              <LogOut className="mr-2 h-4 w-4" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pr-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Search */}
              <div className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="البحث..."
                    className="w-64 pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Menu */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-red-600" />
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700">
                  أحمد محمد
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

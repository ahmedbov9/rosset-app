import {
  Headphones,
  Users,
  DollarSign,
  Plus,
  Eye,
  MessageCircle,
  Clock,
  Star,
  BarChart3,
  Activity,
  ArrowUp,
  ArrowDown,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const stats = [
  {
    title: "المساعدات الصوتية",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: <Headphones className="h-8 w-8 text-blue-600" />,
    bgColor: "bg-blue-50",
    description: "مساعد نشط هذا الشهر",
  },
  {
    title: "إجمالي الأرباح",
    value: "7,200 ر.س",
    change: "+1,800 ر.س",
    changeType: "increase",
    icon: <DollarSign className="h-8 w-8 text-green-600" />,
    bgColor: "bg-green-50",
    description: "الأرباح هذا الشهر",
  },
  {
    title: "العملاء النشطون",
    value: "248",
    change: "+12",
    changeType: "increase",
    icon: <Users className="h-8 w-8 text-purple-600" />,
    bgColor: "bg-purple-50",
    description: "عميل جديد هذا الأسبوع",
  },
  {
    title: "معدل الرضا",
    value: "4.8",
    change: "+0.2",
    changeType: "increase",
    icon: <Star className="h-8 w-8 text-yellow-600" />,
    bgColor: "bg-yellow-50",
    description: "من أصل 5 نجوم",
  },
];

const recentProjects = [
  {
    id: 1,
    name: "مساعد خدمة العملاء - متجر الإلكترونيات",
    client: "شركة التقنية المتقدمة",
    status: "مكتمل",
    statusColor: "bg-green-100 text-green-800",
    languages: ["العربية", "الإنجليزية"],
    earnings: "600 ر.س",
    date: "منذ يومين",
  },
  {
    id: 2,
    name: "مساعد الرعاية الصحية",
    client: "مستشفى الملك فيصل",
    status: "قيد التطوير",
    statusColor: "bg-blue-100 text-blue-800",
    languages: ["العربية", "الإنجليزية", "الفرنسية"],
    earnings: "800 ر.س",
    date: "منذ 3 أيام",
  },
  {
    id: 3,
    name: "مساعد التجارة الإلكترونية",
    client: "متاجر الأزياء الحديثة",
    status: "في المراجعة",
    statusColor: "bg-yellow-100 text-yellow-800",
    languages: ["العربية"],
    earnings: "500 ر.س",
    date: "منذ أسبوع",
  },
  {
    id: 4,
    name: "مساعد الضيافة والفنادق",
    client: "فندق الريتز كارلتون",
    status: "جديد",
    statusColor: "bg-gray-100 text-gray-800",
    languages: ["العربية", "الإنجليزية", "الإسبانية"],
    earnings: "900 ر.س",
    date: "منذ يوم",
  },
];

const quickActions = [
  {
    title: "إنشاء مساعد جديد",
    description: "ابدأ مشروع مساعد صوتي جديد",
    icon: <Plus className="h-6 w-6" />,
    color: "bg-red-600 hover:bg-red-700",
    href: "/dashboard/assistants/new",
  },
  {
    title: "عرض التحليلات",
    description: "تحليل أداء مساعداتك الصوتية",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "bg-blue-600 hover:bg-blue-700",
    href: "/dashboard/analytics",
  },
  {
    title: "إدارة العملاء",
    description: "تواصل مع عملائك",
    icon: <Users className="h-6 w-6" />,
    color: "bg-green-600 hover:bg-green-700",
    href: "/dashboard/clients",
  },
  {
    title: "الرسائل",
    description: "تحقق من رسائلك الجديدة",
    icon: <MessageCircle className="h-6 w-6" />,
    color: "bg-purple-600 hover:bg-purple-700",
    href: "/dashboard/messages",
  },
];

const recentActivities = [
  {
    action: "تم إكمال مساعد خدمة العملاء",
    client: "شركة التقنية المتقدمة",
    time: "منذ ساعتين",
    type: "success",
  },
  {
    action: "طلب تعديل على المساعد",
    client: "مستشفى الملك فيصل",
    time: "منذ 4 ساعات",
    type: "info",
  },
  {
    action: "دفعة جديدة مستلمة",
    client: "متاجر الأزياء الحديثة",
    time: "منذ 6 ساعات",
    type: "success",
  },
  {
    action: "رسالة جديدة من العميل",
    client: "فندق الريتز كارلتون",
    time: "منذ 8 ساعات",
    type: "info",
  },
];

export const metadata = {
  title: "لوحة التحكم - روزيت",
  description: "لوحة تحكم المطور",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">مرحباً، أحمد محمد!</h1>
            <p className="text-red-100 text-lg">
              إليك نظرة عامة على أداء مساعداتك الصوتية اليوم
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <Calendar className="h-12 w-12 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-xl`}>
                {stat.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.changeType === "increase" ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {stat.title}
            </p>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">إجراءات سريعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <div className="group hover:scale-105 transition-transform duration-200">
                <div
                  className={`${action.color} text-white p-4 rounded-xl shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {action.icon}
                    <h3 className="font-semibold">{action.title}</h3>
                  </div>
                  <p className="text-sm text-white/90">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              المشاريع الحديثة
            </h2>
            <Link href="/dashboard/assistants">
              <Button variant="outline" size="sm">
                عرض الكل
                <Eye className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <div className="text-left">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {project.languages.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {project.date}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-green-600">
                    {project.earnings}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            الأنشطة الحديثة
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "success" ? "bg-green-500" : "bg-blue-500"
                  }`}
                ></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-600">{activity.client}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link href="/dashboard/activities">
              <Button variant="outline" size="sm" className="w-full">
                عرض جميع الأنشطة
                <Activity className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          أداء المساعدات الصوتية
        </h2>
        <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">
              الرسم البياني لأداء المساعدات
            </p>
            <p className="text-sm text-gray-500">سيتم إضافة المخططات قريباً</p>
          </div>
        </div>
      </div>
    </div>
  );
}

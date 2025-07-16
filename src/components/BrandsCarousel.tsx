import React from "react";
import {
  Building,
  Store,
  Hotel,
  Utensils,
  Stethoscope,
  Briefcase,
  Car,
  Plane,
} from "lucide-react";

interface BrandType {
  id: number;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const brands: BrandType[] = [
  {
    id: 1,
    name: "المطاعم",
    icon: <Utensils className="h-10 w-10" />,
    color: "text-amber-700 bg-amber-100",
  },
  {
    id: 2,
    name: "الفنادق",
    icon: <Hotel className="h-10 w-10" />,
    color: "text-blue-700 bg-blue-100",
  },
  {
    id: 3,
    name: "العيادات",
    icon: <Stethoscope className="h-10 w-10" />,
    color: "text-green-700 bg-green-100",
  },
  {
    id: 4,
    name: "المتاجر",
    icon: <Store className="h-10 w-10" />,
    color: "text-purple-700 bg-purple-100",
  },
  {
    id: 5,
    name: "المكاتب",
    icon: <Briefcase className="h-10 w-10" />,
    color: "text-red-700 bg-red-100",
  },
  {
    id: 6,
    name: "العقارات",
    icon: <Building className="h-10 w-10" />,
    color: "text-indigo-700 bg-indigo-100",
  },
  {
    id: 7,
    name: "النقل",
    icon: <Car className="h-10 w-10" />,
    color: "text-yellow-700 bg-yellow-100",
  },
  {
    id: 8,
    name: "السياحة",
    icon: <Plane className="h-10 w-10" />,
    color: "text-teal-700 bg-teal-100",
  },
];

const BrandsCarousel = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
            الشركات المستفيدة
          </h2>
          <p className="text-gray-600/80 text-lg max-w-2xl mx-auto">
            يخدم مساعدنا الصوتي مختلف القطاعات التجارية
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`flex flex-col items-center justify-center p-6 rounded-xl ${brand.color} hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              {brand.icon}
              <span className="mt-3 font-medium text-center text-2xl">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;

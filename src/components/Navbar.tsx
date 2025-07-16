import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-red-600 backdrop-blur supports-[backdrop-filter]:bg-red-600/95 flex justify-center">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center">
            <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
          </Link>
        </div>

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

        <div className="flex items-center mr-auto gap-4">
          <div className="relative md:w-64 hidden md:block">
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
  );
}

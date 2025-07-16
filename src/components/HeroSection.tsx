const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-red-500 flex justify-center items-center min-h-screen">
      <div className="absolute inset-0 bg-pattern opacity-15"></div>
      <div className="container relative py-32 md:py-48">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300">
            صمم مساعدك الصوتي متعدد اللغات
          </h1>
          <p className="text-xl mb-8 text-white">
            تقدم منصتنا حلول ذكاء اصطناعي صوتي بمهارات لغوية متعددة لتلبية
            احتياجات عملائك العالميين
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.link/nyse0u"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-300 text-red-600 hover:bg-yellow-200 text-lg px-8 py-6 flex items-center gap-2 rounded-2xl transition-colors cursor-pointer">
                إنشاء مساعد صوتي متعدد اللغات
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  );
};

export default HeroSection;

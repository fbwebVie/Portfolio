export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          frontend developer · freelancer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Taisia Fedotova
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          Создаю быстрые и красивые сайты на Next.js и Tailwind CSS.
          Лендинги, визитки, корпоративные сайты — под ключ.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Смотреть работы
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-300 text-sm font-medium rounded-full hover:border-gray-900 transition-colors"
          >
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
}
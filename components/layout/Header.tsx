export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3"
        >
          <span className="h-9 w-1.5 rounded-full bg-red-600 transition-all duration-300 group-hover:h-11" />

          <span className="font-bebas text-[32px] tracking-[0.08em] text-white">
            FIXLOCAL
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#services"
            className="font-montserrat text-[16px] font-semibold text-white/90 transition duration-300 hover:text-red-500"
          >
            Услуги
          </a>

          <a
            href="#cases"
            className="font-montserrat text-[16px] font-semibold text-white/90 transition duration-300 hover:text-red-500"
          >
            Кейсы
          </a>

          <a
            href="#standards"
            className="font-montserrat text-[16px] font-semibold text-white/90 transition duration-300 hover:text-red-500"
          >
            Стандарты
          </a>

          <a
            href="#contacts"
            className="font-montserrat text-[16px] font-semibold text-white/90 transition duration-300 hover:text-red-500"
          >
            Контакты
          </a>
        </nav>

        {/* CTA */}
        <button className="font-montserrat rounded-xl bg-red-600 px-7 py-4 text-[15px] font-bold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:scale-105 hover:bg-red-500">
          Получить расчет
        </button>

      </div>
    </header>
  );
}
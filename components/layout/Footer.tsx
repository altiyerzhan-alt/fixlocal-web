export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">

          {/* Logo */}
          <div>
            <a
              href="#"
              className="group flex items-center gap-3"
            >
              <span className="h-9 w-1.5 bg-red-600 transition-all duration-300 group-hover:h-11" />

              <span className="text-[26px] font-black tracking-[0.16em]">
                FIXLOCAL
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">
              Локальный ремонт автомобилей.
              Быстро. Точно. Выгодно.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Навигация
            </p>

            <nav className="flex flex-col gap-3">
              <a
                href="#why-local"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                Почему локальный ремонт
              </a>

              <a
                href="#cases"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                Результаты работ
              </a>

              <a
                href="#process"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                Как проходит ремонт
              </a>

              <a
                href="#standards"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                Стандарты
              </a>

              <a
                href="#contacts"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Связаться
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                WhatsApp
              </a>

              <a
                href="tel:+77000000000"
                className="text-sm text-white/60 transition hover:text-red-500"
              >
                +7 700 000 00 00
              </a>

              <span className="text-sm text-white/35">
                Астана, Казахстан
              </span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} FIXLOCAL. Все права защищены.
          </p>

          <p className="text-xs uppercase tracking-[0.15em] text-white/20">
            Local Repair
          </p>

        </div>

      </div>
    </footer>
  );
}
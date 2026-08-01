export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="text-2xl font-bold tracking-[0.25em] text-white">
          FIXLOCAL
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          <a href="#" className="text-sm uppercase tracking-wider text-white/70 transition hover:text-red-500">
            Услуги
          </a>

          <a href="#" className="text-sm uppercase tracking-wider text-white/70 transition hover:text-red-500">
            Кейсы
          </a>

          <a href="#" className="text-sm uppercase tracking-wider text-white/70 transition hover:text-red-500">
            Стандарты
          </a>

          <a href="#" className="text-sm uppercase tracking-wider text-white/70 transition hover:text-red-500">
            Контакты
          </a>
        </nav>

        <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
          Получить расчет
        </button>

      </div>
    </header>
  );
}
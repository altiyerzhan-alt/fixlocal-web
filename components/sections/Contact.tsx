export default function Contact() {
  return (
    <section
      id="contacts"
      className="bg-black px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden border-t border-white/10 border-b border-white/10 py-14 sm:py-16 lg:py-20">

          {/* Красный акцент */}
          <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

          <div className="grid gap-12 pl-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pl-10">

            {/* Левая часть */}
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-red-600" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                  FIXLOCAL · LOCAL REPAIR
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                Есть
                <br />
                повреждение?
              </h2>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
                Отправьте фотографию автомобиля.
                Мы оценим повреждение и подскажем,
                подходит ли оно для локального ремонта.
              </p>
            </div>

            {/* Правая часть */}
            <div>
              <a
                href="https://wa.me/"
                className="group flex w-full items-center justify-between border border-red-600 bg-red-600 px-7 py-6 text-base font-bold text-white transition duration-300 hover:bg-red-500 sm:px-8 sm:py-7"
              >
                <span className="uppercase tracking-wide">
                  Отправить фото
                </span>

                <span className="text-2xl transition duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-red-600" />

                <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                  Предварительная оценка
                </span>
              </div>
            </div>

          </div>

          {/* Нижняя подпись */}
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pl-7 pt-6 lg:pl-10">
            <span className="text-xs uppercase tracking-[0.2em] text-white/20">
              Быстро · Точно · Выгодно
            </span>

            <span className="text-xs font-bold tracking-[0.2em] text-red-600">
              FL
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
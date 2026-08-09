import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(220,38,38,0.12),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-16 pt-32 sm:px-8 lg:px-10 lg:pt-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Левая часть */}
          <div className="max-w-3xl">

            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Astana · Local Repair
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.045em] sm:text-6xl lg:text-[86px]">
              Локальный
              <br />
              <span className="text-white/45">
                ремонт
              </span>
              <br />
              автомобиля
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Восстанавливаем повреждённые участки без лишнего ремонта
              всей детали. Точный подбор цвета, контроль качества
              и понятный срок выполнения.
            </p>

            {/* Преимущества */}
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-y border-white/10 py-5">

              <div>
                <div className="text-xl font-bold">
                  От нескольких часов
                </div>

                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/30">
                  срок ремонта
                </div>
              </div>

              <div>
                <div className="text-xl font-bold">
                  Точный подбор
                </div>

                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/30">
                  цвета
                </div>
              </div>

              <div>
                <div className="text-xl font-bold">
                  Гарантия
                </div>

                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/30">
                  на работу
                </div>
              </div>

            </div>

            {/* Кнопки */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Button>
                Получить расчет
              </Button>

              <a
                href="#cases"
                className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-sm font-semibold text-white/80 transition duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                Смотреть работы
              </a>

            </div>

          </div>

          {/* Правая часть */}
          <div className="relative">

            <div className="absolute -inset-8 bg-red-600/[0.06] blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-zinc-950">

              {/* Временная область под видео */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center border border-white/15">
                    <span className="ml-1 text-xl text-white/70">
                      ▶
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/30">
                    FIXLOCAL
                  </p>

                  <p className="mt-2 text-sm text-white/20">
                    Видео локального ремонта
                  </p>

                </div>

              </div>

              {/* Нижняя подпись */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-7 pb-7 pt-24">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                      Local Repair
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      Быстро. Точно. Выгодно.
                    </p>
                  </div>

                  <div className="text-3xl font-black text-red-600">
                    FL
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
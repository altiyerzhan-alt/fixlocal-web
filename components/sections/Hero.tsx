import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(220,38,38,0.16),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-32 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT */}
          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-red-600" />

              <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Astana · Auto Body Repair
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-montserrat text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-[88px]">
              Возвращаем
              <br />
              <span className="text-white/90">
                автомобилям
              </span>
              <br />
              <span className="text-white">
                заводской вид
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl font-montserrat text-base font-medium leading-7 text-white/60 sm:text-lg">
              Локальный и кузовной ремонт автомобилей с точным подбором цвета,
              контролем качества и гарантией на выполненные работы.
            </p>

            {/* Advantages */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3">

              <div className="border-l-2 border-red-600 pl-4">
                <div className="font-montserrat text-2xl font-bold">
                  1 день
                </div>

                <div className="mt-1 font-montserrat text-xs font-medium uppercase tracking-[0.12em] text-white/40">
                  локальный ремонт
                </div>
              </div>

              <div className="border-l border-white/20 pl-4">
                <div className="font-montserrat text-2xl font-bold">
                  1 год
                </div>

                <div className="mt-1 font-montserrat text-xs font-medium uppercase tracking-[0.12em] text-white/40">
                  гарантия
                </div>
              </div>

              <div className="border-l border-white/20 pl-4">
                <div className="font-montserrat text-2xl font-bold">
                  100%
                </div>

                <div className="mt-1 font-montserrat text-xs font-medium uppercase tracking-[0.12em] text-white/40">
                  подбор цвета
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Получить расчет
              </Button>

              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-montserrat text-sm font-bold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[2rem] bg-red-600/10 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">

              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-red-600">
                    <span className="ml-1 text-xl">
                      ▶
                    </span>
                  </div>

                  <p className="font-bebas text-2xl tracking-[0.12em] text-white/60">
                    FIXLOCAL
                  </p>

                  <p className="mt-1 font-montserrat text-sm text-white/30">
                    Видео мастерской
                  </p>

                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-7 pt-20">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="font-bebas text-2xl tracking-[0.12em] text-white/50">
                      LOCAL REPAIR
                    </p>

                    <p className="mt-1 font-montserrat text-lg font-semibold">
                      Сделано точно.
                    </p>
                  </div>

                  <div className="font-bebas text-5xl tracking-[0.05em] text-red-600">
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
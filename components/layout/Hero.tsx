export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-black text-white">

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30"></div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-8 pt-28 lg:grid-cols-2">

        <div>

          <p className="mb-5 uppercase tracking-[0.4em] text-red-500">
            FIXLOCAL
          </p>

          <h1 className="text-6xl font-black uppercase leading-none lg:text-8xl">
            Возвращаем
            <br />
            автомобилям
            <br />
            заводской вид
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Локальный и кузовной ремонт. Точный подбор цвета.
            Прозрачный процесс ремонта и гарантия на выполненные работы.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-500">
              Получить расчет
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 transition hover:border-red-500">
              Истории восстановления
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="flex h-[500px] w-full max-w-xl items-center justify-center rounded-3xl border border-white/10 bg-zinc-900 text-white/40">

            Здесь будет видео сервиса

          </div>

        </div>

      </div>

    </section>
  );
}
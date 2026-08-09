const standards = [
  {
    number: "01",
    title: "Точный подбор цвета",
    text: "Подбираем цвет с учетом оттенка и состояния покрытия автомобиля.",
  },
  {
    number: "02",
    title: "Контроль результата",
    text: "Проверяем качество ремонта перед выдачей автомобиля клиенту.",
  },
  {
    number: "03",
    title: "Профессиональная технология",
    text: "Используем технологию локального ремонта там, где она действительно подходит.",
  },
  {
    number: "04",
    title: "Гарантия",
    text: "Предоставляем гарантию на выполненные работы.",
  },
];

export default function Standards() {
  return (
    <section
      id="standards"
      className="bg-black px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Левая часть */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-red-600" />

              <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Стандарты FixLocal
              </span>
            </div>

            <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Результат,
              <br />
              <span className="text-white/40">
                за который отвечаем.
              </span>
            </h2>

            <p className="mt-8 max-w-xl font-montserrat text-base leading-7 text-white/55 sm:text-lg">
              Для нас локальный ремонт — это не просто быстро устранить
              повреждение. Важен результат, который соответствует
              стандартам качества FixLocal.
            </p>

            <div className="mt-10 border-l-2 border-red-600 pl-5">
              <p className="font-montserrat text-lg font-semibold">
                Гарантия на выполненные работы
              </p>

              <p className="mt-2 font-montserrat text-sm text-white/45">
                Условия гарантии согласовываются перед началом ремонта.
              </p>
            </div>
          </div>

          {/* Правая часть */}
          <div className="border-t border-white/10">
            {standards.map((standard) => (
              <div
                key={standard.number}
                className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
              >
                <div className="font-bebas text-5xl text-red-600 transition duration-300 group-hover:text-white">
                  {standard.number}
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-bold uppercase sm:text-2xl">
                    {standard.title}
                  </h3>

                  <p className="mt-3 max-w-xl font-montserrat text-sm leading-6 text-white/45 sm:text-base">
                    {standard.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
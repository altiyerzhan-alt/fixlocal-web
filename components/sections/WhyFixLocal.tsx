const advantages = [
  {
    number: "01",
    title: "Локальный ремонт",
    text: "Восстанавливаем повреждения без ненужной замены детали.",
  },
  {
    number: "02",
    title: "Точный подбор цвета",
    text: "Подбираем оттенок с учетом особенностей покрытия автомобиля.",
  },
  {
    number: "03",
    title: "Контроль качества",
    text: "Проверяем каждый этап ремонта перед выдачей автомобиля.",
  },
  {
    number: "04",
    title: "Гарантия",
    text: "Предоставляем гарантию на выполненные работы.",
  },
];

export default function WhyFixLocal() {
  return (
    <section
      id="standards"
      className="bg-black px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Заголовок */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-600" />

            <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Почему FixLocal
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Не просто ремонт.
            <br />
            <span className="text-white/50">
              Контроль результата.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl font-montserrat text-base leading-7 text-white/55 sm:text-lg">
            Работаем так, чтобы после ремонта автомобиль выглядел
            максимально близко к заводскому состоянию.
          </p>
        </div>

        {/* Преимущества */}
        <div className="border-t border-white/10">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="group grid border-b border-white/10 py-8 transition duration-300 hover:bg-white/[0.02] sm:grid-cols-[100px_1fr_1.2fr] sm:items-center sm:gap-8 lg:py-10"
            >
              {/* Номер */}
              <div className="font-bebas text-5xl tracking-wide text-red-600 transition duration-300 group-hover:text-white">
                {item.number}
              </div>

              {/* Заголовок */}
              <h3 className="mt-4 font-montserrat text-xl font-bold uppercase sm:mt-0 sm:text-2xl">
                {item.title}
              </h3>

              {/* Текст */}
              <p className="mt-3 max-w-xl font-montserrat text-sm leading-6 text-white/45 sm:mt-0 sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
const advantages = [
  {
    number: "01",
    title: "Быстрее",
    text: "Большинство локальных повреждений можно восстановить за несколько часов или в течение одного дня.",
  },
  {
    number: "02",
    title: "Выгоднее",
    text: "Не оплачиваете полный ремонт детали, когда повреждение можно устранить локально.",
  },
  {
    number: "03",
    title: "Точнее",
    text: "Восстанавливаем повреждённый участок с точным подбором цвета и контролем результата.",
  },
  {
    number: "04",
    title: "Без лишней замены",
    text: "Сохраняем оригинальную деталь автомобиля, если её техническое состояние позволяет выполнить локальный ремонт.",
  },
];

export default function WhyFixLocal() {
  return (
    <section
      id="why-local"
      className="bg-black px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Заголовок */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-600" />

            <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Почему локальный ремонт
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Не всегда нужен
            <br />
            <span className="text-white/45">
              полный ремонт детали.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl font-montserrat text-base leading-7 text-white/55 sm:text-lg">
            Если повреждение небольшое, локальный ремонт позволяет
            восстановить внешний вид автомобиля без лишних работ,
            затрат и потери времени.
          </p>
        </div>

        {/* Преимущества */}
        <div className="border-t border-white/10">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="group grid border-b border-white/10 py-9 transition duration-300 hover:bg-white/[0.02] sm:grid-cols-[100px_1fr_1.3fr] sm:items-center sm:gap-10 lg:py-11"
            >
              {/* Номер */}
              <div className="font-bebas text-5xl tracking-wide text-red-600 transition duration-300 group-hover:text-white">
                {item.number}
              </div>

              {/* Заголовок */}
              <h3 className="mt-4 font-montserrat text-2xl font-bold uppercase sm:mt-0 lg:text-3xl">
                {item.title}
              </h3>

              {/* Описание */}
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
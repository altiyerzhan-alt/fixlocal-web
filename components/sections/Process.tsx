const steps = [
  {
    number: "01",
    title: "Отправьте фото",
    text: "Покажите повреждение автомобиля в WhatsApp. Предварительно оценим возможность локального ремонта.",
  },
  {
    number: "02",
    title: "Получите расчет",
    text: "Определяем объём работ, срок и стоимость ремонта до начала работ.",
  },
  {
    number: "03",
    title: "Выполняем ремонт",
    text: "Подбираем цвет и восстанавливаем повреждённый участок по технологии локального ремонта.",
  },
  {
    number: "04",
    title: "Забираете автомобиль",
    text: "После проверки качества автомобиль готов к выдаче. Во многих случаях — в тот же день.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Заголовок */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-600" />

            <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Как это работает
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            От повреждения
            <br />
            <span className="text-white/40">
              до результата.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl font-montserrat text-base leading-7 text-white/55 sm:text-lg">
            Простая схема без лишних этапов. Отправляете фото —
            мы оцениваем повреждение и предлагаем оптимальный вариант ремонта.
          </p>
        </div>

        {/* Этапы */}
        <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group border-b border-white/10 p-7 transition duration-300 hover:bg-white/[0.025] md:border-r lg:min-h-[310px] lg:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-bebas text-5xl text-red-600 transition duration-300 group-hover:text-white">
                  {step.number}
                </span>

                <span className="text-2xl text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-red-600">
                  →
                </span>
              </div>

              <h3 className="mt-16 font-montserrat text-xl font-bold uppercase lg:text-2xl">
                {step.title}
              </h3>

              <p className="mt-4 font-montserrat text-sm leading-6 text-white/45">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col gap-7 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-montserrat text-xl font-semibold">
              Есть повреждение?
            </p>

            <p className="mt-2 font-montserrat text-sm text-white/45">
              Отправьте фото — оценим возможность локального ремонта.
            </p>
          </div>

          <a
            href="https://wa.me/"
            className="inline-flex w-fit rounded-xl bg-red-600 px-8 py-4 font-montserrat text-sm font-bold text-white transition duration-300 hover:scale-105 hover:bg-red-500"
          >
            Отправить фото
          </a>
        </div>

      </div>
    </section>
  );
}
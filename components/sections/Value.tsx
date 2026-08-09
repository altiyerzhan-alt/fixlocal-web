const benefits = [
  {
    number: "01",
    title: "Меньше работ",
    text: "Восстанавливаем только повреждённый участок, когда технология позволяет выполнить локальный ремонт.",
  },
  {
    number: "02",
    title: "Меньше времени",
    text: "Небольшие повреждения можно устранить значительно быстрее полноценного кузовного ремонта.",
  },
  {
    number: "03",
    title: "Меньше затрат",
    text: "Вы не оплачиваете полный ремонт детали, если в нём нет необходимости.",
  },
  {
    number: "04",
    title: "Оригинальная деталь",
    text: "Сохраняем установленную на автомобиле деталь, если её состояние позволяет выполнить ремонт.",
  },
];

export default function Value() {
  return (
    <section
      id="value"
      className="bg-zinc-950 px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Заголовок */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-red-600" />

              <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Выгода локального ремонта
              </span>
            </div>

            <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Не платите
              <br />
              <span className="text-white/40">
                за лишнюю работу.
              </span>
            </h2>
          </div>

          <p className="max-w-xl font-montserrat text-base leading-7 text-white/55 sm:text-lg">
            Если повреждение позволяет выполнить локальный ремонт,
            нет необходимости делать полный ремонт всей детали.
            Мы выбираем оптимальный способ восстановления.
          </p>

        </div>

        {/* Преимущества */}
        <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group border-b border-white/10 p-7 transition duration-300 hover:bg-white/[0.025] md:border-r lg:min-h-[300px] lg:p-8"
            >

              <div className="font-bebas text-5xl text-red-600 transition duration-300 group-hover:text-white">
                {benefit.number}
              </div>

              <h3 className="mt-16 font-montserrat text-xl font-bold uppercase lg:text-2xl">
                {benefit.title}
              </h3>

              <p className="mt-4 font-montserrat text-sm leading-6 text-white/45">
                {benefit.text}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col gap-7 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-montserrat text-xl font-semibold">
              Не уверены, подходит ли повреждение?
            </p>

            <p className="mt-2 font-montserrat text-sm text-white/45">
              Отправьте фотографию — предварительно оценим возможность
              локального ремонта.
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
const services = [
  {
    number: "01",
    title: "Локальный ремонт",
    text: "Восстановление небольших повреждений без лишней замены детали.",
    time: "ОТ 4 ЧАСОВ",
  },
  {
    number: "02",
    title: "Кузовной ремонт",
    text: "Рихтовка, восстановление геометрии и ремонт кузовных элементов.",
    time: "ПОД КЛЮЧ",
  },
  {
    number: "03",
    title: "Покраска",
    text: "Точный подбор цвета и качественная покраска элементов автомобиля.",
    time: "ТОЧНЫЙ ЦВЕТ",
  },
  {
    number: "04",
    title: "Антихром",
    text: "Изменение внешнего вида автомобиля и профессиональная обработка элементов.",
    time: "RESTYLING",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-950 px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-600" />

            <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Наши услуги
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Ремонтируем.
            <br />
            <span className="text-white/40">
              Восстанавливаем.
            </span>
          </h2>
        </div>

        <div className="border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid border-b border-white/10 py-9 transition duration-300 hover:bg-white/[0.025] sm:grid-cols-[90px_1.2fr_1fr_120px] sm:items-center sm:gap-8 lg:py-12"
            >

              <div className="font-bebas text-5xl text-red-600 transition duration-300 group-hover:text-white">
                {service.number}
              </div>

              <h3 className="mt-4 font-montserrat text-2xl font-bold uppercase sm:mt-0 lg:text-3xl">
                {service.title}
              </h3>

              <p className="mt-3 max-w-lg font-montserrat text-sm leading-6 text-white/45 sm:mt-0 sm:text-base">
                {service.text}
              </p>

              <div className="mt-5 flex items-center justify-between sm:mt-0 sm:justify-end sm:gap-6">
                <span className="font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                  {service.time}
                </span>

                <span className="text-2xl text-white/30 transition duration-300 group-hover:translate-x-2 group-hover:text-red-600">
                  →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
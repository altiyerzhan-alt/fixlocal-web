const cases = [
  {
    number: "01",
    title: "Восстановление кузова",
    description: "Восстановление поврежденного элемента и подготовка поверхности.",
    image: "/cases/case-01.jpeg",
  },
  {
    number: "02",
    title: "Локальная покраска",
    description: "Подготовка, подбор цвета и восстановление покрытия.",
    image: "/cases/case-02.jpeg",
  },
  {
    number: "03",
    title: "Ремонт бампера",
    description: "Восстановление элемента с последующим окрашиванием.",
    image: "/cases/case-03.jpeg",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="bg-zinc-950 px-6 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-600" />

            <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Результаты работ
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Реальные работы.
            <br />
            <span className="text-white/40">
              Реальный результат.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl font-montserrat text-base leading-7 text-white/55 sm:text-lg">
            Показываем реальные автомобили и выполненные работы.
            В дальнейшем каждый кейс будет дополнен фотографиями
            до, процесса и результата.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.number}
              className="group overflow-hidden border border-white/10 bg-black"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute left-5 top-5 font-bebas text-4xl text-red-600">
                  {item.number}
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-montserrat text-xl font-bold uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 font-montserrat text-sm leading-6 text-white/45">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-montserrat text-xl font-semibold">
              Есть повреждение?
            </p>

            <p className="mt-2 font-montserrat text-sm text-white/45">
              Отправьте фото — оценим возможность локального ремонта.
            </p>
          </div>

          <a
            href="#contacts"
            className="inline-flex w-fit rounded-xl bg-red-600 px-7 py-4 font-montserrat text-sm font-bold text-white transition hover:bg-red-500"
          >
            Отправить фото
          </a>
        </div>

      </div>
    </section>
  );
}
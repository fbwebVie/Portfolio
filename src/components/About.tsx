export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Обо мне</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Привет! Меня зовут{" "}
          <span className="font-semibold text-black">Таисия</span>.
          Я frontend-разработчик, создаю современные сайты для бизнеса
          и частных клиентов.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Специализируюсь на лендингах, сайтах-визитках и
          корпоративных сайтах. Использую{" "}
          <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">React</span> и{" "}
          <span className="font-medium">Tailwind CSS</span> — это
          значит быстрая загрузка, адаптивность под все устройства
          и чистый код.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          Для меня важно не просто сделать «красиво», а создать
          сайт, который решает задачи клиента — привлекает
          клиентов, вызывает доверие и удобен в использовании.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100">
          <div>
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm text-gray-400 mt-1">проектов</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2+</p>
            <p className="text-sm text-gray-400 mt-1">год опыта</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-gray-400 mt-1">адаптивность</p>
          </div>
        </div>
      </div>
    </section>
  );
}
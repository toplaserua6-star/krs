'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Megaphone, Code, TrendingUp, Briefcase, BookOpen, Rocket } from 'lucide-react'

const categories = [
  {
    title: 'Лайфхаки для жизни и продуктивности',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
    items: [
      'Как превратить многочасовые лекции и видео в краткие конспекты за секунды с помощью ChatGPT',
      'Составьте идеальное меню на неделю с ChatGPT',
      'Личный куратор для вашего саморазвития: ChatGPT подберёт книги, фильмы и курсы',
      'Напишите поздравление, которое тронет до слёз',
      'Учите иностранный язык в увлекательной форме',
      'Как подобрать подарок, который поразит даже тех, у кого уже есть всё',
    ],
  },
  {
    title: 'Соцсети и контент на автопилоте',
    icon: Users,
    color: 'from-blue-500 to-purple-500',
    items: [
      'Прогревы, которые превращают читателей в клиентов',
      '30 минут — и у вас контент-план на целый месяц!',
      'Создание онлайн-курсов за считаные часы, а не недели!',
      'Сторис, которые не пролистывают!',
      'Как превратить хаос голосовых заметок в безупречные продающие посты?',
      '"Вечнозелёный" контент, который продаёт годами!',
    ],
  },
  {
    title: 'Маркетинг и продажи на стероидах',
    icon: Megaphone,
    color: 'from-pink-500 to-red-500',
    items: [
      'Как создать бота, который думает, как ваш клиент',
      'Аналитика на грани магии: заставьте ChatGPT предсказывать поведение твоей ЦА',
      'Реклама, которую невозможно игнорировать!',
      'Как настроить ChatGPT, чтобы он писал для вас статьи, которые пробиваются в ТОП Google',
      'Невидимая помощь для вебинаров',
      'Ленивая методика: как заставить ChatGPT писать скрипты холодных звонков',
      'Лайфхаки для маркетологов',
      'Маркетинговая стратегия за один клик',
    ],
  },
  {
    title: 'Секреты работы с ChatGPT, которые знают только профи',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    items: [
      'Почему 90% людей используют ChatGPT неправильно',
      'Что на самом деле происходит в "голове" ChatGPT',
      '100 идей, где можно использовать ChatGPT каждый день',
      'Формула "идеального промпта"',
      '"Роль клиента": как заставить ChatGPT думать как твой идеальный покупатель',
      'Алгоритм улучшения, который заставляет ChatGPT анализировать свои же ответы',
      'Секрет "ИИ-профессионализма"',
      'Как сделать ChatGPT своим помощником',
    ],
  },
]

export function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Что внутри <span className="gradient-text">мастер-класса?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Практические кейсы и фишки для всех сфер жизни и бизнеса
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-black mb-4">
            И это только часть того, что вы получите!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Более 100+ практических кейсов и промптов для работы с ChatGPT
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Получить полный доступ →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

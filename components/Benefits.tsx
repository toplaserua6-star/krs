'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Пошаговые инструкции по работе с ChatGPT и другими ИИ-инструментами',
  'Готовые шаблоны промптов для различных задач',
  'Доступ к закрытому сообществу практиков ИИ',
  'Еженедельные обновления с новыми кейсами',
  'Сертификат о прохождении курса',
  'Пожизненный доступ ко всем материалам',
  'Персональная поддержка в чате',
  'Бонусные материалы и чек-листы',
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Почему выбирают <span className="gradient-text">наш курс</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы создали самую практичную программу обучения работе с ИИ на русском языке
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                ⭐ Топ выбор 2024
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-4xl">🎓</div>
                  <div>
                    <div className="font-bold text-gray-900">5000+ учеников</div>
                    <div className="text-sm text-gray-600">Уже прошли обучение</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <div className="font-bold text-gray-900">10x продуктивность</div>
                    <div className="text-sm text-gray-600">Средний результат студентов</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-4xl">💼</div>
                  <div>
                    <div className="font-bold text-gray-900">50+ кейсов</div>
                    <div className="text-sm text-gray-600">Практических примеров</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <div className="font-bold text-gray-900">4.9/5 рейтинг</div>
                    <div className="text-sm text-gray-600">По отзывам студентов</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Нужны ли мне технические знания для прохождения курса?',
    answer: 'Нет, курс разработан для людей с любым уровнем подготовки. Мы начинаем с основ и постепенно переходим к более сложным темам.',
  },
  {
    question: 'Сколько времени займет обучение?',
    answer: 'Вы можете пройти курс в своем темпе. В среднем студенты завершают программу за 2-4 недели, уделяя обучению 1-2 часа в день.',
  },
  {
    question: 'Будет ли доступ к материалам после окончания курса?',
    answer: 'Да, при покупке тарифа "Профессиональный" или "VIP" вы получаете пожизненный доступ ко всем материалам и обновлениям.',
  },
  {
    question: 'Можно ли вернуть деньги, если курс не подойдет?',
    answer: 'Да, мы предоставляем гарантию возврата денег в течение 14 дней без объяснения причин.',
  },
  {
    question: 'Какие ИИ-инструменты рассматриваются в курсе?',
    answer: 'Основной фокус на ChatGPT, но также рассматриваем Midjourney, Claude, Bard и другие популярные ИИ-инструменты.',
  },
  {
    question: 'Выдается ли сертификат после прохождения?',
    answer: 'Да, после успешного завершения курса вы получите именной сертификат, который можно добавить в портфолио или LinkedIn.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на самые популярные вопросы о курсе
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { BookOpen, Video, Users, Award } from 'lucide-react'

const steps = [
  {
    icon: BookOpen,
    title: 'Изучайте материалы',
    description: 'Получите доступ к структурированным урокам и практическим заданиям',
    step: '01',
  },
  {
    icon: Video,
    title: 'Смотрите видео-уроки',
    description: 'Подробные видео с разбором реальных кейсов и примеров использования',
    step: '02',
  },
  {
    icon: Users,
    title: 'Практикуйтесь',
    description: 'Применяйте знания в деле с помощью готовых шаблонов и заданий',
    step: '03',
  },
  {
    icon: Award,
    title: 'Получите сертификат',
    description: 'Подтвердите свои навыки официальным сертификатом о прохождении',
    step: '04',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Как это <span className="gradient-text">работает</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и понятный процесс обучения, который приведет вас к результату
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 -z-10"></div>
              )}
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://t.me/tribute/app?startapp=pm9H"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Получить Мощные Промпты
          </a>
        </motion.div>
      </div>
    </section>
  )
}

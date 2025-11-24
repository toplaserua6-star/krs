'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Infinity, Video, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Infinity,
    title: 'Вечный доступ к закрытому каналу',
    description: 'с возобновляемыми материалами по работе с ИИ',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Video,
    title: 'Запись мастер-класса "ChatGPT на практике 4.0"',
    description: '+ все обновления и дополнительные материалы',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Библиотека 45+ авторских промптов',
    description: 'и AI-агентов для ChatGPT уровня PRO (для привлечения клиентов, создания контента, маркетинга, бизнеса и т.д.)',
    color: 'from-orange-500 to-red-500',
  },
]

export function WhatYouGet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Что именно <span className="gradient-text">ты получаешь?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный пакет материалов для профессиональной работы с ИИ
          </p>
        </motion.div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed ml-9">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#order-form"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Получить доступ сейчас →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

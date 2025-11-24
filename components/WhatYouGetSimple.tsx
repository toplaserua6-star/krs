'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function WhatYouGetSimple() {
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

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200"
          >
            <CheckCircle2 className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🔴 Запись мастер-класса "ChatGPT в Деле 5.0"
              </h3>
              <p className="text-lg text-gray-700">
                + обновления и все дополнительные материалы
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200"
          >
            <CheckCircle2 className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🔴 Библиотека из 45+ мощнейших промптов и ИИ-агентов
              </h3>
              <p className="text-lg text-gray-700">
                для маркетинга, продаж, аналитики и создания убойного контента в соцсетях
              </p>
            </div>
          </motion.div>
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

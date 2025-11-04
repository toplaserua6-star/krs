'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const examples = [
  {
    title: 'Эмоциональный пост для Instagram',
    prompt: 'Напиши эмоциональный пост для Instagram-страницы бренда. Стиль — вдохновляющий, с призывом к действию.',
    category: 'Контент',
  },
  {
    title: 'Рекламные заголовки для Facebook',
    prompt: 'Создай 5 коротких рекламных заголовков для кампании в Facebook. Тон — энергичный, современный, без клише.',
    category: 'Реклама',
  },
  {
    title: 'Контент-план на 14 дней',
    prompt: 'Составь контент-план для SMM на 14 дней: формат, тема, CTA.',
    category: 'Планирование',
  },
]

export function PromptExamples() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">Примеры промтов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Вот что вы получите в пакете Super Prompts for Marketers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                    {example.category}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {example.title}
                  </h3>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{example.prompt}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


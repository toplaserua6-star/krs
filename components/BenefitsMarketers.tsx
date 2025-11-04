'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Target, TrendingUp, Lightbulb } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Генерировать контент-планы за 5 минут',
    description: 'Больше не нужно часами думать над идеями. Промты помогут создать структурированный план за минуты.',
  },
  {
    icon: Target,
    title: 'Писать продающие тексты без "белого листа"',
    description: 'Готовые шаблоны для любых форматов: посты, сторис, рекламные тексты, email-рассылки.',
  },
  {
    icon: TrendingUp,
    title: 'Делать креативы и заголовки для рекламы',
    description: 'Эффективные промты для создания заголовков и креативов, которые конвертируют.',
  },
  {
    icon: Lightbulb,
    title: 'Анализировать аудиторию и конкурентов',
    description: 'Промты для глубокого анализа целевой аудитории и конкурентной среды.',
  },
]

export function BenefitsMarketers() {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">Эти промты созданы</span>
            <br />
            <span className="text-white">специально для маркетологов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SMM-специалистов и таргетологов, которые хотят работать эффективнее
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


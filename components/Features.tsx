'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target, Rocket, Code, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Умные промпты',
    description: 'Научитесь создавать эффективные запросы для получения точных результатов от ChatGPT',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Автоматизация задач',
    description: 'Автоматизируйте рутинные процессы и экономьте до 80% времени на повседневных задачах',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Практические кейсы',
    description: 'Более 50 реальных примеров применения ИИ в бизнесе, маркетинге и разработке',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Rocket,
    title: 'Продуктивность x10',
    description: 'Увеличьте свою эффективность в 10 раз с помощью правильного использования ИИ',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Программирование',
    description: 'Используйте ChatGPT для написания, отладки и оптимизации кода на любом языке',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Рост навыков',
    description: 'Постоянное обновление материалов и доступ к новым возможностям ИИ',
    color: 'from-pink-500 to-rose-500',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Что вы <span className="gradient-text">освоите</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная программа обучения, которая превратит вас в эксперта по работе с ИИ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

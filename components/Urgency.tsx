'use client'

import { motion } from 'framer-motion'
import { Clock, Zap, TrendingUp } from 'lucide-react'

export function Urgency() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Почему нужно занимать место <span className="gradient-text">прямо сейчас?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ограниченное количество мест
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Количество мест по этому тарифу ограничено. <span className="font-bold text-orange-600">{'Их всего 100.'}</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              После - я повышу стоимость, потому что это объективно стоит дороже.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Уникальные фишки и промпты
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Фишки и промпты, которые я даю - <span className="font-bold text-purple-600">уникальны.</span> Их нельзя найти в свободном доступе.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Это результат <span className="font-bold">сотен часов</span> тестирования и практики!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Результат уже сегодня
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ты начнёшь <span className="font-bold text-green-600">экономить время и деньги уже сегодня.</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              После этого мастер-класса ты <span className="font-bold">СРАЗУ</span> автоматизируешь задачи, которые отнимали часы.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

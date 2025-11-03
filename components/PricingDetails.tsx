'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingDown } from 'lucide-react'

export function PricingDetails() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Окей, <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">сколько стоит?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-8"
        >
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-xl">
              Я обещал своим любимым подписчикам тариф <span className="font-bold text-yellow-400">"свободная цена"</span>
            </p>
            <p className="text-gray-300">
              Если ты его не застал - в следующий раз будь быстрее 😉
            </p>
            <p>
              Я оцениваю материалы канала "ChatGPT в Деле 5.0" минимум в{' '}
              <span className="font-bold text-2xl text-yellow-400">$1000</span>
            </p>
            <p className="text-gray-300">
              Знаю, что многие эксперты по нейросетям продают такое гораздо дороже.
            </p>
            <p className="text-xl font-bold">
              Прямо скажем <span className="text-red-400">В ДЕСЯТКИ РАЗ</span> дороже.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-1"
        >
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h3 className="text-3xl font-black text-center">АКЦИЯ -50%</h3>
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl text-gray-400 line-through">{'$66'}</span>
                <TrendingDown className="w-8 h-8 text-red-400" />
                <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {'$33'}
                </span>
              </div>
              <p className="text-red-400 font-bold text-xl animate-pulse">
                {'(не проеби 🔥)'}
              </p>
            </div>

            <p className="text-center text-xl text-gray-300">
              За материалы, которые помогают зарабатывать{' '}
              <span className="font-bold text-green-400 text-2xl">ТЫСЯЧИ</span> долларов
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

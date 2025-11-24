'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { OrderForm } from './OrderForm'

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Специальное предложение</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Готовы освоить ChatGPT<br />и увеличить продуктивность?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
            Присоединяйтесь к 5000+ студентам, которые уже трансформировали<br className="hidden md:block" />
            свою работу с помощью искусственного интеллекта
          </p>

          <div className="flex flex-col items-center mb-8 w-full">
            <OrderForm source="cta" className="w-full" />
            <a
              href="#how-it-works"
              className="group relative mt-6 inline-flex items-center gap-2 text-white px-10 py-4 rounded-full text-lg font-bold overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/80 transition-all" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-60 group-hover:opacity-90 blur-2xl transition-opacity" />
              <span className="relative flex items-center gap-2">
                Узнать подробнее
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Гарантия возврата 14 дней</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Мгновенный доступ</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

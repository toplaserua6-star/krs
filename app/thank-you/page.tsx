'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { LAVA_PRODUCT_URL } from '@/config/lava'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_35px_120px_rgba(15,23,42,0.5)] backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm uppercase tracking-widest text-white/70">
              <Sparkles className="w-4 h-4" />
              <span>Заявка отправлена</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">Спасибо! Мы получили вашу заявку</h1>
            <p className="text-lg text-white/80">
              Ссылка на оплату была открыта в новой вкладке. Письмо с подтверждением также придёт на вашу почту.
              Если вкладка не открылась, воспользуйтесь кнопкой ниже.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LAVA_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-blue-400/50 transition"
            >
              💳 Перейти к оплате
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition"
            >
              <ArrowRight className="w-5 h-5" /> На главную
            </Link>
          </div>

          <p className="text-sm text-white/60">
            Нужна помощь? Напишите на <a href="mailto:superpromtskurs@gmail.com" className="underline">superpromtskurs@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}

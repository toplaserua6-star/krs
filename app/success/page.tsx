'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">
                Оплата успешно обработана
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="gradient-text">Спасибо за оплату!</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              Ваш доступ к курсу <span className="font-bold text-white">«ChatGPT в Деле 5.0»</span> активирован.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Мы отправили вам письмо с инструкциями по доступу к материалам курса.
              <br />
              Проверьте почту (включая папку «Спам»).
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Перейти к курсу
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/for-marketers"
              className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-bold hover:border-purple-500 hover:text-white transform hover:scale-105 transition-all"
            >
              Для маркетологов
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <p className="text-sm text-gray-500">
              Если у вас возникли вопросы, напишите нам в поддержку
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}


'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">
                Новая версия 5.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="gradient-text">ChatGPT</span>
              <br />
              в Деле
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed"
            >
              <span className="font-bold text-gray-900">ОБНОВЛЯЕМЫЙ мастер-класс</span> для предпринимателей, маркетологов и экспертов
              <br />
              <span className="font-bold text-blue-600">ДЛЯ ТОГО, чтобы ИСПОЛЬЗОВАТЬ CHATGPT НА УРОВНЕ PRO</span>
              <br />
              для анализа ЦА, создания контента, воронок, маркетинга и продаж
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-4 mb-8"
            >
              <p className="text-sm md:text-base text-gray-700 text-center lg:text-left">
                <span className="font-semibold text-purple-700">✨ Подходит для Claude, DeepSeek, Grok 3</span> и других текстовых нейросетей
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://t.me/tribute/app?startapp=pm9H"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Получить Мощные Промпты
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Учеников</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Рейтинг</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Практик</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-2xl p-4">
                      <p className="text-sm text-gray-700">
                        Как ChatGPT может помочь в работе?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                      Вы
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4">
                      <p className="text-sm text-white">
                        Автоматизация задач, генерация контента, анализ данных, программирование и многое другое!
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-center pt-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { LavaPaymentWidget } from './LavaPaymentWidget'

const plans = [
  {
    name: 'ChatGPT 5.0',
    price: '33',
    oldPrice: '66',
    period: 'разовый платеж в долларах',
    description: '🔥 АКЦИЯ -50%',
    features: [
      'Запись мастер-класса + обновления',
      'Библиотека 45+ авторских промптов',
      'AI-агенты уровня PRO',
      '100+ практических кейсов',
      'Материалы по маркетингу и продажам',
      'Лайфхаки для продуктивности',
      'Секреты работы с ChatGPT',
    ],
    popular: true,
    badge: 'Осталось 100 мест',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Выберите свой <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">тариф</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Инвестиция в знания, которая окупится уже в первый месяц
          </p>
        </motion.div>

        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative max-w-lg w-full"
            >
              {plan.badge && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-black text-base shadow-2xl animate-pulse border-2 border-white">
                  ⏰ {plan.badge}
                </div>
              )}

              <div className="h-full bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-2 border-orange-400 shadow-2xl shadow-orange-500/20 hover:border-yellow-400 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-yellow-400 text-lg mb-6 font-bold">{plan.description}</p>
                  <div className="mb-4">
                    {plan.oldPrice && (
                      <div className="text-2xl text-gray-400 line-through mb-2">${plan.oldPrice}</div>
                    )}
                    <div>
                      <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">${plan.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col items-center">
                  <LavaPaymentWidget width={300} height={100} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-2">
            💳 Принимаем все виды оплаты • 🔒 Безопасная оплата • 💯 Гарантия возврата 14 дней
          </p>
          <p className="text-gray-500 text-sm">
            После оплаты вы получите письмо с доступом к курсу
          </p>
        </motion.div>
      </div>
    </section>
  )
}

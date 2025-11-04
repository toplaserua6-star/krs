'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CreditCard, ArrowRight } from 'lucide-react'
import { LAVA_WIDGET_ID, LAVA_WIDGET_URL } from '@/config/lava'

interface LavaPaymentWidgetProps {
  widgetId?: string
  width?: number
  height?: number
  className?: string
  fallbackButton?: boolean
}

/**
 * Виджет оплаты Lava.top
 * 
 * ВАЖНО: Замените LAVA_WIDGET_ID в config/lava.ts на ваш реальный ID виджета
 * 
 * Настройка в Lava.top:
 * 1. Перейдите в настройки продукта
 * 2. Укажите Redirect URL: https://your-domain.vercel.app/success
 * 3. Скопируйте ID виджета из iframe кода
 * 
 * Если виджет не загружается, будет показана альтернативная кнопка оплаты
 */
export function LavaPaymentWidget({
  widgetId = LAVA_WIDGET_ID,
  width = 250,
  height = 80,
  className = '',
  fallbackButton = true,
}: LavaPaymentWidgetProps) {
  const [widgetError, setWidgetError] = useState(false)
  const widgetUrl = `https://widget.lava.top/${widgetId}`

  useEffect(() => {
    // Проверяем, загрузился ли iframe
    const timer = setTimeout(() => {
      const iframe = document.querySelector('.lava-widget-iframe') as HTMLIFrameElement
      if (iframe && !iframe.contentWindow) {
        setWidgetError(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleIframeError = () => {
    setWidgetError(true)
  }

  // Если виджет не загрузился, показываем альтернативную кнопку
  if (widgetError && fallbackButton) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`flex flex-col items-center ${className}`}
      >
        <a
          href={LAVA_WIDGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <CreditCard className="w-5 h-5" />
          💳 Оплатить курс $33
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-gray-400 mt-4 max-w-md text-center"
        >
          Оплата защищена сервисом Lava.top. После покупки вы получите письмо с доступом к курсу.
        </motion.p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`flex flex-col items-center ${className}`}
    >
      <iframe
        title="lava.top"
        src={widgetUrl}
        width={width}
        height={height}
        style={{
          border: 'none',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0, 255, 200, 0.2)',
        }}
        className="lava-widget-iframe"
        allow="payment"
        onError={handleIframeError}
        onLoad={(e) => {
          // Проверяем, что iframe действительно загрузился
          const iframe = e.target as HTMLIFrameElement
          try {
            // Если можем получить доступ к contentWindow, значит загрузился
            if (!iframe.contentWindow) {
              setWidgetError(true)
            }
          } catch (err) {
            // CORS ошибка - это нормально, но виджет может работать
            console.log('Lava widget loaded (CORS check expected)')
          }
        }}
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-sm text-gray-400 mt-4 max-w-md text-center"
      >
        Оплата защищена сервисом Lava.top. После покупки вы получите письмо с доступом к курсу.
      </motion.p>
    </motion.div>
  )
}


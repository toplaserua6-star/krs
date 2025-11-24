'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Loader2, MessageCircle, Send } from 'lucide-react'
import { LAVA_PRODUCT_URL } from '@/config/lava'
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '@/config/forms'

interface OrderFormProps {
  source?: string
  className?: string
  defaultOpen?: boolean
  formId?: string
}

export function OrderForm({
  source = 'main',
  className = '',
  defaultOpen = false,
  formId,
}: OrderFormProps) {
  const router = useRouter()
  const [isFormOpen, setIsFormOpen] = useState(defaultOpen)
  const [name, setName] = useState('')
  const [contacts, setContacts] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !contacts.trim()) {
      setError('Заполните имя и контакты, чтобы мы могли связаться')
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          contact: contacts,
          message: `Источник: ${source}`,
          subject: 'Новая заявка — ChatGPT в Деле 5.0',
        }),
      })

      const data = await response.json()

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || 'Не удалось отправить заявку. Попробуйте ещё раз.')
      }

      setName('')
      setContacts('')

      if (typeof window !== 'undefined') {
        window.open(LAVA_PRODUCT_URL, '_blank', 'noopener,noreferrer')
      }

      router.push('/thank-you')
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Неизвестная ошибка')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id={formId}
      className={`w-full max-w-md rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-[0_25px_80px_rgba(6,13,31,0.45)] p-8 text-white relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" aria-hidden="true"></div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 relative z-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Быстрый заказ</p>
          <h3 className="text-2xl font-black text-white">Получите доступ за 2 минуты</h3>
          <p className="text-sm text-white/80 mt-2">
            После отправки формы мы направим вас на страницу оплаты Lava и продублируем заявку на почту.
          </p>
        </div>

        {!isFormOpen && (
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            💳 Купить за $11
          </button>
        )}

        {isFormOpen && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm font-semibold text-white">Имя*</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Например, Анна"
                className="mt-2 w-full rounded-2xl bg-white/95 text-slate-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 border border-white/70"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-white">
                Контакт для связи (Telegram, WhatsApp, Viber)*
              </span>
              <div className="mt-2 relative">
                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={contacts}
                  onChange={(event) => setContacts(event.target.value)}
                  placeholder="@username или номер +7999..."
                  className="pl-12 w-full rounded-2xl bg-white/95 text-slate-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 border border-white/70"
                  required
                />
              </div>
              <p className="text-xs text-white/70 mt-2">
                Введите любой удобный способ связи: ссылку на мессенджер, номер телефона или e-mail.
              </p>
            </label>

            {error && <p className="text-sm text-rose-200">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-slate-900 font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-pink-500/40 transition-all disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Отправляем заявку...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Отправить и перейти к оплате
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}

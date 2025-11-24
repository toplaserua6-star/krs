/**
 * Конфигурация оплаты через Tribute
 * 
 * ВАЖНО: Замените PAYMENT_LINK_ID на реальный ID вашего продукта в Tribute
 * 
 * Как получить ссылку:
 * 1. Создайте продукт в Tribute
 * 2. Скопируйте ссылку вида: https://web.tribute.tg/p/abc123
 * 3. Замените 'abc123' в PAYMENT_LINK_ID ниже
 */

// TODO: Замените 'pm9H' на реальный ID продукта из Tribute (если отличается)
// Текущая ссылка: https://web.tribute.tg/p/pm9H
export const PAYMENT_LINK_ID = 'pm9H'

// Базовая ссылка на оплату Tribute
export const TRIBUTE_PAYMENT_URL = `https://web.tribute.tg/p/${PAYMENT_LINK_ID}`

// URL для webhook (будет автоматически определен при деплое)
export const getWebhookUrl = () => {
  // В production используйте переменную окружения или автоматически определите домен
  if (process.env.NEXT_PUBLIC_WEBHOOK_URL) {
    return `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/api/tribute-webhook`
  }
  // В development можно использовать localhost (для тестирования с ngrok)
  return process.env.NODE_ENV === 'production'
    ? 'https://your-domain.vercel.app/api/tribute-webhook'
    : 'http://localhost:3000/api/tribute-webhook'
}

// URL для редиректа после успешной оплаты
export const getSuccessUrl = () => {
  if (process.env.NEXT_PUBLIC_SUCCESS_URL) {
    return process.env.NEXT_PUBLIC_SUCCESS_URL
  }
  return process.env.NODE_ENV === 'production'
    ? 'https://your-domain.vercel.app/success'
    : 'http://localhost:3000/success'
}


/**
 * Конфигурация оплаты через Lava.top
 * 
 * ВАЖНО: Замените LAVA_WIDGET_ID на реальный ID вашего виджета
 * 
 * Как получить ID виджета:
 * 1. Создайте продукт в Lava.top
 * 2. Скопируйте код iframe вида: https://widget.lava.top/ac7bb94f-665f-4001-bce6-df8894bb4129
 * 3. ID виджета - это часть после последнего слеша (ac7bb94f-665f-4001-bce6-df8894bb4129)
 * 4. Замените LAVA_WIDGET_ID ниже
 */

// TODO: Замените на ваш реальный ID виджета из Lava.top
export const LAVA_WIDGET_ID = 'ac7bb94f-665f-4001-bce6-df8894bb4129'

// URL виджета Lava.top
export const LAVA_WIDGET_URL = `https://widget.lava.top/${LAVA_WIDGET_ID}`

// URL для редиректа после успешной оплаты
export const getSuccessUrl = () => {
  if (process.env.NEXT_PUBLIC_SUCCESS_URL) {
    return process.env.NEXT_PUBLIC_SUCCESS_URL
  }
  return process.env.NODE_ENV === 'production'
    ? 'https://your-domain.vercel.app/success'
    : 'http://localhost:3000/success'
}

/**
 * Настройка в Lava.top:
 * 1. Перейдите в настройки продукта
 * 2. В разделе "Redirect URL" укажите: https://your-domain.vercel.app/success
 * 3. Сохраните настройки
 */


import { NextRequest, NextResponse } from 'next/server'

/**
 * Webhook для обработки уведомлений от Tribute о платежах
 * 
 * Настройка в Tribute:
 * 1. Перейдите в настройки продукта в Tribute
 * 2. Укажите Webhook URL: https://your-domain.vercel.app/api/tribute-webhook
 * 3. Укажите Redirect URL: https://your-domain.vercel.app/success
 * 
 * Формат данных от Tribute:
 * {
 *   "product_id": "string",
 *   "user_id": "string",
 *   "amount": 33,
 *   "currency": "USD",
 *   "status": "paid"
 * }
 */

interface TributeWebhookPayload {
  product_id: string
  user_id: string
  amount: number
  currency: string
  status: string
  // Дополнительные поля, которые могут прийти от Tribute
  transaction_id?: string
  email?: string
  timestamp?: string
}

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из тела запроса
    const body: TributeWebhookPayload = await request.json()

    // Логируем полученные данные для отладки
    console.log('📥 Tribute Webhook received:', JSON.stringify(body, null, 2))

    // Проверяем, что статус платежа - "paid"
    if (body.status === 'paid') {
      console.log('✅ Payment confirmed:', {
        product_id: body.product_id,
        user_id: body.user_id,
        amount: body.amount,
        currency: body.currency,
        transaction_id: body.transaction_id,
        email: body.email,
      })

      // Здесь можно добавить:
      // 1. Запись в базу данных (например, MongoDB, PostgreSQL)
      // 2. Отправку email с доступом к курсу
      // 3. Создание аккаунта пользователя
      // 4. Отправку уведомления в Telegram/Slack

      // Пример отправки email (заглушка):
      // await sendEmail({
      //   to: body.email,
      //   subject: 'Доступ к курсу ChatGPT в Деле 5.0',
      //   template: 'course-access',
      //   data: { userId: body.user_id }
      // })

      // Пример записи в базу данных (заглушка):
      // await db.purchases.create({
      //   product_id: body.product_id,
      //   user_id: body.user_id,
      //   amount: body.amount,
      //   currency: body.currency,
      //   status: 'paid',
      //   transaction_id: body.transaction_id,
      //   email: body.email,
      //   created_at: new Date()
      // })

      // Возвращаем успешный ответ
      return NextResponse.json(
        { 
          ok: true, 
          message: 'Payment processed successfully',
          transaction_id: body.transaction_id || body.product_id
        },
        { status: 200 }
      )
    } else {
      // Если статус не "paid", логируем для анализа
      console.log('⚠️ Payment status is not "paid":', body.status)
      
      return NextResponse.json(
        { 
          ok: false, 
          message: `Payment status is ${body.status}, expected "paid"` 
        },
        { status: 200 } // Возвращаем 200, чтобы Tribute не повторял запрос
      )
    }
  } catch (error) {
    // Обработка ошибок
    console.error('❌ Webhook error:', error)
    
    return NextResponse.json(
      { 
        ok: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}

// Обработка GET запросов (для проверки работоспособности)
export async function GET() {
  return NextResponse.json(
    { 
      ok: true, 
      message: 'Tribute webhook endpoint is active',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}


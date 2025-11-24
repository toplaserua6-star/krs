import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChatGPT в Деле 5.0 | Мастер-класс по ИИ',
  description: 'Освойте ChatGPT и другие ИИ-инструменты в деле. Научитесь использовать искусственный интеллект для решения реальных задач.',
  keywords: 'ChatGPT, ИИ, искусственный интеллект, мастер-класс, обучение, практика',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

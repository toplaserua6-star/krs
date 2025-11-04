'use client'

import { Mail, MessageCircle, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">ChatGPT 5.0</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Практический курс по освоению ChatGPT и других ИИ-инструментов для увеличения продуктивности.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="/for-marketers" className="hover:text-white transition-colors">Для маркетологов</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Возврат средств</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Связаться с нами</h4>
            <div className="space-y-3">
              <a href="mailto:info@chatgpt-course.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@chatgpt-course.ru
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 ChatGPT в Деле 5.0. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

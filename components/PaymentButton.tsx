'use client'

import { CreditCard, ArrowRight } from 'lucide-react'
import { TRIBUTE_PAYMENT_URL } from '@/config/payment'

interface PaymentButtonProps {
  text?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  className?: string
}

export function PaymentButton({
  text = '💳 Оплатить курс $33',
  variant = 'primary',
  size = 'lg',
  showIcon = true,
  className = '',
}: PaymentButtonProps) {
  const baseStyles = 'group font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2'
  
  const sizeStyles = {
    sm: 'px-6 py-3 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-lg',
  }
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/50',
    secondary: 'bg-white text-blue-600 hover:shadow-2xl border-2 border-gray-200',
  }

  return (
    <a
      href={TRIBUTE_PAYMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {showIcon && <CreditCard className="w-5 h-5" />}
      {text}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  )
}


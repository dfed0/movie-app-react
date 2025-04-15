'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// Создаём сам контекст
const LanguageContext = createContext<any>(undefined)

// Провайдер
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<any>('en-US')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Хук для удобства
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

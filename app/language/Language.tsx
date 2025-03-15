import { useRef, useState } from 'react'

export default function Language({ language, setLanguage }: any) {
  const selectRef = useRef<HTMLSelectElement>(null)
  function handleSelectChange(event: any) {
    console.log(event.target.value)
    setLanguage(event.target.value)
  }
  function chooseLanguage() {
    if (language === 'en-US') {
      return 'Choose language'
    }
    if (language === 'es-ES') {
      return 'Elige el idioma'
    }
    if (language === 'fr-FR') {
      return 'Choisissez la langue'
    }
    if (language === 'de-DE') {
      return 'Wählen Sie die Sprache'
    }
    if (language === 'ru-RU') {
      return 'Выберите язык'
    }
    if (language === 'it-IT') {
      return 'Scegli la lingua'
    }
    if (language === 'pt-BR') {
      return 'Escolha o idioma'
    }
    if (language === 'zh-CN') {
      return '选择语言'
    }
    if (language === 'ja-JA') {
      return '言語を選択してください'
    }
    if (language === 'ar-SA') {
      return 'اختر اللغة'
    }
    // if (selectRef.current) {
    //   setLanguage(selectRef.current.value)
    // }
  }
  return (
    <>
      {/* <select ref={selectRef}> */}
      <div id="language-div">
        <strong>{chooseLanguage()}</strong>
        <select onChange={handleSelectChange} id="language-select">
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
          <option value="fr-FR">Français</option>
          <option value="de-DE">Deutsch</option>
          <option value="ru-RU">Русский</option>
          <option value="it-IT">Italiano</option>
          <option value="pt-BR">Português</option>
          <option value="zh-CN">中文 (Zhōngwén)</option>
          <option value="ja-JA">日本語 (Nihongo)</option>
          <option value="ar-SA">العربية (Al-‘Arabīyah)</option>
        </select>
      </div>
    </>
  )
}

'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Language from './language/Language'
import Sort from './sort/Sort'
import Image from 'next/image'

type Props = {
  language: string
  setLanguage: (lang: string) => void
}

export default function Header({
  language,
  totalPages,
  formId,
  sort,
  genre,
}: any) {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [menuActive, setMenuActive] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const searchTerm = inputRef.current?.value.trim()
    if (searchTerm) {
      router.push(
        `/search?query=${encodeURIComponent(
          searchTerm
        )}&language=${language}&page=1&total_pages=${totalPages}`
      )
    }
  }

  return (
    <header>
      <button
        className="logo-button"
        onClick={() => router.replace('/home?language=en-US&page=1')}
      >
        <Image
          src="/logo.png"
          alt="Logo Image"
          width={150}
          height={150}
          priority={true}
        />
      </button>
      <button
        className="menu-header"
        onClick={() => {
          setMenuActive((prevValue) => !prevValue)
        }}
      >
        <svg
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      {/* form display logic  */}
      {menuActive && <div></div>}
      <form id={formId} className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search"
          ref={inputRef}
        />

        {sort && <Sort />}

        {/* ПЕРЕДЕЛАТЬ КЛАСС ФОРМЫ */}
        <Language language={language} />
      </form>
    </header>
  )
}

'use client'

// import { useState } from 'react'
import Header from '../header/Header'

// type Props = {
//   children: React.ReactNode
// }

export default function HeaderWrapper({
  language,
  totalPages,
  formId,
  sort,
  genre,
  children,
}: any) {
  return (
    <>
      <Header
        formId={formId}
        sort={sort}
        language={language}
        totalPages={totalPages}
        genre={genre}
      />
      {children}
    </>
  )
}

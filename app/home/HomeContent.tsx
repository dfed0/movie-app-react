'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import HeaderWrapper from '../wrappers/HeaderWrapper'
import MoviesByPopularity from '../movies/popular/MoviesByPopularity'
import MoviesByGenre from '../movies/genre/MoviesByGenre'

export default function HomeContent() {
  const searchParams = useSearchParams()
  const language = searchParams.get('language')
  const genre = searchParams.get('genre')

  return (
    <HeaderWrapper
      language={language}
      formId={'home'}
      sort={true}
      genre={genre}
    >
      {genre === 'none' || !genre ? <MoviesByPopularity /> : <MoviesByGenre />}
    </HeaderWrapper>
  )
}

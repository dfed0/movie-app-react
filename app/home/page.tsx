'use client'
import { useEffect, useRef, useState } from 'react'
import Pagination from '../pagination/Pagination'
// import { getMovies, getPopularMovies } from '../utils/api'
import { getMovies, getMoviesByGenre, getPopularMovies } from '../utils/api'
import { useRouter, useSearchParams } from 'next/navigation'
import HeaderWrapper from '../wrappers/HeaderWrapper'
import MoviesByGenre from '../movies/genre/MoviesByGenre'
import MoviesByPopularity from '../movies/popular/MoviesByPopularity'
import Head from 'next/head'
// NEED TO FIX BACK ARROW
export default function Home() {
  const [movies, setMovies] = useState<any[]>([])
  // const { language, setLanguage } = useLanguage()
  const searchParams = useSearchParams()
  const language = searchParams.get('language')
  const genre = searchParams.get('genre')

  // const [page, setPage] = useState(1)
  // const totalPages = searchParams.get('total_pages')
  const [totalPages, setTotalPages] = useState()
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // useEffect(() => {
  //   getPopularMovies(page, language).then((data) => {
  //     const sorted = data.results.sort(
  //       (a: any, b: any) => b.popularity - a.popularity
  //     )
  //     const totalPagesNumber = data['total_pages']
  //     setTotalPages(totalPagesNumber)
  //     console.log(data)
  //     setMovies(sorted)
  //   })
  // }, [page, language, genre])

  // useEffect(() => {
  // }, [genre])

  return (
    <>
      <HeaderWrapper
        language={language}
        formId={'home'}
        sort={true}
        genre={genre}
      >
        {/* <div className="main-page">
          <main id="main">
          </main>
        </div> */}
        {genre === 'none' || !genre ? (
          <MoviesByPopularity />
        ) : (
          <MoviesByGenre />
        )}
        {/* <Pagination totalPages={totalPages} setPage={setPage} /> */}
      </HeaderWrapper>
    </>
  )
}

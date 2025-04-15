'use client'
import { useEffect, useRef, useState } from 'react'
// import MoviesResults from '../movies/MoviesResults'
// import Language from '../header/language/Language'
// import Pagination from '../pagination/Pagination'
// import { getMovies, getPopularMovies } from '../utils/api'
import MoviesResults from '../MoviesResults'
import { getMovies, getMoviesByGenre, getPopularMovies } from '@/app/utils/api'
import { useRouter, useSearchParams } from 'next/navigation'
import PageWrapper from '@/app/wrappers/PageWrapper'
// import HeaderWrapper from '../header/HeaderWrapper'
// import { useLanguage } from '../context/language-context'

export default function MoviesByGenre() {
  const [movies, setMovies] = useState<any[]>([])
  // const { language, setLanguage } = useLanguage()
  const searchParams = useSearchParams()
  const language = searchParams.get('language')
  const genre = searchParams.get('genre')
  const page = searchParams.get('page')

  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const totalPages = searchParams.get('total_pages')

  // const [page, setPage] = useState(1)

  // const [totalPages, setTotalPages] = useState()
  // const inputRef = useRef<HTMLInputElement>(null)
  // const router = useRouter()

  // const mainRef = useRef<HTMLInputElement>(null)

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
  // }, [page, language])
  useEffect(() => {
    if (genre)
      getMoviesByGenre(genre, page, language).then((movies) => {
        console.log(movies)
        const results = movies.results
        const totalPagesNumber = movies['total_pages']
        params.set('total_pages', totalPagesNumber)
        router.push(`?${params.toString()}`)
        // setTotalPages(totalPagesNumber)
        console.log('GENRE', results)
        setMovies(results)
      })
  }, [page, language, genre])

  return (
    <>
      {/* <div className="main-page">
        <main id="main">
        </main>
      </div> */}
      <PageWrapper totalPages={totalPages}>
        {movies.length > 0 && <MoviesResults movies={movies} />}
      </PageWrapper>
    </>
  )
}

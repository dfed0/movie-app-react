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

export default function MoviesByPopularity() {
  const [movies, setMovies] = useState<any[]>([])
  // const { language, setLanguage } = useLanguage()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const language = searchParams.get('language')
  // const genre = searchParams.get('genre')
  const page = searchParams.get('page')
  // const [page, setPage] = useState(1)
  const totalPages = searchParams.get('total_pages')
  // const [totalPages, setTotalPages] = useState()
  const inputRef = useRef<HTMLInputElement>(null)
  // const mainRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    getPopularMovies(page, language).then((data) => {
      const sorted = data.results.sort(
        (a: any, b: any) => b.popularity - a.popularity
      )
      const totalPagesNumber = data['total_pages']
      // setTotalPages(totalPagesNumber)
      params.set('total_pages', totalPagesNumber)
      router.push(`?${params.toString()}`)
      console.log(data)
      setMovies(sorted)
    })
  }, [page, language])
  
  return (
    <>
      {/* <PageWrapper totalPages={totalPages} setPage={setPage}> */}
      <PageWrapper totalPages={totalPages}>
        {movies.length > 0 && <MoviesResults movies={movies} />}
      </PageWrapper>

      {/* <div className="main-page">
        <main id="main">
        </main>
      </div> */}
    </>
  )
}

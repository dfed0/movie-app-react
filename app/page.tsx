// import Image from 'next/image'
'use client'
import { useEffect, useRef, useState } from 'react'
import MoviesResults from './movies/MoviesResults'
import Language from './language/Language'
import Pagination from './pagination/Pagination'

// const API_MOVIES: any = []

// const API =
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWEwMDgzYTA1MWJlYjFlZDkyZjlhNTkwM2IyZGJkNSIsIm5iZiI6MTc0NDQ1MzI3My4yMjg5OTk5LCJzdWIiOiI2N2ZhM2U5OWVhODBkODUxNzU5OWYxMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kYdiKg80UYfT6OPhCg_0CNv27tM1Ey3rwICp7ypWSfg',
  },
}

export default function Home() {
  const [movies, setMovies] = useState<any[]>([])
  const [language, setLanguage] = useState('en-US')
  const [page, setPage] = useState(1)
  const inputRef = useRef<HTMLInputElement>(null)
  const mainRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: any) {
    e.preventDefault()
    // console.log(e)
    if (inputRef.current) {
      const searchTerm = inputRef.current.value // Получаем значение из инпута
      if (searchTerm && searchTerm !== '') {
        getMovies(searchTerm)
      }
    }
  }
  function showMovies(movies: any) {
    console.log(movies)
    setMovies(movies.results)
    // const { title, poster_path, vote_average, overview } = movie
    // console.log(title, poster_path, vote_average, overview, movie)
  }
  function getMovies(url: any) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?language=${language}&query="${url}"`,
      options
    )
      .then((res) => res.json())
      .then((data) => showMovies(data))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page.toString()}`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.results.sort(
          (a: any, b: any) => b.popularity - a.popularity
        )
        console.log(sorted)
        setMovies(sorted)
      })
      .catch((err) => console.error(err))
  }, [language, page])
  useEffect(() => {
    console.log('OK', movies)
  }, [movies])

  return (
    <>
      <header>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            ref={inputRef}
          />
          <Language language={language} setLanguage={setLanguage} />
        </form>
      </header>
      <div className="main-page">
        <main id="main" ref={mainRef}>
          {movies.length > 0 && (
            <MoviesResults movies={movies} options={options} />
          )}
        </main>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  )
}

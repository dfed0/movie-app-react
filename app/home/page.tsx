import { Suspense, useEffect, useRef, useState } from 'react'
import Pagination from '../pagination/Pagination'
// import { getMovies, getPopularMovies } from '../utils/api'
import { getMovies, getMoviesByGenre, getPopularMovies } from '../utils/api'
import { useRouter, useSearchParams } from 'next/navigation'
import HeaderWrapper from '../wrappers/HeaderWrapper'
import MoviesByGenre from '../movies/genre/MoviesByGenre'
import MoviesByPopularity from '../movies/popular/MoviesByPopularity'
import Head from 'next/head'
import HomeContent from './HomeContent'
// NEED TO FIX BACK ARROW
export default function Home() {
  return (
    <Suspense>
      <HomeContent></HomeContent>
      {/* <HeaderWrapper
        language={language}
        formId={'home'}
        sort={true}
        genre={genre}
      >
        {genre === 'none' || !genre ? (
          <MoviesByPopularity />
        ) : (
          <MoviesByGenre />
        )}
      </HeaderWrapper> */}
    </Suspense>
  )
}

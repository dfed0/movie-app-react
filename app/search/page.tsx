import MoviesResults from '../movies/MoviesResults'
import Language from '../header/language/Language'
import Pagination from '../pagination/Pagination'
import { getPopularMovies, searchMovies } from '../utils/api'
import HeaderWrapper from '../wrappers/HeaderWrapper'

export default async function SearchPage({ searchParams }: any) {
  const query = (await searchParams).query || ''
  const language = (await searchParams).language || 'en-US'
  const page = parseInt((await searchParams).page || '1', 10)

  const moviesData = query
    ? await searchMovies(query, language, page)
    : await getPopularMovies(page, language)

  const movies = moviesData.results.sort(
    (a: any, b: any) => b.popularity - a.popularity
  )
  const totalPages = moviesData['total_pages']

  return (
    <>
      <HeaderWrapper language={language} formId={'search'}>
        <div className="main-page">
          <main id="main">
            {movies.length > 0 && <MoviesResults movies={movies} />}
          </main>
          <Pagination totalPages={totalPages} />
        </div>
      </HeaderWrapper>
    </>
  )
}

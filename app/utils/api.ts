const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWEwMDgzYTA1MWJlYjFlZDkyZjlhNTkwM2IyZGJkNSIsIm5iZiI6MTc0NDQ1MzI3My4yMjg5OTk5LCJzdWIiOiI2N2ZhM2U5OWVhODBkODUxNzU5OWYxMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kYdiKg80UYfT6OPhCg_0CNv27tM1Ey3rwICp7ypWSfg',
  },
}

export async function getMovies(query: any, language: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&language=${language}`,
    options
  )

  if (!res.ok) {
    console.error(`Error: ${res.status} - ${res.statusText}`)
    return null
  }
  const data = await res.json()
  console.log(data)

  return data
}
export async function getPopularMovies(page: any, language: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page.toString()}`,
    options
  )

  if (!res.ok) {
    console.error(`Error: ${res.status} - ${res.statusText}`)
    return null
  }
  const data = await res.json()
  console.log(data)
  return data
}

export async function searchMovies(
  query: string,
  language = 'en-US',
  page = 1
) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&language=${language}&page=${page}`,
    options
  )
  if (!response.ok) throw new Error('Failed to fetch movies')
  const data = await response.json()
  console.log(data)
  return data
  // return response.json()
}

export async function getMoviesGenre() {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    options
  )
  if (!response.ok) throw new Error('Failed to fetch movies')
  const data = await response.json()
  console.log(data)
  return data
}
export async function getMoviesByGenre(genre: any, page: any, language: any) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${page}&language=${language}`,
    options
  )
  if (!response.ok) throw new Error('Failed to fetch movies')
  const data = await response.json()
  console.log(data)
  return data
}

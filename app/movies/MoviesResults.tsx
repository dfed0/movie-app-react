'use client'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

export default function MoviesResults({ movies }: any) {
  function getClassByRating(vote: any) {
    if (vote >= 7) {
      return 'green'
    } else if (vote >= 4) {
      return 'orange'
    } else {
      return 'red'
    }
  }
  return (
    <>
      {movies.map((movie: any) => {
        const { id, title, poster_path, vote_average, overview } = movie
        return (
          <div className="movie" key={id}>
            <img src={IMG_PATH + poster_path} alt={title} />
            <div className="movie-info">
              <h3>{title}</h3>
              <span className={getClassByRating(vote_average)}>
                {vote_average.toFixed(1)}
              </span>
            </div>
            <div className="overview">
              <h1 id="overview-header">Overview</h1>
              <p>{overview}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

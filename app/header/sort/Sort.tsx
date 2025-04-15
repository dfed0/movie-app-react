'use client'
import { getMoviesByGenre, getMoviesGenre } from '@/app/utils/api'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Sort() {
  // const selectRef = useRef<HTMLSelectElement>(null)
  const [genres, setGenres] = useState([{ id: 1, name: 'action' }])
  const searchParams = useSearchParams()
  const router = useRouter()
  function handleSelectChange(event: any) {
    // setLanguage(event.target.value)
    const params = new URLSearchParams(searchParams.toString())
    params.set('genre', event.target.value)
    router.push(`?${params.toString()}`)
  }
  useEffect(() => {
    getMoviesGenre().then((data) => {
      console.log(data)
      return setGenres(data.genres)
    })
  }, [])
  // based on language realise choose text
  return (
    <>
      <div id="params-div">
        <strong>Genre</strong>
        <select onChange={handleSelectChange} id="language-select">
          <option value={'none'}>--none--</option>
          <optgroup label="genres">
            {genres.map((genre) => {
              return (
                <option value={genre.id} key={genre.id}>
                  {genre.name}
                </option>
              )
            })}
          </optgroup>
          {/* <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="ja-JA">日本語 (Nihongo)</option>
          <option value="ar-SA">العربية (Al-‘Arabīyah)</option> */}
        </select>
      </div>
    </>
  )
}

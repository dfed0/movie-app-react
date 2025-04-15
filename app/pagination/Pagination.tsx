'use client'

import { error } from 'console'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useState } from 'react'
import { getMoviesGenre } from '../utils/api'
// TOTAL PAGES!!!!
export default function Pagination({ totalPages, setPage }: any) {
  // { page, setPage, totalPages }: any
  // const [page, setPage] = useState(1)
  const [openFindForm, setOpenFindForm] = useState(false)
  const searchParams = useSearchParams()
  const page: any = Number(searchParams.get('page'))
  // const totalPages: any = Number(searchParams.get('total_pages'))

  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const pages = []
  const formInputRef = useRef<HTMLInputElement>(null)
  const startPage = Math.floor((page - 1) / 5) * 5 + 1
  for (let i = startPage; i < startPage + 5; i++) {
    if (i <= totalPages) pages.push(i)
    console.log(pages)
    console.log(page, totalPages, startPage, i)
  }
  function handlePage(pageParam: any) {
    try {
      if (pageParam.value <= 0 || pageParam > totalPages)
        console.error('Invalid page number: out of range')

      // if (setPage) setPage(pageParam)
      params.set('page', pageParam)
      params.set('total_pages', totalPages)
      router.push(`?${params.toString()}`)
    } catch (error) {
      console.error(error)
    }
  }
  function handleSubmit(e: any) {
    e.preventDefault()
    const input: any = Number(formInputRef.current?.value)
    try {
      if (isNaN(input) || input <= 0 || input > totalPages)
        console.error('Invalid page number: out of range or not a number')

      // if (setPage) {
      //   setPage(input)
      // }
      params.set('page', input)
      router.push(`?${params.toString()}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div id="pagination">
        <div
          className="page-div highlighted-page"
          key={Math.max(Math.floor((page - 1) / 5) * 5 - 4, 1)}
        >
          <button
            className="button-div"
            onClick={() =>
              handlePage(Math.max(Math.floor((page - 1) / 5) * 5 - 4, 1))
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
          </button>
        </div>
        {pages.map((pageNumber: any) => {
          return (
            <div
              key={pageNumber}
              className={
                pageNumber === page ? 'page-div highlighted-page' : 'page-div'
              }
            >
              <button
                className="button-div"
                onClick={() => handlePage(pageNumber)}
              >
                {pageNumber}
              </button>
            </div>
          )
        })}
        <div
          className="page-div highlighted-page"
          key={Math.floor((page + 5 - 1) / 5) * 5 + 1}
        >
          <button
            className="button-div"
            onClick={() => handlePage(Math.floor((page + 5 - 1) / 5) * 5 + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
          </button>
        </div>
        <div className="page-div highlighted-page" key={'lastOrFirst'}>
          <button
            className="button-div"
            onClick={() => setOpenFindForm((prevValue) => !prevValue)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </div>
      {openFindForm && (
        <div className="blur-background">
          <form id="pagination-form" onSubmit={handleSubmit}>
            <button
              type="button"
              className="exit-button"
              onClick={() => setOpenFindForm((prevValue) => !prevValue)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            <h1>Pages: {totalPages} (actually tmdb api limit = 500 pages)</h1>
            <input
              type="number"
              id="pagination-input"
              placeholder="Page Number"
              ref={formInputRef}
            />
            <button type="submit" id="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}

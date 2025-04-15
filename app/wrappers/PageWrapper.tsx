'use client'
import Header from '../header/Header'
import Pagination from '../pagination/Pagination'

export default function PageWrapper({ totalPages, setPage, children }: any) {
  return (
    <>
      <div className="main-page">
        <main id="main">{children}</main>
        <Pagination totalPages={totalPages} setPage={setPage} />
      </div>
    </>
  )
}

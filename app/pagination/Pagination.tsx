export default function Pagination({ page, setPage }: any) {
  const pages = []
  const startPage = Math.floor((page - 1) / 5) * 5 + 1
  for (let i = startPage; i < startPage + 5; i++) {
    console.log(page)
    pages.push(i)
    console.log(pages)
  }
  function handlePage(pageParam: any) {
    setPage(pageParam)
  }
  return (
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
    </div>
  )
}

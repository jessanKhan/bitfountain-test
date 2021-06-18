import React from "react"

const Pagination = () => {
  //   const pagesCount = Math.ceil(itemsCount / pageSize)
  //   if (pagesCount === 1 || pagesCount === undefined) return null

  return (
    <nav>
      <ul className="pagination">
        <ul className="pagination">
          {/* <li className="page-item" onClick={() => onPageChange("-")}>
            <div className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </div>
          </li>
          <li className="page-item" onClick={() => onPageChange("+")}>
            <div className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </div>
          </li> */}
        </ul>
      </ul>
    </nav>
  )
}
export default Pagination

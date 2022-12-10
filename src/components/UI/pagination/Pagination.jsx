import React from 'react'
import { getPageArray } from '../../../util/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPageArray(totalPages);
    return (
        <div className="">
        {pagesArray.map((p) => (
          <span onClick={() => changePage(p)} key = {p} className={page === p ? "page page__current" : "page"}>
            {p}
          </span>
        ))}
      </div>
    )
}

export default Pagination
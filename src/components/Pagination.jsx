import { useEffect, useState } from "react";

function Pagination({ totalPages, setPage, page, padding, allSearchValue }) {
  let [pagesArr, setPagesArr] = useState([]);
  let [index, setIndex] = useState([]);

  useEffect(() => {
    let newArr = [];
    let prevPages = page - 2;
    let nextPages = page + 2;
    prevPages = Math.max(prevPages, 1);
    nextPages = Math.min(nextPages, totalPages);
    for (let i = prevPages; i <= nextPages; i++) {
      newArr.push(i);
      setPagesArr(newArr);
    }
  }, [totalPages, page]);
  return (
    <div className="pagiContainer">
      <ul className="Pagination">
        {pagesArr.map((page) => (
          <li>
            <a onClick={() => setPage(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;

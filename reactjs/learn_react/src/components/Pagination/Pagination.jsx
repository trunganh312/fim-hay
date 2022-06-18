import React from 'react';

export function Pagination(props) {
  const { onChangePage, page } = props;
  console.log(page);
  const { _page, _limit, _totalRows } = page;
  const x = Math.ceil(_totalRows / _limit);
  function handleClickPagination(newPage) {
    if (!onChangePage) return;

    onChangePage(newPage);
  }
  return (
    <div>
      <button
        disabled={_page <= 1}
        onClick={() => handleClickPagination(_page - 1)}
      >
        Prev
      </button>
      <button
        disabled={_page >= x}
        onClick={() => handleClickPagination(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

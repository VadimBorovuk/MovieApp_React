import React from 'react';

const Pagination = ({count, page, pages, handlePagination}) => {
    return (
        <div>
            <button disabled={page === 1} onClick={() => handlePagination(page, 'prev')}>prev</button>
            {
                pages.map((pageCount, idx) =>
                    <button
                        key={idx}
                        style={pageCount === page ? {background: "green"} : {}}
                        onClick={() => handlePagination(pageCount)}>
                        {pageCount}
                    </button>)
            }
            <button disabled={page === count} onClick={() => handlePagination(page, 'next')}>next</button>
        </div>
    );
};

export default Pagination;
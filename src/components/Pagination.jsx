import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";

const PaginationView = styled(Pagination)`
    margin: 0 auto 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    padding: 5px 10px;
`

const PaginationComponent = ({count, page, handlePagination}) => {
    return <PaginationView
        page={page}
        onChange={(_, num) => handlePagination(num)}
        count={count} color="primary"/>
};

export default PaginationComponent;
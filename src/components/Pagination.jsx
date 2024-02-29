import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationComponent = ({count, page, handlePagination}) => {
    return (
        <div>
            <Stack spacing={2}>
                <Pagination
                    page={page}
                    onChange={(_, num)=> handlePagination(num)}
                    count={count} color="secondary" />
            </Stack>
        </div>
    );
};

export default PaginationComponent;
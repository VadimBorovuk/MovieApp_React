import React, {FC} from 'react';
import {PaginationView} from "./style";

type PaginationProps = {
    count: number
    page: number
    handlePagination: (page: number) => void
}

const PaginationComponent: FC<PaginationProps> = ({count, page, handlePagination}) => {
    return <PaginationView
        page={page}
        onChange={(_: any, num: number) => handlePagination(num)}
        count={count} color="primary"/>
};

export default PaginationComponent;

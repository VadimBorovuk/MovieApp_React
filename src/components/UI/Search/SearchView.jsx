import React from 'react';
import SearchFilm from "../SearchFilm";
import {LoadMoreBtn, SearchCountResults, SearchData, SearchNotData} from "../styled";
import ImageBack from '../../../assets/images/movie-background.jpg'
import Button from "@mui/material/Button";

const SearchView = ({searching, toggleDrawer, countItems, loadMore}) => {
    return (
        <SearchData>
            {
                countItems ? <SearchCountResults>
                    All results: {searching.total_results}
                </SearchCountResults> : ''
            }

            {
                !!searching.results.length ? searching.results.map(film => {
                        return (
                            <SearchFilm
                                film={film}
                                toggleDrawer={toggleDrawer(false)}
                                key={film.id}/>
                        )
                    }) :
                    <SearchNotData>
                        <img src={ImageBack} alt=""/>
                    </SearchNotData>
            }
            <LoadMoreBtn>
                {countItems === 20 && <Button variant="contained" onClick={loadMore}>Load More</Button>}
            </LoadMoreBtn>
        </SearchData>
    );
};

export default SearchView;

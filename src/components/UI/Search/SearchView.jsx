import React from 'react';
import SearchFilm from "../SearchFilm";

const SearchView = ({results, toggleDrawer}) => {
    return (
        !!results.length ? results.map(film => {
            return (
                <SearchFilm
                    film={film}
                    toggleDrawer={toggleDrawer(false)}
                    key={film.id}/>
            )
        }) : 'no data'
    );
};

export default SearchView;

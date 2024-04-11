import React from 'react';
import {ButtonStyled, FiltersStyled} from "../../pages/DiscoverFilm/styled";
import SelectGenres from "../UI/Select/SelectGenres";
import SelectYears from "../UI/Select/SelectYears";
import SelectSort from "../UI/Select/SelectSort";

const Filters = ({
                     t,
                     genres,
                     genreLabel,
                     yearLabel,
                     sortLabel,
                     handleChangeGenre,
                     handleChangeYear,
                     handleChangeSort,
                     showFilters,
                     clearFilters
                 }) => {
    return (
        <FiltersStyled>
            <SelectGenres
                t={t}
                genres={genres}
                genreLabel={genreLabel}
                handleChange={handleChangeGenre}
            />
            <SelectYears
                t={t}
                yearLabel={yearLabel}
                handleChange={handleChangeYear}
            />
            <SelectSort
                t={t}
                sortLabel={sortLabel}
                handleChange={handleChangeSort}
            />
            <ButtonStyled variant="contained"
                          color="success"
                          onClick={() => showFilters()}>
                {t('t.filters.show')}
            </ButtonStyled>

            <ButtonStyled variant="contained"
                          color="error"
                          onClick={() => clearFilters()}>
                {t('t.filters.clear')}
            </ButtonStyled>
        </FiltersStyled>
    );
};

export default Filters;

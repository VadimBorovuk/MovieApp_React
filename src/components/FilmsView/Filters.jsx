import React, {useState} from 'react';
import {ButtonStyled, FiltersStyled} from "../../pages/DiscoverFilm/styled";
import SelectGenres from "../UI/Select/SelectGenres";
import SelectYears from "../UI/Select/SelectYears";
import SelectSort from "../UI/Select/SelectSort";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";

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
                     clearFilters,
                     setFiltersCopy
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



            {
                (!!genreLabel.length || yearLabel || !!sortLabel.length) ?
                <CopyToClipboard
                    style={{cursor: 'pointer'}}
                    text={window.location.href}
                    onCopy={() => setFiltersCopy(true)}>
                    <Tooltip
                        title={t('t.tip.copy')}>
                        <ContentCopyIcon/>
                    </Tooltip>
                </CopyToClipboard> : ''
            }

        </FiltersStyled>
    );
};

export default Filters;

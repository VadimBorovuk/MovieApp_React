import React, {FC} from 'react';
import {ButtonStyled, FiltersStyled} from "../../pages/DiscoverFilm/styled";
import SelectGenres from "../UI/Select/SelectGenres";
import SelectYears from "../UI/Select/SelectYears";
import SelectSort from "../UI/Select/SelectSort";
// @ts-ignore
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import {GenresProps} from "./View";
import {LangI118Type} from "../Navbar/Pages";
import {SelectChangeEvent} from "@mui/material/Select";


type FiltersProps = {
  t: LangI118Type
  genres: GenresProps[]
  genreLabel: number[]
  filtersCopy: boolean
  yearLabel: string
  sortLabel: string
  handleChangeGenre: (e: SelectChangeEvent<number[]>) => void
  handleChangeYear:  (e: SelectChangeEvent<string>) => void
  handleChangeSort: (e: SelectChangeEvent<string>) => void
  showFilters: () => void
  clearFilters: () => void
  setFiltersCopy: (status: boolean) => void
}

const Filters: FC<FiltersProps> =
    ({
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
                          onClick={() => showFilters()}>
              {t('t.filters.show')}
            </ButtonStyled>

            <ButtonStyled variant="outlined"
                          onClick={() => clearFilters()}>
              {t('t.filters.clear')}
            </ButtonStyled>
            {
              (genreLabel.length > 0 || yearLabel || !!sortLabel.length) ?
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

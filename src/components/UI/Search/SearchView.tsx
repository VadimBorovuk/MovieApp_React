import React, {FC} from 'react';
import SearchFilm from "../SearchFilm";
import {LoadMoreBtn, SearchCountResults, SearchData, SearchNotData} from "../styled";
import ImageBack from '../../../assets/images/movie-background.jpg'
import Button from "@mui/material/Button";

import {LangI118Type} from "../../Navbar/Pages";
import {MovieDataProps} from "../../../redux/discoverMovies/types";

type SearchingMovies = {
  total_results: number,
  results: MovieDataProps[]
}

interface SearchViewProps {
  t: LangI118Type
  searching: SearchingMovies
  toggleDrawer: (status: boolean) => void
  countItems: number
  loadMore: () => void
}

const SearchView: FC<SearchViewProps> = ({t, searching, toggleDrawer, countItems, loadMore}) => {

  return (
      <SearchData>
        {
          countItems ? <SearchCountResults>
            {t('t.all.results')} : {searching.total_results}
          </SearchCountResults> : ''
        }

        {
          !!searching.results.length ? searching.results.map(film => {
                return (
                    <SearchFilm
                        t={t}
                        film={film}
                        toggleDrawer={() => toggleDrawer(false)}
                        key={film.id}/>
                )
              }) :
              <SearchNotData>
                <img src={ImageBack} alt=""/>
              </SearchNotData>
        }
        <LoadMoreBtn>
          {countItems === 20 && <Button variant="contained" onClick={loadMore}>
            {t('t.load.more')}
          </Button>}
        </LoadMoreBtn>
      </SearchData>
  );
};

export default SearchView;

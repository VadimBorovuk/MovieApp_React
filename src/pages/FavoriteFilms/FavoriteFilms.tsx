import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import {ContentBlock, ContentFavorite, MainFavorite} from "./style";
import {selectGenreLists} from "../../redux/genreList/selectors";
import {useAppDispatch} from "../../redux/store";
import {selectFavoriteMovies} from "../../redux/favoriteMovies/selectors";
import {fetchFavoriteMovies} from "../../redux/favoriteMovies/asyncActions";
import {FilterSliceState} from "../../redux/filter/types";

const FavoritePage = () => {
  const {genres} = useSelector(selectGenreLists)

  const {movies, loading} = useSelector(selectFavoriteMovies)
  const dispatch = useAppDispatch()

  const [page, handlePage] = useState<number>(1);
  const [query, setQueryData] = useState<FilterSliceState>({
    page: 1,
    language: localStorage.getItem('lang') || 'en'
  })

  const handlePagination = (page: number) => {
    handlePage(page)
    setQueryData({
      page,
      language: localStorage.getItem('lang') || 'en'
    })
  }

  const getFavoriteFilms = (params: FilterSliceState) => {
    if (params) {
      dispatch(fetchFavoriteMovies(params))
    }
  }

  useEffect(() => {
    getFavoriteFilms(query)
  }, [query])

  return (
      <MainFavorite>

        <ContentFavorite>
          {loading ? <Backdrop
                  sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                  open={true}
              >
                <CircularProgress color="inherit"/>
              </Backdrop> :
              <ContentBlock maxWidth="xl">
                <View
                    title="favorite"
                    page={page}
                    genres={genres}
                    handlePagination={handlePagination}
                    films={movies}
                />
              </ContentBlock>
          }
        </ContentFavorite>

      </MainFavorite>
  );
};

export default FavoritePage



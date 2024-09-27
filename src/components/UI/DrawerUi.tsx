import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import {FC, useEffect, useState} from "react";
import useDebounce from "../../hooks/fetchHooks/useDebounce";
import {useSelector} from "react-redux";
import {Backdrop, CircularProgress} from "@mui/material";
import {SearchBox, SearchContent, SearchInput} from "./styled";
import SearchView from "./Search/SearchView";
import {LangI118Type} from "../Navbar/Pages";
import {useAppDispatch} from "../../redux/store";
import {selectSearchMovies} from "../../redux/searchMovies/selectors";
import {fetchSearchMovies} from "../../redux/searchMovies/asyncActions";
import {clearFilms, setPage} from "../../redux/searchMovies/slice";


const SearchDrawer: FC<{ t: LangI118Type }> = ({t}) => {
  const {loading, countItems, searchingFilms, page} = useSelector(selectSearchMovies)
  const [open, setOpen] = React.useState(false);
  const [searchFilm, setSearchFilm] = useState('')
  const debouncedSearchTerm = useDebounce(searchFilm, 500);
  const dispatch = useAppDispatch()

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };


  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchSearchMovies({
        page: page,
        query: debouncedSearchTerm,
        language: localStorage.getItem('lang') || 'en'
      }))

    } else {
      dispatch(clearFilms())
    }
  }, [debouncedSearchTerm, page, dispatch]);


  useEffect(() => {
    dispatch(clearFilms())
  }, [searchFilm])

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
      <div>
        <Button onClick={() => toggleDrawer(true)}>
          <ScreenSearchDesktopIcon sx={{color: '#fff'}}/>
        </Button>
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          <SearchBox role="presentation">
            <SearchInput
                sx={{
                  '.css-o943dk-MuiFormLabel-root-MuiInputLabel-root': {
                    color: '#fff'
                  },
                  '.css-10botns-MuiInputBase-input-MuiFilledInput-input': {
                    color: '#fff'
                  },
                  '.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                    color: '#fff'
                  },
                  '.css-10botns-MuiInputBase-input-MuiFilledInput-input:focus': {
                    color: '#fff'
                  }
                }}
                label={t('t.search.movie')}
                value={searchFilm}
                onChange={(e: any) => setSearchFilm(e.target.value)}
                variant="filled"/>

            <Divider/>

            <SearchContent>
              {loading ? <Backdrop
                      sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                      open={true}
                  >
                    <CircularProgress color="inherit"/>
                  </Backdrop> :
                  <SearchView
                      t={t}
                      countItems={countItems}
                      searching={searchingFilms}
                      handleDrawer={toggleDrawer}
                      loadMore={loadMore}
                  />
              }
            </SearchContent>
          </SearchBox>
        </Drawer>
      </div>
  );
}

export default SearchDrawer

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import {useEffect, useState} from "react";
import useDebounce from "../../hooks/fetchHooks/useDebounce";
import {useDispatch, useSelector} from "react-redux";
import {clearFilms, searchFilms, setPage} from "../../store/slices/filmsSearchSlice";
import {Backdrop, CircularProgress} from "@mui/material";
import {SearchBox, SearchContent, SearchData, SearchInput} from "./styled";
import SearchView from "./Search/SearchView";
import {useTranslation} from "react-i18next";


const SearchDrawer = () => {
    const {t} = useTranslation();
    const {loading, countItems, searchingFilms, page} = useSelector(state => state.sliceSearchFilms)
    const [open, setOpen] = React.useState(false);
    const [searchFilm, setSearchFilm] = useState('')
    const dispatch = useDispatch()
    const debouncedSearchTerm = useDebounce(searchFilm, 500);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        // dispatch(clearFilms())
        if (debouncedSearchTerm) {
            dispatch(searchFilms({
                page: page,
                query: debouncedSearchTerm,
                language: localStorage.getItem('lang')
            }))

        } else {
            dispatch(clearFilms())
        }
        // return () => {
        //     dispatch(clearFilms())
        // };
    }, [debouncedSearchTerm, page, dispatch]);


    useEffect(() => {
        dispatch(clearFilms())
    }, [searchFilm])

    const loadMore = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <ScreenSearchDesktopIcon sx={{color: '#fff'}}/>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
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
                        onChange={e => setSearchFilm(e.target.value)}
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
                                toggleDrawer={toggleDrawer}
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

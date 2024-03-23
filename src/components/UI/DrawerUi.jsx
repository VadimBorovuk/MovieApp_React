import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from "react";
import useDebounce from "../../hooks/fetchHooks/useDebounce";
import {useDispatch, useSelector} from "react-redux";
import {clearFilms, searchFilms, setPage} from "../../store/slices/filmsSearchSlice";
import {Backdrop, CircularProgress} from "@mui/material";
import {SearchBox, SearchContent, SearchCountResults, SearchData, SearchInput} from "./styled";
import SearchView from "./Search/SearchView";


export default function TemporaryDrawer() {
    const {loading, countItems, searchingFilms, page} = useSelector(state => state.sliceSearchFilms)
    const [open, setOpen] = React.useState(true);
    const [searchFilm, setSearchFilm] = useState('')
    const dispatch = useDispatch()
    const debouncedSearchTerm = useDebounce(searchFilm, 500);

    // const [page, setPage] = useState(1);
    // const [countItems, setCountItems] = useState(0);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(clearFilms())
            dispatch(searchFilms({
                page: page,
                query: debouncedSearchTerm
            }))

        } else {
            dispatch(clearFilms())
        }
    }, [debouncedSearchTerm, page]);

    const loadMore = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon/>
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
                        label="Search movie"
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
                            <SearchData>
                                <SearchCountResults>
                                    All results: {searchingFilms.total_results}
                                </SearchCountResults>
                                <SearchView
                                    results={searchingFilms.results}
                                    toggleDrawer={toggleDrawer}
                                />
                                {countItems === 20 && <button onClick={loadMore}>Load More</button>}
                            </SearchData>
                        }
                    </SearchContent>
                </SearchBox>
            </Drawer>
        </div>
    );
}

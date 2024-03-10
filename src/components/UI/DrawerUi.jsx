import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from "react";
import useDebounce from "../../hooks/fetchHooks/useDebounce";
import {useDispatch, useSelector} from "react-redux";
import {clearFilms, searchFilms} from "../../store/slices/filmsSearchSlice";
import SearchFilm from "./SearchFilm";

export default function TemporaryDrawer() {
    const {loading, error, searchingFilms} = useSelector(state => state.sliceSearchFilms)

    const [open, setOpen] = React.useState(false);
    const [searchFilm, setSearchFilm] = useState('')
    const dispatch = useDispatch()

    const debouncedSearchTerm = useDebounce(searchFilm, 500);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(searchFilms({
                query: debouncedSearchTerm
            }))
        } else {
            dispatch(clearFilms())
        }
    }, [debouncedSearchTerm]);


    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon/>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{width: 500}} role="presentation">
                    <input type="text" value={searchFilm} onChange={e => setSearchFilm(e.target.value)}/>

                    <Divider/>

                    {loading ? 'Loading' : searchingFilms.results.map(film => {
                        return (
                            <SearchFilm
                                film={film}
                                toggleDrawer={toggleDrawer(false)}
                                key={film.id}/>
                        )
                    })}
                </Box>
            </Drawer>
        </div>
    );
}
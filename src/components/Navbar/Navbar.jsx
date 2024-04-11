import React, {useEffect} from 'react';

import MovieIcon from '@mui/icons-material/Movie';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container, createTheme, ThemeProvider} from "@mui/material";
import DrawerUI from '../UI/DrawerUi'
import LanguageDown from '../Navbar/Langs'
import ProfileDown from '../Navbar/Profile'
import Pages from '../Navbar/Pages'
import {fetchGenres} from "../../store/slices/genreListSlice";
import {LinkItem} from "./styled";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import PagesMobile from "../UI/PagesMobile";

const theme = createTheme({
    palette: {
        ochre: {
            main: '#354160',
            contrastText: '#fff',
        },
    },
});


const Navbar = () => {

    const dispatch = useDispatch()
    const {t, i18n} = useTranslation();

    useEffect(() => {
        dispatch(fetchGenres({
            language: localStorage.getItem('lang')
        }))
    }, []);

    return <ThemeProvider theme={theme}>
        <AppBar position="static" color="ochre"
                style={{boxShadow: '0 8px 18px #1976d2', borderRadius: 25, padding: '5px 0'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <PagesMobile/>
                        <DrawerUI/>
                    </div>
                    <LinkItem to='/'>
                        <MovieIcon sx={{ mr: 1}}/>
                        {t('t.pages.main')}
                    </LinkItem>

                    <Pages/>

                    <Box sx={{flexGrow: 0, display: 'flex', alignItems: 'center'}}>
                        <LanguageDown/>
                        <ProfileDown/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
};

export default Navbar;

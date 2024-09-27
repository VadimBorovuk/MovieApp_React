import React, {useEffect} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container, createTheme, ThemeProvider} from "@mui/material";
import DrawerUI from '../UI/DrawerUi'
import LanguageDown from './Langs'
import ProfileDown from './Profile'
import Pages from './Pages'
import {fetchGenres} from "../../redux/slices_old_js/genreListSlice";
import {useDispatch} from "react-redux";
import PagesMobile from "../UI/PagesMobile";
import {useTranslation} from "react-i18next";

const theme = createTheme({
  palette: {
    primary: {
      main: '#354160',
      contrastText: '#fff',
    }
  }
});


const Navbar = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchGenres({
      language: localStorage.getItem('lang')
    }))
  }, []);

  return <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary"
            style={{boxShadow: '0 8px 18px #1976d2', borderRadius: 25, padding: '5px 0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <PagesMobile t={t}/>
            <DrawerUI t={t}/>
          </div>
          <Pages t={t}/>

          <Box sx={{flexGrow: 0, display: 'flex', alignItems: 'center'}}>
            <LanguageDown/>
            <ProfileDown t={t}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </ThemeProvider>
};

export default Navbar;

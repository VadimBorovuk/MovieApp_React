import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {removeUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";

import MovieIcon from '@mui/icons-material/Movie';
import StarsIcon from '@mui/icons-material/Stars';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Container, createTheme, ThemeProvider} from "@mui/material";
import styled from "styled-components";
import DrawerUI from '../UI/DrawerUi'


const theme = createTheme({
    palette: {
        ochre: {
            main: '#354160',
            contrastText: '#fff',
        },
    },
});

const LinkItem = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-right: 15px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;

    &.active {
        background: white;
        border-radius: 15px;
        padding: 5px 7px;
        color: #000000;
    }
`;


const pages = [
    {
        name: 'top',
        path: 'top'
    },
    {
        name: 'favorite',
        path: 'favorite'
    }
];
const settings = [
    {
        name: 'profile',
        path: '/'
    },
    {
        name: 'logout',
        path: 'logout'
    },
];

const Navbar = () => {
    const {t, i18n} = useTranslation();

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const changeLang = (lang) => {
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang)
    }

    const goPathNavigate = (item) => {
        if (item === 'logout') {

            dispatch(removeUser())

        } else {
            navigate('/')
        }
        handleCloseUserMenu()
    }

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return <ThemeProvider theme={theme}>
        <AppBar position="static" color="ochre"
                style={{boxShadow: '0 8px 18px #1976d2', borderRadius: 25, padding: '5px 0'}}>

            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <DrawerUI/>
                    <LinkItem to='/'>
                        <MovieIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        {t('t.pages.main')}
                    </LinkItem>


                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (<LinkItem to={page.path} key={page.path}>
                                {
                                    page.name === 'top' ?
                                        <StarsIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                                        :  <FavoriteIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                                }

                                {t(`t.pages.${page.name}`)}
                            </LinkItem>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <AccountCircleIcon/>
                            </IconButton>
                        </Tooltip>
                        <div>
                            <button onClick={() => changeLang('en')}>en</button>
                            <button onClick={() => changeLang('uk')}>uk</button>
                        </div>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((item) => (
                                <MenuItem key={item.path} onClick={() => goPathNavigate(item.path)}>
                                    <Typography textAlign="center"> {t(`t.settings.${item.name}`)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
};

export default Navbar;
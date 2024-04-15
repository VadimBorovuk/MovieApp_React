import React from 'react';
import {pages} from "../../assets/data/Navbar";
import {LinkItem} from "./styled";
import StarsIcon from "@mui/icons-material/Stars";
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";

const Pages = () => {
    const {t, i18n} = useTranslation();

    return (
        <Box sx={{flexGrow: 3, display: {xs: 'none', sm: 'flex'}}}>
            {
                pages.map((page) => (
                    <LinkItem to={page.path} key={page.path} className="link-desktop">
                        {
                            page.name === 'top' ?
                                <StarsIcon sx={{display: {xs: 'none', sm: 'flex'}, mr: 1}}/> :
                                page.name === 'main' ? <MovieIcon sx={{display: {xs: 'none', sm: 'flex'}, mr: 1}}/> :
                                    <FavoriteIcon sx={{display: {xs: 'none', sm: 'flex'}, mr: 1}}/>
                        }

                        {t(`t.pages.${page.name}`)}
                    </LinkItem>
                ))}
        </Box>
    );
};

export default Pages;

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {ListItemIcon, ListSubheader} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import StarsIcon from "@mui/icons-material/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from '@mui/icons-material/Movie';
import {PagesMobileBox} from "./styled";
import {LinkItem} from "../Navbar/styled";
import {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {pages} from "../../assets/data/Navbar";
import {LangI118Type} from "../Navbar/Pages";


const PagesMobile:FC<{t: LangI118Type}> = ({t}) => {
    const [open, setOpen] = React.useState(false);
    let location = useLocation()


    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [window.innerWidth]);

    const handleResize = (e: any) => {
        if (window.innerWidth > 600) {
            setOpen(false)
        }
    }

    useEffect(() => {
        setOpen(false)
    }, [location]);

    return (
        <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
            <Button onClick={() => setOpen(true)}>
                <MenuIcon sx={{color: '#fff'}}/>
            </Button>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <PagesMobileBox>
                    {
                        pages.map((page) => (
                            <LinkItem to={page.path} key={page.path}
                                      className="link-mobile">
                                <Button className="link-btn" variant="outlined"
                                        startIcon={
                                            page.name === 'top' ? <StarsIcon/> :
                                                page.name === 'favorite' ? <FavoriteIcon/> :
                                                    <MovieIcon/>
                                        }>
                                    {t(`t.pages.${page.name}`)}
                                </Button>
                            </LinkItem>
                        ))
                    }
                </PagesMobileBox>


                {/*{*/}
                {/*    pagesMobile.map((page) => {*/}
                {/*        return <ListItemButton key={page.name} onClick={() => goPath(page.path)}>*/}
                {/*            <ListItemIcon>*/}
                {/*                {*/}
                {/*                    page.name === 'top' ? <StarsIcon/> :*/}
                {/*                        page.name === 'favorite' ? <FavoriteIcon/> :*/}
                {/*                            <MovieIcon/>*/}
                {/*                }*/}
                {/*            </ListItemIcon>*/}
                {/*            <ListItemText primary={t(`t.pages.${page.name}`)}/>*/}
                {/*        </ListItemButton>*/}
                {/*    })*/}
                {/*}*/}
            </Drawer>
        </Box>
    );
}

export default PagesMobile

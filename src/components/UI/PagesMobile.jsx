import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {ListItemIcon, ListSubheader} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import StarsIcon from "@mui/icons-material/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from '@mui/icons-material/Movie';
import {PagesMobileBox} from "./styled";
import {pagesMobile} from "../../assets/data/Navbar";
import {useNavigate} from "react-router-dom";


const PagesMobile = () => {
    const {t} = useTranslation();
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigate();

    const goPath = (path) => {
        setOpen(false)
        setTimeout(()=>{
            navigation(path)
        },100)
    }

    const toggleMobile = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
            <Button onClick={toggleMobile(true)}>
                <MenuIcon sx={{color: '#fff'}}/>
            </Button>
            <Drawer open={open} onClose={toggleMobile(false)}>
                <PagesMobileBox role="presentation">
                    <List
                        sx={{width: '100%'}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                {t(`t.pages.mobile`)}
                            </ListSubheader>
                        }
                    >
                        {
                            pagesMobile.map((page) => {
                                return <ListItemButton key={page.name} onClick={() => goPath(page.path)}>
                                    <ListItemIcon>
                                        {
                                            page.name === 'top' ? <StarsIcon/> :
                                                page.name === 'favorite' ? <FavoriteIcon/> :
                                                    <MovieIcon/>
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={t(`t.pages.${page.name}`)}/>
                                </ListItemButton>
                            })
                        }

                    </List>
                </PagesMobileBox>
            </Drawer>
        </Box>
    );
}

export default PagesMobile

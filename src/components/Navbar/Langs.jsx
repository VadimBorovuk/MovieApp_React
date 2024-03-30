import {useState} from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import i18n from "i18next";

const LanguageDown = () => {

    const langCurrent = localStorage.getItem('lang')

    const changeLang = (lang) => {
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang)
        window.location.reload()
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: '#fff'}}
            >
                {langCurrent}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => changeLang('en')}>En</MenuItem>
                <MenuItem onClick={() => changeLang('uk')}>Uk</MenuItem>
            </Menu>
        </div>
    );
};

export default LanguageDown;

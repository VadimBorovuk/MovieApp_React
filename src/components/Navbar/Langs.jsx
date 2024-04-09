import {useState} from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import i18n from "i18next";

import UkFlagIcon from '../../assets/images/icons/ukraine.png'
import EnFlagIcon from '../../assets/images/icons/united-states.png'
import {ButtonLangStyled, LangItemStyled} from "./styled";

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
            <ButtonLangStyled
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {langCurrent === 'en' ? <img src={EnFlagIcon} alt=""/> : <img src={UkFlagIcon} alt=""/>}
            </ButtonLangStyled>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <LangItemStyled onClick={() => changeLang('en')}>
                    <img src={EnFlagIcon} alt=""/> EN
                </LangItemStyled>
                <LangItemStyled onClick={() => changeLang('uk')}>
                    <img src={UkFlagIcon} alt=""/> UK
                </LangItemStyled>
            </Menu>
        </div>
    );
};

export default LanguageDown;

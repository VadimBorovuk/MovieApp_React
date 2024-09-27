import React, {FC, useState} from 'react';
import Menu from "@mui/material/Menu";
import i18n from "i18next";

import UkFlagIcon from '../../assets/images/icons/ukraine.png'
import EnFlagIcon from '../../assets/images/icons/united-states.png'
import {LangItemStyled} from "./styled";
import Button from "@mui/material/Button";

const LanguageDown: FC = () => {

  const langCurrent = localStorage.getItem('lang')

  const changeLang = (lang: string) => {
    localStorage.setItem('lang', lang)
    i18n.changeLanguage(lang)
    window.location.reload()
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <Button
            style={{
              height: '47px',
              width: '47px'
            }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={event => handleClick(event)}
        >
          {langCurrent === 'en' ?
              <img
                  style={{
                    maxWidth: '100%',
                    height: '100%'
              }}
              src={EnFlagIcon} alt=""/> : <img
                  style={{
                    maxWidth: '100%',
                    height: '100%'
                  }}
                  src={UkFlagIcon} alt=""/>}
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

import {useNavigate, useRouteError} from "react-router-dom";
import {NotFoundStyled, NotViewStyled} from "./styled";
import Button from "@mui/material/Button";

import NotFoundImage from "../../assets/images/404Page.svg"
import {useTranslation} from "react-i18next";
import React from "react";

export default function ErrorPage() {
    const {t} = useTranslation();

    const navigate = useNavigate()

    const goBackBtn = () => {
        navigate('/')
    }

    return (
        <NotFoundStyled>
            <NotViewStyled>
                <div className="image-zone">
                    <img src={NotFoundImage} alt="not found"/>
                </div>
                <div className="content-found">
                    <h1>{t('t.title.404')}</h1>
                    <p>{t('t.desc.404')}</p>

                    <div className="active-btn">
                        <Button variant="outlined" onClick={() => goBackBtn()}>
                            {t('t.btn.404')}
                        </Button>
                    </div>
                </div>


            </NotViewStyled>
        </NotFoundStyled>
    );
}

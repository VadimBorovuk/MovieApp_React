import React from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

const CardFilm = styled.div`
    min-height: 120px;
    background: orange;
    padding: 10px;
    margin: 10px 20px;
    border-radius: 15px;
`

const SearchFilm = ({film, toggleDrawer}) => {
    const navigate = useNavigate()

    const openFilmPath = () => {
        toggleDrawer()
        setTimeout(()=>{
            navigate(`film/${film.id}`)
        },0)
    }

    return (
        <CardFilm onClick={openFilmPath}>
            {film.title}
        </CardFilm>
    );
};

export default SearchFilm;
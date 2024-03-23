import styled from "styled-components";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";

export const CardFilm = styled.div`
    position: relative;
    min-height: 160px;
    padding: 0;
    margin: 20px 20px 40px;
    border-radius: 15px;
    cursor: pointer;


    .search-info {
        display: flex;
        justify-content: space-between;

        position: relative;
        z-index: 1;
        color: #fff;

        div:first-child {
            flex: 1 1 26%;
            max-width: 26%;
        }

        div:nth-child(2) {
            flex: 1 1 68%;
            max-width: 68%;
        }

        .search-description {
            
            .description-title{
                font-size: 22px;
            }
        }

        img {
            height: 100%;
            width: 100%;
            border-radius: 15px;
        }
    }
`


export const PreviewImage = styled.div`
    background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${props => props.background}) no-repeat top center;
    background-size: cover;

    position: absolute;
    border-radius: 15px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px); /* Adjust the blur strength as needed */
    -webkit-filter: blur(3px);
`

export const SearchBox = styled(Box)`
    width: 600px;
    background-color: #373b41;
`
export const SearchInput = styled(TextField)`
    width: 100%;
    color: #fff;
`

export const SearchContent = styled.div`
    width: 100%;
    min-height: calc(100vh - 56px);
    background-color: #373b41;
`

export const SearchData = styled.div``
export const SearchCountResults = styled.div`
    text-align: center;
    color: #fff;
    margin-top: 10px;
`

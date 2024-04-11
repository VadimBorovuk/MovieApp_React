import styled from "styled-components";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";

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

        @media screen and (max-width: 600px) {
            flex-wrap: wrap;
        }
        position: relative;
        z-index: 1;
        color: #fff;

        .search-poster {
            flex: 1 1 26%;
            max-width: 26%;

            @media screen and (max-width: 600px) {
                flex: 1 1 100%;
                max-width: 100%;
                max-height: 450px;
            }
        }


        .search-description {
            flex: 1 1 72%;
            max-width: 72%;


            @media screen and (max-width: 600px) {
                flex: 1 1 100%;
                max-width: 100%;
            }

            padding: 15px 20px;

            .description-title {
                font-size: 22px;
                color: gold;
            }

            .desc-contact {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;

                .desc-info {
                    flex: 1 1 25%;
                    max-width: 25%;
                    display: flex;
                    flex-direction: column;

                    &__value {
                        font-size: 22px;
                        letter-spacing: 2px;
                        color: gold;
                    }

                    &__label {
                        color: #fff;
                        font-size: 14px;
                    }
                }
            }
        }

        img {
            height: 100%;
            width: 100%;
            border-radius: 15px;
        }
    }
`
export const FormControlStyled = styled(FormControl)`
    width: 300px;
    @media screen and (max-width: 450px) {
        width: 280px;
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

    @media screen and (max-width: 600px) {
        width: 380px;
    }
`

export const PagesMobileBox = styled(Box)`
    width: 290px;
    min-height: 100vh;
    //background-color: #373b41;
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
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    margin-top: 10px;

    //@media screen and (max-width: 600px) {
    //    
    //}
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

`

export const SearchNotData = styled.div`
    width: 100%;
    min-height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 20px;
        width: 450px;
        height: 450px;
        object-fit: cover;

        @media screen and (max-width: 600px) {
            width: 100%;
            height: 100%;
        }
    }
`

export const LoadMoreBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 40px;

    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`

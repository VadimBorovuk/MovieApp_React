import React, {FC} from 'react';
import {CompanyStyled, IconCompany, MovieGenres} from "./styled";
import {Grid} from "@mui/material";
import {LangI118Type} from "../../components/Navbar/Pages";
import {currentMovieApi, productionCompaniesProps} from "../../redux/currentMovie/types";

type MovieCompanyProps = {
  t: LangI118Type
  movie: currentMovieApi
}

const MovieCompany: FC<MovieCompanyProps> = ({t, movie}) => {
    return (
        <MovieGenres>
            <p className="title">
                {t('t.key.movie.companies')}
            </p>
            <CompanyStyled>
                <Grid container spacing={2}>
                    {movie.current && movie.current.production_companies && movie.current.production_companies.map((item: productionCompaniesProps) => {
                        return (
                            item.logo_path ?
                                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                    <IconCompany>
                                        <img
                                            src={`${process.env.REACT_APP_API_PATH_IMAGE}${item.logo_path}`}
                                            alt=""/>
                                    </IconCompany>
                                </Grid> : ''
                        )
                    })}
                </Grid>
            </CompanyStyled>
        </MovieGenres>
    );
};

export default MovieCompany;

import React, {FC} from 'react';
import {CardStyled} from "./styled";
import {Card, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ActorDataProps} from "../../redux/actorsList/types";


const ActorCard: FC<ActorDataProps> = ({original_name, profile_path, character}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{boxShadow: '0 8px 18px #1976d2'}}>
                <CardMedia
                    sx={{height: 200}}
                    image={profile_path}
                    title={original_name}
                />
                <CardStyled>
                    <Typography gutterBottom textAlign="center" component="div">
                        {original_name}
                    </Typography>
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                        {character}
                    </Typography>
                </CardStyled>
            </Card>
        </Grid>
    );
};

export default ActorCard;

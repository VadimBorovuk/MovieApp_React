import React from 'react';
import {CardStyled} from "./styled";
import {Card, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";


const ActorCard = ({original_name, profile_path, character}) => {
    return (
        <Grid item xs={3}>
            <Card sx={{maxWidth: 345, boxShadow: '0 8px 18px #1976d2'}}>
                <CardMedia
                    sx={{height: 200}}
                    image={profile_path}
                    title={original_name}
                />
                <CardStyled>
                    <Typography gutterBottom textAlign="center" variant="p" component="div">
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

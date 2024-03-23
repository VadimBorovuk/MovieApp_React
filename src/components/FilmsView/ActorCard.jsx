import React from 'react';
import {ActorStyled, CardStyled} from "./styled";
import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

{/*<ActorStyled>*/
}
{/*    <img src={profile_path} alt=""/>*/
}
{/*    <div className="info-actor">*/
}
{/*        <p>{original_name}</p>*/
}
{/*        <p>{character}</p>*/
}
{/*    </div>*/
}
{/*</ActorStyled>*/
}

const ActorCard = ({original_name, profile_path, character}) => {
    return (
        <Grid item xs={3}>
            <Card sx={{maxWidth: 345, boxShadow: '0 8px 18px #1976d2'}}>
                <CardMedia
                    sx={{height: 200}}
                    image={profile_path}
                    title="green iguana"
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

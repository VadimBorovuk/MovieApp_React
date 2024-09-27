import React, {FC} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ActorCard from "../../components/FilmsView/ActorCard";
import {MovieGenres} from "./styled";
import {LangI118Type} from "../../components/Navbar/Pages";
import {ActorsApiProps} from "../../redux/actorsList/types";

type MovieActorsProps = {
    t: LangI118Type
    actors: ActorsApiProps
}

const MovieActors: FC<MovieActorsProps> = ({t, actors}) => {
    return (
        <MovieGenres>
            <Accordion sx={{
                background: 'rgba(0, 0, 0, .3)',
                '.MuiAccordionSummary-expandIconWrapper': {
                    color: '#fff'
                }
            }}>
                <AccordionSummary
                    style={{color: '#fff'}}
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <p className="title-actors">
                        {t('t.key.movie.actors')}
                    </p>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        {actors && actors.results.map(item => {
                            return <ActorCard key={item.id} {...item}/>
                        })}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </MovieGenres>
    );
};

export default MovieActors;

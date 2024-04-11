import React from 'react';
import {Badge} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import {MovieDuration, MovieHead, MovieRating, MovieVoices, RatingFavorite} from "./styled";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const MovieHeader = ({movie, t, switchFavorite, changeIcon, copyLinkMovie, generateRunTime, generateData}) => {
    // ,
    return (
        <div>
            <MovieHead>
                <p className="title">
                    {movie.current.title}
                </p>
                <Badge
                    sx={{
                        '.MuiBadge-badge': {
                            fontSize: '15px'
                        },
                        '.MuiSvgIcon-root': {
                            height: '1.3em',
                            width: '1.3em'
                        }
                    }}
                    className="badget-votes"
                    color="success"
                    size="large"
                    badgeContent={movie.current.vote_count} max={50000}>
                    <AddReactionIcon/>
                </Badge>
            </MovieHead>

            <MovieRating>
                <div style={{display: "flex", alignItems: "center"}}>
                    <MovieVoices style={{marginRight: '9px'}}>
                        <StarIcon/>
                        <span>{movie.current.vote_average}</span>
                    </MovieVoices>
                    <MovieVoices style={{marginRight: '9px'}}>
                        <Tooltip
                            title={!switchFavorite ? t('t.add.favorite') : t('t.remove.favorite')}>
                            <RatingFavorite
                                sx={{
                                    '.css-1vooibu-MuiSvgIcon-root': {
                                        filter: 'invert(1)'
                                    }
                                }}
                                max={1}
                                icon={<FavoriteIcon fontSize="inherit"/>}
                                onChange={(event, newValue) => changeIcon(newValue, movie.current)}
                                emptyIcon={<FavoriteIcon style={{opacity: 0.55, margin: 0}}
                                                         fontSize="inherit"/>}
                            />
                        </Tooltip>
                    </MovieVoices>
                    <MovieVoices style={{marginRight: '9px'}}>
                        <CopyToClipboard style={{cursor: 'pointer'}}
                                         text={window.location.href}
                                         onCopy={() => copyLinkMovie()}>
                            <Tooltip
                                title={t('t.tip.copy')}>
                                <ContentCopyIcon/>
                            </Tooltip>
                        </CopyToClipboard>
                    </MovieVoices>
                </div>

                <MovieDuration>
                    <span>
                        {generateRunTime(movie.current.runtime)}
                    </span>
                    <span>/</span>
                    <span>
                        {generateData(movie.current.release_date)}
                    </span>
                </MovieDuration>
            </MovieRating>
        </div>
    );
};

export default MovieHeader;

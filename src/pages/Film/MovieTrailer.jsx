import React from 'react';
import {MovieVideo} from "./styled";
import ReactPlayer from "react-player";

const MovieTrailer = ({t, videos}) => {
    return (
        <MovieVideo>
            <p className="title">
                {t('t.key.movie.trailers')}
            </p>

            {videos.loading ?
                <></> :
                !videos.results.length ? <p className="title">
                        {t('t.key.movie.novideo')}
                    </p> :
                    <ReactPlayer
                        height={450}
                        width={'100%'}
                        controls={true}
                        url={videos.results}
                    />
            }
        </MovieVideo>
    );
};

export default MovieTrailer;

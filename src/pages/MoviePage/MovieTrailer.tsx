import React, {FC} from 'react';
import {MovieVideo} from "./styled";
import ReactPlayer from "react-player";
import {LangI118Type} from "../../components/Navbar/Pages";
import {VideosApi} from "../../redux/videoList/types";

type MovieTrailerProps = {
  t: LangI118Type
  videos: VideosApi
}

const MovieTrailer: FC<MovieTrailerProps> = ({t, videos}) => {

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

import React, {FC, useState} from 'react';
import {MovieVideo} from "./styled";
import ReactPlayer from "react-player";
import {LangI118Type} from "../../components/Navbar/Pages";
import {VideosApi} from "../../redux/videoList/types";
import {ButtonGroup} from "@mui/material";
import TrailerBtn from "./TrailerBtn";

type MovieTrailerProps = {
  t: LangI118Type
  videos: VideosApi
}

const MovieTrailer: FC<MovieTrailerProps> = ({t, videos}) => {
  const [selectedUrl, setSelectedUrl] = useState<string | undefined>(undefined);

  const firstVideo = videos.results?.[0];
  const selectTrailer = (url: string | undefined) => {
    setSelectedUrl(url)
  }

  return (
      <MovieVideo>
        <p className="title">{t('t.key.movie.trailers')}</p>

        {videos.loading ? null : !videos.results.length ? (
            <p className="title">{t('t.key.movie.novideo')}</p>
        ) : (
            <>
              <ReactPlayer
                  height={450}
                  width="100%"
                  controls={true}
                  url={selectedUrl || firstVideo}
              />

              <div className="video-thumbnails">
                <ButtonGroup size="large">
                  {videos.results.map((url, index) => (
                      <TrailerBtn
                          t={t}
                          url={url}
                          key={index}
                          index={index}
                          selectedUrl={selectedUrl}
                          onSelect={selectTrailer}
                      />
                  ))}
                </ButtonGroup>
              </div>
            </>
        )}
      </MovieVideo>
  );
};

export default MovieTrailer;

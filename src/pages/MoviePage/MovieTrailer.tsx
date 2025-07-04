import React, {FC, useState} from 'react';
import {MovieVideo} from "./styled";
import ReactPlayer from "react-player";
import {LangI118Type} from "../../components/Navbar/Pages";
import {VideosApi} from "../../redux/videoList/types";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import TrailerBtn from "./TrailerBtn";

type MovieTrailerProps = {
  t: LangI118Type
  videos: VideosApi
}

const MovieTrailer: FC<MovieTrailerProps> = ({t, videos}) => {
  const [selectedUrl, setSelectedUrl] = useState<string | undefined>(undefined);

  const firstVideo = videos.results?.[0];

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
                      <button
                          key={index}
                          onClick={() => setSelectedUrl(url)}
                          style={{
                            marginRight: 8,
                            padding: 6,
                            background: selectedUrl === url ? "#ccc" : "#eee",
                          }}
                      >
                        {t('t.key.movie.trailer')} {index + 1}
                      </button>
                    ))}
                  {/*    <TrailerBtn*/}
                  {/*        key={index}*/}
                  {/*        index={index}*/}
                  {/*        selectedUrl={selectedUrl}*/}
                  {/*        url={url}*/}
                  {/*        onClick={() => setSelectedUrl(url)}*/}
                  {/*        t={t}*/}
                  {/*    />*/}
                </ButtonGroup>
              </div>
            </>
        )}
      </MovieVideo>
  );
};

export default MovieTrailer;

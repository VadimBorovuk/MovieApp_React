import React, {FC} from 'react';
import Button from "@mui/material/Button";
import {LangI118Type} from "../../components/Navbar/Pages";

type TrailerBtnProps = {
  t: LangI118Type,
  index: number
  url: string
  selectedUrl: string | undefined
  onSelect: (url: string | undefined) => void
}

const TrailerBtn: FC<TrailerBtnProps> = ({t, url, index, selectedUrl, onSelect}) => {
  return (
      <Button
          onClick={() => onSelect(url)}
          style={{
            background: selectedUrl === url ? "#ccc" : ""
          }}>
        {t('t.key.movie.trailer')} {index + 1}
      </Button>
  );
};

export default TrailerBtn;

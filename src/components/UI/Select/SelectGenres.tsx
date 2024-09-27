import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FormControlStyled} from "../styled";
import {GenresProps} from "../../FilmsView/View";
import {FC} from "react";
import {LangI118Type} from "../../Navbar/Pages";


interface SelectGenresProps {
  t: LangI118Type
  genreLabel: number[]
  handleChange: (e:SelectChangeEvent<number[]>) => void
  genres: GenresProps[]
}

const SelectGenres: FC<SelectGenresProps> = ({t, genreLabel, handleChange, genres}) => {

  return (
      <div>
        <FormControlStyled sx={{m: 1}} size={"small"}>
          <InputLabel id="demo-multiple-name-label">
            {t('t.filters.genres')}
          </InputLabel>
          <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={genreLabel}
              onChange={handleChange}
              input={<OutlinedInput label={t('t.filters.genres')}/>}
          >
            {genres && genres.map((genre) => (
                <MenuItem
                    key={genre.id}
                    value={genre.id}
                >
                  {genre.name}
                </MenuItem>
            ))}
          </Select>
        </FormControlStyled>
      </div>
  );
}

export default SelectGenres

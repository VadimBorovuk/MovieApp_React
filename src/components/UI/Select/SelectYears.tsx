import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FormControlStyled} from "../styled";
import {FC} from "react";
import {LangI118Type} from "../../Navbar/Pages";

const years: number[] = Array.from({ length: 2031 - 1990 }, (_, i) => i + 1990);

interface SelectYearsProps {
  t: LangI118Type
  yearLabel: string
  handleChange: (e: SelectChangeEvent<string>) => void
}
const SelectYears: FC<SelectYearsProps> = ({t, yearLabel, handleChange}) => {

    return (
        <div>
            <FormControlStyled sx={{ m: 1 }} size={"small"}>
                <InputLabel id="demo-multiple-name-label">
                    {t('t.filters.years')}
                </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={yearLabel}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select year" />}
                >
                    {years && years.map((year) => (
                        <MenuItem
                            key={year}
                            value={year}
                        >
                            {year}
                        </MenuItem>
                    ))}
                </Select>
            </FormControlStyled>
        </div>
    );
}

export default SelectYears

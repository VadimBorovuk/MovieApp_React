import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {FormControlStyled} from "../styled";


let years = [...Array(2031 - 1990).keys()].map(i => i + 1990);


const SelectYears = ({t, yearLabel, handleChange}) => {

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

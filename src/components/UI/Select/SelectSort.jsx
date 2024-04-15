import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {FormControlStyled} from "../styled";
import {sorts} from "../../../assets/data/filters";

const SelectSort = ({t, sortLabel, handleChange}) => {

    return (
        <div>
            <FormControlStyled sx={{m: 1}} size={'small'}>
                <InputLabel id="demo-multiple-name-label">
                    {t('t.filters.sort')}
                </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={sortLabel}
                    onChange={handleChange}
                    input={<OutlinedInput label={t('t.filters.sort')}/>}
                >
                    {sorts && sorts.map((sort) => (
                        <MenuItem
                            key={sort.value}
                            value={sort.value}
                        >
                            {t(sort.name)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControlStyled>
        </div>
    );
}

export default SelectSort

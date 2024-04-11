import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FormControlStyled} from "../styled";


let sorts = [
    {
        value: 'vote_count.desc',
        name: 't.sort.desc'
    },
    {
        value: 'vote_count.asc',
        name: 't.sort.asc'
    }
];


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

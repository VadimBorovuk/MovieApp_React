import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            backgroundColor: '#fff'
        },
    },
};
function getStyles(name, genreName, theme) {
    return {
        fontWeight:
            genreName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
 const SelectGenres = ({genreName, handleChange, genres}) => {
    const theme = useTheme();

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Select genres</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={genreName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select genres" />}
                    MenuProps={MenuProps}
                >
                    {genres && genres.map((genre) => (
                        <MenuItem
                            key={genre.id}
                            value={genre.id}
                            style={getStyles(genre.name, genreName, theme)}
                        >
                            {genre.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectGenres
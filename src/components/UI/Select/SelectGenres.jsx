import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


 const SelectGenres = ({genreName, handleChange, genres}) => {

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
            </FormControl>
        </div>
    );
}

export default SelectGenres

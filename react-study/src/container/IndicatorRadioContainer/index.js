import * as React from 'react';
import {useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export default function IndicatorRadioContainer() {
    // const [personName, setPersonName] = React.useState([]);
    const [value, setValue] = useState(null);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 300}}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={[value]}
                    // onChange={handleChange}
                    input={<OutlinedInput label="Tag"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    <RadioGroup
                        value={value}
                        onChange={handleChange}
                    >
                        {names.map((name, index) => (
                            <MenuItem key={index} value={name}>
                                <FormControlLabel value={name} control={<Radio/>} label={name}/>
                                {/*<Radio checked={personName.indexOf(name) > -1}/>*/}
                                {/*<ListItemText primary={value}/>*/}
                            </MenuItem>
                        ))}
                    </RadioGroup>
                </Select>
            </FormControl>
        </div>
    );
}

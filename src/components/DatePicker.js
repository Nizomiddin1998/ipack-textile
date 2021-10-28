import React, {useState} from 'react';
import {LocalizationProvider} from "@mui/lab";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';

function DatePicker() {
    const [value, setValue] = useState(new Date());
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
}

export default DatePicker;
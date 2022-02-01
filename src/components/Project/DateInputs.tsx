import React, { useState } from "react";
import {
    DatePicker,
    DateTimePicker,
    DesktopDatePicker,
    LocalizationProvider,
    MobileDatePicker,
    TimePicker,
} from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

type DateInputsProps = {
};

const color = "white";

const DateInputs: React.FC<DateInputsProps> = () => {
    const [value, setValue] = useState<Date | null>(new Date());
    const [inProgress, setInProgress] = useState(false);

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <span>Start Date</span>
                <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            sx={{
                                svg: { color },
                                input: { color, fontFamily: "montserrat" },
                                label: { color },
                            }}
                        />
                    )}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <span>End Date</span>
                <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            sx={{
                                svg: { color },
                                input: { color, fontFamily: "montserrat" },
                                label: { color },
                            }}
                        />
                    )}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default DateInputs;

import React, { useState } from "react";
import {
    DatePicker,
    DateTimePicker,
    DesktopDatePicker,
    LocalizationProvider,
    MobileDatePicker,
    TimePicker,
} from "@mui/lab";
import { Checkbox } from "@mui/material";
import { Box, Stack, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import styles from "./ProjectForm.module.scss";

type DateInputsProps = {
    startDate: Date;
    endDate: Date | null;
    inProgress: boolean;
    handleChange: (
        field: string,
        value: string | boolean | Date | null
    ) => void;
};

const color = "white";

const DateInputs: React.FC<DateInputsProps> = ({
    startDate,
    endDate,
    inProgress,
    handleChange,
}) => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleDateChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <span className="medium_text">Start Date</span>
                    <DesktopDatePicker
                        inputFormat="yyyy/MM"
                        views={["year", "month"]}
                        value={startDate}
                        onChange={(event) => handleChange("startDate", event)}
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
                {!inProgress && (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <span className="medium_text">End Date</span>
                        <DesktopDatePicker
                            inputFormat="yyyy/MM"
                            views={["year", "month"]}
                            value={endDate}
                            onChange={(event) => handleChange("endDate", event)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    sx={{
                                        svg: { color },
                                        input: {
                                            color,
                                            fontFamily: "montserrat",
                                        },
                                        label: { color },
                                    }}
                                />
                            )}
                        />
                    </Box>
                )}
            </LocalizationProvider>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <span className="medium_text">In Progress</span>
                <Checkbox
                    classes={{ checked: styles.testing }}
                    sx={{ color: "white" }}
                    onChange={(event) => {
                        handleChange("inProgress", event.target.checked);
                        if (event.target.checked) {
                            handleChange("endDate", null);
                        }
                    }}
                />
            </Box>
        </>
    );
};

export default DateInputs;

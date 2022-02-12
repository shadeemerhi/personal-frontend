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
import classNames from "classnames";

type DateInputsProps = {
  startDate: Date;
  endDate?: Date;
  inProgress: boolean;
  handleChange: (
    field: string,
    value: string | boolean | Date | null | undefined
  ) => void;
};

const dateDefault = "white";
const dateDisabled = "#4E4E4E";

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
    <Box className={styles.input_container}>
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
                  svg: { color: dateDefault },
                  input: { color: dateDefault, fontFamily: "montserrat" },
                  label: { color: dateDefault },
                }}
              />
            )}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <span
            className={classNames({
              medium_text: true,
              grey_text: inProgress,
            })}
          >
            End Date
          </span>
          <DesktopDatePicker
            inputFormat="yyyy/MM"
            views={["year", "month"]}
            value={endDate}
            disabled={inProgress}
            onChange={(event) => handleChange("endDate", event)}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  svg: { color: inProgress ? dateDisabled : dateDefault },
                  input: {
                    color: inProgress ? dateDisabled : dateDefault,
                    fontFamily: "montserrat",
                  },
                  label: { color: inProgress ? dateDisabled : dateDefault },
                }}
              />
            )}
          />
        </Box>
      </LocalizationProvider>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <span className="medium_text">In Progress</span>
        <Checkbox
          classes={{ checked: styles.checkbox }}
          checked={inProgress}
          sx={{ color: "white" }}
          onChange={(event) => {
            handleChange("inProgress", event.target.checked);
            const endDate = event.target.checked ? undefined : new Date();
            handleChange("endDate", endDate);
          }}
        />
      </Box>
    </Box>
  );
};

export default DateInputs;

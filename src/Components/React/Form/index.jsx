import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Autocomplete,
    Chip,
    FormHelperText,
    Button,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MultiSelect from "./MultiSelect";
import { HOBBIES, SKILLS_LIST } from "../../../Constants";

const helperTextStyles = {
    sx: {
        "& .MuiFormHelperText-root": {
            fontSize: "14px",
            marginLeft: "0px",
            color: "red",
        },
    },
};

const validateDateOfBirth = (value) => {
    const selectedDate = dayjs(value);

    if (!selectedDate.isValid()) {
        return "Invalid date format";
    }

    if (selectedDate.isAfter(dayjs(), "day")) {
        return "Date of Birth cannot be in the future";
    }

    if (selectedDate.isBefore(dayjs().subtract(120, "years"), "day")) {
        return "Date of Birth cannot be older than 120 years";
    }

    return true;
};

function ReactForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            gender: "",
            dateOfBirth: dayjs(new Date()),
            skills: [],
            hobbies: [],
        },
    });

    const onSubmitForm = (data) => {
        console.log("data", data);
    };

    return (
        <div className="flex flex-col justify-start items-start">
            <p className="text-2xl text-slate-800 font-bold mt-10 underline ">
                React Form
            </p>
            <div className="pt-5 min-w-[500px] ">
                <form
                    onSubmit={handleSubmit(onSubmitForm)}
                    className="flex flex-col gap-10"
                >
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: "First name is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message}
                                {...helperTextStyles}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="lastName"
                        control={control}
                        rules={{ required: "Last name is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message}
                                {...helperTextStyles}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message}
                                {...helperTextStyles}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="age"
                        control={control}
                        rules={{
                            required: "Age is required",
                            min: {
                                value: 18,
                                message: "Minimum age should be 18",
                            },
                            max: {
                                value: 60,
                                message: "Age cannot be more than 60",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                id="age"
                                label="Age"
                                type="number"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message}
                                {...helperTextStyles}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="gender"
                        control={control}
                        rules={{ required: "Gender is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth error={!!error}>
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender"
                                    label="Gender"
                                    {...field}
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"other"}>Other</MenuItem>
                                </Select>
                                {error && (
                                    <FormHelperText
                                        sx={{ marginLeft: 0, fontSize: "14px" }}
                                    >
                                        {error.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="dateOfBirth"
                        control={control}
                        rules={{
                            required: "Date of Birth is required",
                            validate: validateDateOfBirth,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    id="dateOfBirth"
                                    label="Date of Birth"
                                    format="DD/MM/YYYY"
                                    slotProps={{
                                        textField: {
                                            error: !!error,
                                            helperText: error?.message,
                                            ...helperTextStyles,
                                        },
                                    }}
                                    {...field}
                                />
                            </LocalizationProvider>
                        )}
                    />

                    <Controller
                        name="skills"
                        control={control}
                        rules={{ required: "Skills is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <MultiSelect
                                id="skills"
                                label="Skills"
                                field={field}
                                error={error}
                                itemsList={SKILLS_LIST}
                            />
                        )}
                    />

                    <Controller
                        name="hobbies"
                        control={control}
                        rules={{ required: "Hobbies is required" }}
                        defaultValue={[]}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <Autocomplete
                                multiple
                                freeSolo
                                name="hobbies"
                                options={HOBBIES}
                                value={value}
                                onChange={(_, newValue) => onChange(newValue)}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip
                                            label={option}
                                            {...getTagProps({ index })}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Hobbies"
                                        placeholder="Type and press enter"
                                        error={!!error}
                                        helperText={error?.message}
                                        {...helperTextStyles}
                                    />
                                )}
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ py: 2, fontWeight: "bold", fontSize: "1rem" }}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ReactForm;

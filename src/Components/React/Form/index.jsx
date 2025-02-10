import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { formSchema } from "./formSchema";

const helperTextStyles = {
    sx: {
        "& .MuiFormHelperText-root": {
            fontSize: "14px",
            marginLeft: "0px",
            color: "red",
        },
    },
};

const DUMMY_API = "https://dummyjson.com/users";

function ReactForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: 0,
            gender: "",
            dateOfBirth: null,
            skills: [],
            hobbies: [],
        },
    });

    // temporary api call
    const fetchData = async () => {
        try {
            const response = await fetch(DUMMY_API).then((res) => res.json());
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmitForm = async (data) => {
        const response = await fetchData();
        console.log("response", response);
        if (response) {
            reset();
        }
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
                        render={({ field, fieldState: { error } }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    id="dateOfBirth"
                                    label="Date of Birth"
                                    format="DD/MM/YYYY"
                                    value={
                                        field.value ? dayjs(field.value) : null
                                    }
                                    onChange={(date) => field.onChange(date)}
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
                                            {...getTagProps({ index })}
                                            key={`${option}-${index}`}
                                            label={option}
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

                    <div className="flex items-center gap-5 ">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                py: 2,
                                fontWeight: "bold",
                                fontSize: "1rem",
                                flexGrow: 1,
                            }}
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>

                        <Button
                            type="button"
                            variant="contained"
                            color="warning"
                            sx={{
                                py: 2,
                                fontWeight: "bold",
                                fontSize: "1rem",
                                flexGrow: 1,
                            }}
                            onClick={() => reset()}
                        >
                            Reset
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReactForm;

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
    Button,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MultipleSelect from "./MultipleSelect";

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
        console.log("data", data); // This will log the form data
    };

    return (
        <div className="flex flex-col justify-start items-start ">
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
                        render={({ field }) => (
                            <TextField
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="age"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                id="age"
                                label="Age"
                                type="number"
                                variant="outlined"
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
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
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    id="dateOfBirth"
                                    label="Date of Birth"
                                    format="DD/MM/YYYY"
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                    {...field}
                                />
                            </LocalizationProvider>
                        )}
                    />

                    <Controller
                        name="skills"
                        control={control}
                        render={({ field }) => (
                            <MultipleSelect
                                id="skills"
                                label="Skills"
                                field={field}
                                itemsList={[
                                    "Data structures",
                                    "Algorithms",
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "TypeScript",
                                    "React.js",
                                    "Redux",
                                    "Next.js",
                                    "Node.js",
                                    "Express.js",
                                    "Docker",
                                    "MongoDb",
                                    "MySQL",
                                    "Unit testing",
                                ]}
                            />
                        )}
                    />

                    <Controller
                        name="hobbies"
                        control={control}
                        defaultValue={[]}
                        render={({ field: { onChange, value } }) => (
                            <Autocomplete
                                multiple
                                freeSolo
                                name="hobbies"
                                options={[
                                    "Learning new tech stack",
                                    "Watching movies",
                                    "Playing cricket",
                                ]}
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

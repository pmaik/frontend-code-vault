import React from "react";
import { useTheme } from "@mui/material/styles";
import {
    FormControl,
    Select,
    MenuItem,
    Box,
    Chip,
    InputLabel,
    OutlinedInput,
    FormHelperText,
} from "@mui/material";

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

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

function MultiSelect({ id, label, itemsList = [], field, error }) {
    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        field.onChange(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <FormControl sx={{ width: 500 }} error={!!error}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                {...field}
                labelId={id}
                id={id}
                multiple
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {itemsList.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, field.value, theme)}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
            {error && (
                <FormHelperText
                    sx={{ fontSize: "14px", marginLeft: "0px", color: "red" }}
                >
                    {error.message}
                </FormHelperText>
            )}
        </FormControl>
    );
}

export default MultiSelect;

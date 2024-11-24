import React from "react";
import { TextField, Box, Typography } from "@mui/material";

function TotalDate({ setTotalDays }) {
    const handleInputChange = (e) => {
        const value = e.target.value;
        setTotalDays(value ? Number(value) : 0);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Typography variant="h6">총 휴가일수</Typography>
            <TextField
                type="number"
                placeholder="총 휴가일수"
                onChange={handleInputChange}
                variant="outlined"
                sx={{ maxWidth: "200px" }}
            />
        </Box>
    );
}

export default TotalDate;

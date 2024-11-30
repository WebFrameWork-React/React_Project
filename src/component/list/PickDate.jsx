import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import koLocale from "date-fns/locale/ko";

function PickDateItem({ dateRange, setDateRange }) {
    const today = new Date();

    useEffect(() => {
        if (!dateRange[0]) {
            setDateRange([today, dateRange[1]]);
        }
    }, [dateRange, setDateRange]);

    const handleStartDateChange = (newDate) => {
        setDateRange([newDate, dateRange[1]]);
    };

    const handleEndDateChange = (newDate) => {
        setDateRange([dateRange[0], newDate]);
    };

    const formatDate = (date) => {
        if (date instanceof Date) {
            return date.toLocaleDateString("ko-KR");
        }
        return "선택되지 않음";
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
            <Stack direction="row" spacing={4} justifyContent="center" alignItems="flex-start">
                <Stack spacing={2}>
                    <Typography variant="h6">시작 날짜</Typography>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={dateRange[0] || today}
                        onChange={handleStartDateChange}
                        minDate={today}
                    />
                    <Typography variant="body1">
                        선택된 시작 날짜: {formatDate(dateRange[0])}
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h6">종료 날짜</Typography>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={dateRange[1] || today}
                        onChange={handleEndDateChange}
                        minDate={dateRange[0] || today}
                    />
                    <Typography variant="body1">
                        선택된 종료 날짜: {formatDate(dateRange[1])}
                    </Typography>
                </Stack>
            </Stack>
        </LocalizationProvider>
    );
}

export default PickDateItem;

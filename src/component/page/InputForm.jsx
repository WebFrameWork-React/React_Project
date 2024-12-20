import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Alert, Paper } from "@mui/material";
import PickDateItem from "../list/PickDate";
import TotalDate from "../list/TotalDate";


function InputForm({ totalDays, setTotalDays, dateRange, setDateRange }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    sessionStorage.removeItem('selectedDays');
    sessionStorage.removeItem('holidays');
    sessionStorage.removeItem('totalDays');


    // // "/"경로로 접근 시마다 세션 스토리지 초기화
    // useEffect(() => {
    //     console.log('Before removing:', {
    //         totalDays: sessionStorage.getItem('totalDays')
    //     });
    
    //     sessionStorage.removeItem('selectedDays');
    //     sessionStorage.removeItem('holidays');
    //     sessionStorage.removeItem('totalDays');
    
    //     console.log('After removing:', {
    //         totalDays: sessionStorage.getItem('totalDays')
    //     });
    // }, []);
    

    useEffect(() => {
        const isTotalDaysValid = totalDays > 0;
        const isStartDateValid = dateRange?.[0] !== null;
        const isEndDateValid = dateRange?.[1] !== null;
        const isStartEndRight = isStartDateValid && isEndDateValid && new Date(dateRange[1]) > new Date(dateRange[0]);

        setIsButtonDisabled(!(isTotalDaysValid && isStartDateValid && isEndDateValid && isStartEndRight));

        if (!isTotalDaysValid) {
            setErrorMessage("총 휴가일수에 유효한 값을 입력해주세요!");
        } else if (!isStartDateValid) {
            setErrorMessage("시작 날짜를 선택해주세요!");
        } else if (!isEndDateValid) {
            setErrorMessage("종료 날짜를 선택해주세요!");
        } else if (!isStartEndRight) {
            setErrorMessage("종료 날짜는 시작 날짜 이후여야 합니다!")
        }
        else {
            setErrorMessage("");
        }
    }, [totalDays, dateRange]);

    const handleSave = () => {
        sessionStorage.setItem("totalDays", totalDays);
        sessionStorage.setItem("dateRange", JSON.stringify(dateRange));
        navigate("/select");
    };

    return (
        <>
            {/* 본 페이지 */}
            <Paper
                elevation={6}
                sx={{
                    margin: "auto",
                    padding: "32px",
                    maxWidth: "800px",
                    width: "90%",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "32px",
                }}
            >
                <TotalDate setTotalDays={setTotalDays} />
                <PickDateItem dateRange={dateRange} setDateRange={setDateRange} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={isButtonDisabled}
                    size="large"
                    sx={{
                        borderRadius: "20px",
                        padding: "10px 20px",
                        textTransform: "none",
                        fontSize: "1.2rem",
                    }}
                >
                    다음 페이지로
                </Button>
                {isButtonDisabled && <Alert severity="error">{errorMessage}</Alert>}
            </Paper>
        </>
    );
}

export default InputForm;

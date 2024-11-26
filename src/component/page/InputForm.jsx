import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Alert, Paper } from "@mui/material";
import PickDateItem from "../list/PickDate";
import TotalDate from "../list/TotalDate";
import WelcomeModal from "../list/WelcomeModal"; // 새로 추가된 컴포넌트 경로

function InputForm({ totalDays, setTotalDays, dateRange, setDateRange }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true); // 모달 상태
    const navigate = useNavigate();

    // "/"경로로 접근 시마다 로컬 스토리지 초기화
    useEffect(() => {
        localStorage.removeItem('selectedDays');
        localStorage.removeItem('holidays');
        console.log('로컬 스토리지가 초기화되었습니다.');
    }, []);

    useEffect(() => {
        const isTotalDaysValid = totalDays > 0;
        const isStartDateValid = dateRange?.[0] !== null;
        const isEndDateValid = dateRange?.[1] !== null;

        setIsButtonDisabled(!(isTotalDaysValid && isStartDateValid && isEndDateValid));

        if (!isTotalDaysValid) {
            setErrorMessage("총 휴가일수에 유효한 값을 입력해주세요!");
        } else if (!isStartDateValid) {
            setErrorMessage("시작 날짜를 선택해주세요!");
        } else if (!isEndDateValid) {
            setErrorMessage("종료 날짜를 선택해주세요!");
        } else {
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
            {/* 모달 컴포넌트 */}
            <WelcomeModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

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

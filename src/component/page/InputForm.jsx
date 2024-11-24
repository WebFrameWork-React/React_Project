import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PickDate from '../list/PickDate';
import TotalDate from '../list/TotalDate';
import Button from '../ui/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;
    gap: 30px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin: 0;
`;

function InputForm({ totalDays, setTotalDays, dateRange, setDateRange }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isTotalDaysValid = totalDays > 0;
        const isStartDateValid = dateRange?.[0] !== null;
        const isEndDateValid = dateRange?.[1] !== null;

        setIsButtonDisabled(!(isTotalDaysValid && isStartDateValid && isEndDateValid));

        if (!isTotalDaysValid) {
            setErrorMessage('총 휴가일수에 유효한 값을 입력해주세요!');
        } else if (!isStartDateValid) {
            setErrorMessage('시작 날짜를 선택해주세요!');
        } else if (!isEndDateValid) {
            setErrorMessage('종료 날짜를 선택해주세요!');
        } else {
            setErrorMessage('');
        }
    }, [totalDays, dateRange]);

    const handleSave = () => {
        console.log("저장된 데이터:");
        console.log("Total Days: ", totalDays);
        console.log("Date Range: ", dateRange);
        
        sessionStorage.setItem('totalDays', totalDays);
        sessionStorage.setItem('dateRange', JSON.stringify(dateRange));

        navigate('/select');
    };

    return (
        <Wrapper>
            <TotalDate totalDays={totalDays} setTotalDays={setTotalDays} />
            <PickDate dateRange={dateRange} setDateRange={setDateRange} />
            <Button title="다음 페이지로" onClick={handleSave} disabled={isButtonDisabled} />
            {isButtonDisabled && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Wrapper>
    );
}

export default InputForm;

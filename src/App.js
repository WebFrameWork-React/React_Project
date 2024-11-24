import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import InputForm from './component/page/InputForm';
import SelectForm from './component/page/SelectForm';  // SelectForm 컴포넌트 임포트
import ResultForm from './component/page/ResultForm';
import AdForm from './component/page/AdForm';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function MainTitle() {
    const location = useLocation(); // 현재 라우트 확인
    const hiddenRoutes = ["/result", "/ad"]; // MainTitleText를 숨길 경로

    // 현재 경로가 hiddenRoutes에 포함되지 않으면 렌더링
    if (!hiddenRoutes.includes(location.pathname)) {
        return <MainTitleText>휴가 정보를 입력해주세요</MainTitleText>;
    }
    return null; // 숨길 경우 null 반환
}

function App() {
    const [totalDays, setTotalDays] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);


    return (
        <BrowserRouter>
            {/* <MainTitleText>휴가 정보를 입력해주세요</MainTitleText> */}
            <MainTitle />
            <Routes>
                <Route
                    index
                    element={
                        <InputForm
                            totalDays={totalDays}
                            setTotalDays={setTotalDays}
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                        />
                    }
                />
                <Route
                    path="/select"
                    element={<SelectForm
                        totalDays={totalDays}
                        dateRange={dateRange} />}
                />
                <Route
                    path="/result"
                    element={
                        <ResultForm
                        />
                    }
                />
                <Route
                    path="/ad"
                    element={
                        <AdForm
                        />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

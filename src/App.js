import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import InputForm from './component/page/InputForm';
import SelectForm from './component/page/SelectForm';  // SelectForm 컴포넌트 임포트
import ResultForm from './component/page/ResultForm';
import AdForm from './component/page/AdForm';

function App() {
    const [totalDays, setTotalDays] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);


    return (
        <BrowserRouter>
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

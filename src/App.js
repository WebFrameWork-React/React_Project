import React, { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import InputForm from './component/page/InputForm';
import SelectForm from './component/page/SelectForm';  // SelectForm 컴포넌트 임포트
import ResultForm from './component/page/ResultForm';
import AdForm from './component/page/AdForm';
import { saveToSessionStorage, loadFromSessionStorage } from "./component/list/storage";
/*
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
}*/

function App() {
    const [totalDays, setTotalDays] = useState(loadFromSessionStorage("totalDays", ''));
    const [dateRange, setDateRange] = useState(loadFromSessionStorage("dateRange", [null, null]));
    const [selectedDays, setSelectedDays] = useState(loadFromSessionStorage("selectedDays", []));
    const [holidays, setHolidays] = useState(loadFromSessionStorage("holidays", []));

    useEffect(() => {
        saveToSessionStorage("totalDays", totalDays);
        saveToSessionStorage("dateRange", dateRange);
        saveToSessionStorage("selectedDays", selectedDays);
        saveToSessionStorage("holidays", holidays);
    }, [totalDays, dateRange, selectedDays, holidays]);


    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
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
                    element={
                        <SelectForm
                            totalDays={totalDays}
                            dateRange={dateRange}
                            selectedDays={selectedDays}
                            setSelectedDays={setSelectedDays}
                            holidays={holidays}
                            setHolidays={setHolidays}
                        />
                    }
                />
                <Route path="/result" element={<ResultForm selectedDays={selectedDays} holidays={holidays} />} />
                <Route path="/ad" element={<AdForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputForm from './component/page/InputForm';
import SelectForm from './component/page/SelectForm';  // SelectForm 컴포넌트 임포트
import ResultForm from './component/page/ResultForm';
import AdForm from './component/page/AdForm';
import StartForm from './component/page/StartForm'; // StartForm 컴포넌트 임포트
import { saveToSessionStorage, loadFromSessionStorage } from "./component/list/storage";

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
                <Route path="/" element={<StartForm />} /> {/* StartForm을 기본 경로에 추가 */}
                <Route
                    path="/input"
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

import React, { useState } from 'react';
//import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserVacationChart from '../list/UserVacation';
import ServiceVacationChart from '../list/ServiceVacation';
import '../ui/ResultForm.css';
import AdCard from '../list/AdCard';
import VacationDate from '../list/VacationDate';
import { calculateVacationSummary } from '../list/holidayUtils';
import BackButton from '../list/BackButton';

function ResultForm() {
    const location = useLocation();
    const { selectedDays, holidays } = location.state || {};

    const vacationSummary = calculateVacationSummary(selectedDays, holidays);

    const fetchVacationPercentageData = [10, 10, 5, 3, 5, 8, 17, 20, 5, 5, 3, 10];
    // 서버에서 서비스 이용자의 휴가 계획 비율 데이터를 가져오는 함수
    // const fetchVacationPercentageData = async () => {
    //     try {
    //         const response = await fetch('https://example.com/api/vacation-percentages'); // 서버 URL 변경 필요
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const data = await response.json(); // 서버로부터 월별 비율 데이터를 받음

    //     } catch (err) {
    //         console.error('서버 요청 실패:', err);
    //         setError(err.message);
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchVacationPercentageData(); // 컴포넌트 마운트 시 데이터 가져오기
    // }, []);

    const monthlyData = Array(12).fill(0); // 12개월 초기화
    vacationSummary.totalVacationPeriods.forEach((period) => {
        period.months.forEach((month) => {
            monthlyData[month - 1] += period.usedVacationDays; // 월별로 휴가 일수 합산
        });
    });

    const maxVacationMonth = monthlyData.indexOf(Math.max(...monthlyData)) + 1;

    const [selectedMonth, setSelectedMonth] = useState(() => {
        if (vacationSummary.totalVacationPeriods.length > 0) {
            return maxVacationMonth; // 가장 많은 휴가가 사용된 달로 설정
        }
        return null;
    });

    const handleVacationDateClick = (month) => {
        setSelectedMonth(month); // 클릭된 월 상태 업데이트
    };


    const getAdCardUrl = (region) => `/ad?region=${region}&month=${selectedMonth || ''}`;

    return (
        <div className="app-wrapper">
            <header className="app-header">
                {/* BackButton 컴포넌트 추가 */}
                <BackButton />
                <h1>휴가 사용 결과</h1>
            </header>
            <div className="app-container">
                <div className="left-panel">
                    <div className="vacation-date">
                        <h3>선택된 휴가 날짜:</h3>
                        {vacationSummary.totalVacationPeriods.map((period, idx) => (
                            <VacationDate
                                key={idx}
                                date={`${period.startDate} ~ ${period.endDate}`}
                                totalDays={period.totalDays}
                                usedDays={period.usedVacationDays}
                                onClick={() => handleVacationDateClick(period.months[0])} // 첫 번째 월 전달
                            />
                        ))}
                    </div>
                    <div className="ad-card">
                        {selectedMonth && (
                            <>
                                <AdCard
                                    key={`domestic-${selectedMonth}`}
                                    imageSrc="./images/korea.jpg"
                                    description="국내 여행지"
                                    recommendation={`${selectedMonth}월에 떠나기 좋은 국내 여행지 확인하기!`}
                                    onClickUrl={getAdCardUrl('국내')}
                                    month={selectedMonth} // AdCard에도 상태 전달
                                />
                                <AdCard
                                    key={`overseas-${selectedMonth}`}
                                    imageSrc="./images/world.jpg"
                                    description="해외 여행지"
                                    recommendation={`${selectedMonth}월에 떠나기 좋은 해외 여행지 확인하기!`}
                                    onClickUrl={getAdCardUrl('해외')}
                                    month={selectedMonth} // AdCard에도 상태 전달
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="right-panel">
                    <div className="chart-container">
                        <UserVacationChart monthlyData={monthlyData} />
                    </div>
                    <div className="chart-container">
                        <ServiceVacationChart percentages={fetchVacationPercentageData} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ResultForm;
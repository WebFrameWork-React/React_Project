import React, { useState } from 'react';
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

    const [selectedMonth, setSelectedMonth] = useState(() => {
        return vacationSummary.totalVacationPeriods.length > 0
            ? vacationSummary.totalVacationPeriods[0].months[0]
            : null;
    });


    const monthlyData = Array(12).fill(0); // 12개월 초기화
    vacationSummary.totalVacationPeriods.forEach((period) => {
        period.months.forEach((month) => {
            monthlyData[month - 1] += period.usedVacationDays; // 월별로 휴가 일수 합산
        });
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
                        <ServiceVacationChart />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ResultForm;
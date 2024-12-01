import React from 'react';
import 'chart.js/auto';
import DoughnutChart from './DoughnutChart';

const UserVacationChart = ({ monthlyData }) => {
    const totalVacation = monthlyData.reduce((sum, value) => sum + value, 0);

    // 0인 값을 필터링하여 유효한 데이터만 사용
    const filteredData = monthlyData
        .map((value, index) => ({ label: `${index + 1}월`, value }))
        .filter((item) => item.value > 0);

    const doughnutData = {
        labels: filteredData.map((item) => item.label),
        datasets: [
            {
                label: '월별 휴가 비율',
                data: filteredData.map((item) => ((item.value / totalVacation) * 100).toFixed(2)),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                    '#9966FF', '#FF9F40', '#66C2FF', '#FFA07A',
                    '#CD5C5C', '#4682B4', '#8FBC8F', '#FFD700',
                ].slice(0, filteredData.length), // 색상도 필터링된 데이터에 맞춰 조정
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <>
            <h3>현 사용자의 휴가 계산 결과</h3>
            <div className="chart-container">
                <DoughnutChart data={doughnutData} options={options} />
            </div>
        </>
    );
};

export default UserVacationChart;

import React from 'react';
import 'chart.js/auto';
import BarChart from './BarChart';

const ServiceVacationChart = () => {
    const barData = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
            {
                label: '휴가 계획 비율(%)',
                data: [10, 10, 5, 3, 5, 8, 17, 20, 5, 5, 3, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 30, // Y축 최대값 설정
                ticks: {
                    stepSize: 5,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <>
            <h2>서비스 이용자들의 휴가 계획 현황</h2>
            <div className="chart-container">
                <BarChart data={barData} options={options} />
            </div>
        </>
    );
};

export default ServiceVacationChart;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ data }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false, // 비율 유지하지 않음
        scales: {
            y: {
                beginAtZero: true,
                max: 25, // Y축 최대값 설정
                ticks: {
                    stepSize: 5, // 간격 설정
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // 범례 상단 위치
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ data }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
                position: 'top',
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;

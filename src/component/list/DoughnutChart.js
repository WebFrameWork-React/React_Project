import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js/auto';

const DoughnutChart = ({ data }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 50, // 상단 여백 추가
                bottom: 50, // 하단 여백 추가
                left: 50, // 좌측 여백 추가
                right: 50, // 우측 여백 추가
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: '#000',
                align: 'end',
                anchor: 'end',
                offset: 15, // 라벨과 차트 간의 간격 조정
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label}: ${value}%`;
                },
                font: {
                    weight: 'bold',
                    size: 14,
                },
            },
        },
        animation: {
            animateRotate: true,
            animateScale: true,
        },
    };

    return (
        <Doughnut
            data={data}
            options={options}
            plugins={[ChartDataLabels]}
            style={{ width: '100%', height: '500px' }} // 차트 크기 조정
        />
    );
};

export default DoughnutChart;
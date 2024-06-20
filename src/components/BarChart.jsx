import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;

        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, [data]);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Number of Items',
                data: Object.values(data),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return <Bar ref={chartRef} data={chartData} />;
};

export default BarChart;

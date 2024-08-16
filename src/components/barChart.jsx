import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChartWidget = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    },
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: data.title || 'Stacked Bar Chart'
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChartWidget;

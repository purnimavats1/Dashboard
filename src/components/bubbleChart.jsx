import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChartWidget = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: data.label || 'Bubble Chart Dataset',
        data: data.map(item => ({ x: item.x, y: item.y, r: item.r })),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: { title: { display: true, text: 'X Axis' } },
      y: { title: { display: true, text: 'Y Axis' } },
    },
    plugins: {
      tooltip: { enabled: true },
      legend: { position: 'top' }
    },
  };

  return <Bubble data={chartData} options={options} />;
};

export default BubbleChartWidget;

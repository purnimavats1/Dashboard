// src/utils/widgetUtils.js

// Function to generate random data for different widget types
export const generateRandomData = (type) => {
    switch (type) {
      case 'pie-chart':
        return [
          { label: 'A', value: Math.random() * 100 },
          { label: 'B', value: Math.random() * 100 },
          { label: 'C', value: Math.random() * 100 },
        ];
      case 'graph':
        return {
          labels: Array.from({ length: 10 }, (_, i) => `Label ${i + 1}`),
          values: Array.from({ length: 10 }, () => Math.random() * 100),
          label: 'Random Line Graph',
          title: 'Random Performance Data',
        };
      case 'stacked-bar-chart':
        return {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
            {
              label: 'Random Dataset 1',
              data: Array.from({ length: 4 }, () => Math.random() * 100),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Random Dataset 2',
              data: Array.from({ length: 4 }, () => Math.random() * 100),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
          ],
          title: 'Random Stacked Bar Chart',
        };
      case 'bubble-chart':
        return [
          { x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 20 },
          { x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 20 },
          { x: Math.random() * 100, y: Math.random() * 100, r: Math.random() * 20 },
        ];
      default:
        return [];
    }
  };
  
// addWidgetForm.jsx

import React, { useState } from 'react';
import { generateRandomData } from '../utlis/widgetUtils'; // Import the utility function


const AddWidgetForm = ({ onWidgetAdd, onCancel }) => {
  const [widgetType, setWidgetType] = useState('');
  const [widgetName, setWidgetName] = useState('');

  const handleAdd = () => {
    if (widgetType && widgetName) {
      const newWidget = {
        id: Date.now(), // Unique ID for each widget
        type: widgetType,
        name: widgetName,
        data: generateRandomData(widgetType), // Use the utility function
      };
      onWidgetAdd(newWidget);
    }
  };

  return (
    <div className="add-widget-form">
      <h3>Add Widget</h3>
      <p>Personalize your dashboard</p>
      <div className='userInput'>
        <label>Widget Type: </label>
        <select value={widgetType} onChange={(e) => setWidgetType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="pie-chart">Pie Chart</option>
          <option value="graph">Line Graph</option>
          <option value="stacked-bar-chart">Stacked Bar Chart</option>
          <option value="bubble-chart">Bubble Chart</option>
        </select>
      </div>
      <div className='userInput'>
        <label>Widget Name: </label>
        <input type="text" value={widgetName} onChange={(e) => setWidgetName(e.target.value)} />
      </div>
      <button onClick={handleAdd}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default AddWidgetForm;

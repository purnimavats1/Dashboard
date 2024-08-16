import React, { useState } from 'react';
import widgetComponents from './widgetComponent';
import AddWidgetForm from './addWidgetForm';
import './Widget.css';

const Category = ({ category }) => {
  const [widgets, setWidgets] = useState(category.widgets);
  const [showAddWidget, setShowAddWidget] = useState(false);

  const removeWidget = (widgetId) => {
    setWidgets(widgets.filter((widget) => widget.id !== widgetId));
  };

  const handleWidgetAdd = (newWidget) => {
    setWidgets([...widgets, newWidget]);
    setShowAddWidget(false);
  };

  const handleCancel = () => {
    setShowAddWidget(false); 
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="category-grid">
        {widgets.map((widget) => {
          const WidgetComponent = widgetComponents[widget.type];
          return (
            <div key={widget.id} className="widget-container">
              <div className="widget-header">
                <span className="widget-title">{widget.name}</span>
                <button className="widget-remove-button" onClick={() => removeWidget(widget.id)}>
                  X
                </button>
              </div>
              {WidgetComponent ? <WidgetComponent data={widget.data} /> : <div>Unknown Widget Type</div>}
            </div>
          );
        })}

        {widgets.length < 5 && (
          <div className="widget-container">
            <button className="add-widget-button" onClick={() => setShowAddWidget(true)}>
              + Add Widget
            </button>
          </div>
        )}

        {showAddWidget && (
          <div className="overlay">
            <AddWidgetForm onWidgetAdd={handleWidgetAdd} onCancel={handleCancel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;

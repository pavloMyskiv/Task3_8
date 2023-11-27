import React, { useState } from 'react';
import './TabMynu.scss';

export const TabMenu = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab_menu">
      <div className="tab_buttons">
        {React.Children.map(children, (child, index) => (
          <div
            className={`tab_button ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </div>
        ))}
      </div>
      <div className="tab_content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

import React, { useState } from "react";

const Tab = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { text, active, setActiveTab } = props;

  return (
    <div 
      className={`tab-button ${(isHovered || active) ? 'active': ''}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setActiveTab()}
    >
      <p>
        {text}
      </p>
    </div>
  );
}

export default Tab;

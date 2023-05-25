import React, { useState } from 'react';
//import './styles.css'; // Import your CSS file for styling

const OverlappingDiv = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div
        className={`main-div ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
      {isHovered && <div className="overlapping-div">Overlapping div with additional information</div>}
    </div>
  );
};

export default OverlappingDiv;

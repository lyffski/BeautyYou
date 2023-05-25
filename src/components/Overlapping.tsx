import React, { useState } from 'react';
//import './styles.css'; // Import your CSS file for styling



  interface IDetails {
    details1: string;
    details2: string;
  }

  interface ILinks {
    link1: string;
    link2: string;
  }
  
  interface OverlappingDivProps {
    text: string;
    details: IDetails;
    links: ILinks;
  }

const OverlappingDiv = ({ text, details, links }: OverlappingDivProps) => {
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [isOverlappingHovered, setIsOverlappingHovered] = useState(false);

  const handleMainMouseEnter = () => {
    setIsMainHovered(true);
  };

  const handleMainMouseLeave = () => {
    setIsMainHovered(false);
  };

  const handleOverlappingMouseEnter = () => {
    setIsOverlappingHovered(true);
  };

  const handleOverlappingMouseLeave = () => {
    setIsOverlappingHovered(false);
  };

  return (
    <div className="container">
      <div
        className={`main-div ${isMainHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMainMouseEnter}
        onMouseLeave={handleMainMouseLeave}
      >
        {text}
      </div>
      {(isMainHovered || isOverlappingHovered) && (
        <div
          className={`overlapping-div ${isOverlappingHovered ? 'hovered' : ''}`}
          onMouseEnter={handleOverlappingMouseEnter}
          onMouseLeave={handleOverlappingMouseLeave}
        >
          <ul className="">
            <a href={`#demo${links.link1}`}><li>{details.details1}</li></a>
            <li>{details.details2}</li>
            <li>Details</li>
            <li>Details</li>
            <li>Details</li>
            <li>Details</li>
            <li>Details</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OverlappingDiv;

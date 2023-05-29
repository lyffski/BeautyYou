import React, { useState } from 'react';
//import './styles.css'; // Import your CSS file for styling



  interface IDetails {
    details1: string;
    details2: string;
  }

  interface IDetailsFace {
    details1: string;
    details2: string;
    details3: string;
    details4: string;
    details5: string;
    details6: string;
    details7: string;
    details8: string;
    details9: string;
  }

  interface ILinks {
    link1: string;
    link2: string;
  }
  
  interface OverlappingDivProps {
    text: string;
    details: IDetails|IDetailsFace;
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
            <a href={`#demo${links.link1}`}><li className="li-list">{details.details1}</li></a>
            <a href={`#demo${links.link1}`}><li className="li-list">{details.details2}</li></a>
            <li className="li-list">{details.details3}</li>
            <li className="li-list">{details.details4}</li>
            <li className="li-list">{details.details5}</li>
            <li className="li-list">{details.details6}</li>
            <li className="li-list">{details.details7}</li>
            <li className="li-list">{details.details8}</li>
            <li className="li-list">{details.details9}</li>
          </ul>ö
        </div>
      )}
    </div>
  );
};

export default OverlappingDiv;

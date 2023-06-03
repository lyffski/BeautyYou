import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
//import './styles.css'; // Import your CSS file for styling

  


const OverlappingDiv = ({ text, details }):IOverlappingDiv => {
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
            <a href={`${details.link1}`}><li className="li-list">{details.details1}</li></a>
            <a href={`${details.link2}`}><li className="li-list">{details.details2}</li></a>
            <a href={`${details.link3}`}><li className="li-list">{details.details3}</li></a>
            <a href={`${details.link4}`}><li className="li-list">{details.details4}</li></a>
            <a href={`${details.link5}`}><li className="li-list">{details.details5}</li></a>
            <a href={`${details.link6}`}><li className="li-list">{details.details6}</li></a>
            <a href={`${details.link7}`}><li className="li-list">{details.details7}</li></a>
            <a href={`${details.link8}`}><li className="li-list">{details.details8}</li></a>
            <a href={`${details.link9}`}><li className="li-list">{details.details9}</li></a>
            <a href={`${details.link10}`}><li className="li-list">{details.details10}</li></a>
            <a href={`${details.link11}`}><li className="li-list">{details.details11}</li></a>
            <a href={`${details.link12}`}><li className="li-list">{details.details12}</li></a>
            <a href={`${details.link13}`}><li className="li-list">{details.details13}</li></a>
            <a href={`${details.link14}`}><li className="li-list">{details.details14}</li></a>
            <a href={`${details.link15}`}><li className="li-list">{details.details15}</li></a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OverlappingDiv;

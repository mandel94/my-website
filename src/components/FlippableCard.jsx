import React, { useState } from 'react';
import Card from './Card';


const FlippableCard = ({ frontImage, backImage, title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'card--flipped' : ''}`} onClick={handleCardClick}>
      <div className="card__side card__side--back">
        <img src={backImage} alt="Card Back" className="card__image--back" />
      </div>
      <div className="card__side card__side--front">
        <Card image={frontImage}
          title={title}
          content={content}
        />
      </div>
    </div>
  );
};


export default FlippableCard;

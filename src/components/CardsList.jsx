// Cards.js
import React from 'react';
import Card from './Card'; // Ensure correct path to Card component
import FlippableCard from './FlippableCard';



const CardsList = ( { cardsData }) => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          frontImage={card.frontImage}
          backImage={card.backImage}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
};

const FlippableCardsList = ( { cardsData }) => {
  return (
    <div className="cards-container flippable">
      {cardsData.map((card, index) => (
        <FlippableCard
          key={index}
          frontImage={card.frontImage}
          backImage={card.backImage}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
}


export { CardsList, FlippableCardsList}

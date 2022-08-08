import React from 'react';
import logements from '../data/logements.json';
import Card from './Card';

const Cards = () => {
  return (
    <main>
      {logements.map((card) => (
        <Card key={card.id} props={card} />
      ))}
    </main>
  );
};

export default Cards;

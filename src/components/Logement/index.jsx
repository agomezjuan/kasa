import React from 'react';
import Carousel from './Carousel';
import Dropdown from '../Dropdown';
import data from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Pill from '../Pill';

import './Logement.sass';
import Host from './Host';

const Logement = () => {
  let params = useParams();
  let logement = data.find((logement) => logement.id === params.id);

  const details = [
    {
      title: 'Description',
      text: logement.description
    },
    {
      title: 'Équipements',
      text: logement.equipements
    }
  ];

  console.log(details[1].text);
  return (
    <div>
      <Carousel props={logement.pictures} />
      <header className="info">
        <section className="info-logement">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div>
            {logement.tags.map((tag, index) => (
              <Pill key={index} props={tag} />
            ))}
          </div>
        </section>
        <section className="info-host">
          <Host props={logement.host} />
        </section>
      </header>
      <section className="details">
        {details.map((detail, index) => {
          return <Dropdown key={index} props={[detail, index]} />;
        })}
      </section>
    </div>
  );
};

export default Logement;

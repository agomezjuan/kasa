import React from 'react';
import Carousel from './Carousel';
import Dropdown from '../Dropdown';
import Host from './Host';
import Pill from '../Pill';
import { useParams } from 'react-router-dom';

import data from '../../data/logements.json';
import './Logement.sass';

const Logement = () => {
  let params = useParams();
  let logement = data.find((logement) => logement.id === params.id);

  console.log(logement.equipments);

  const details = [
    {
      title: 'Description',
      text: logement.description
    },
    {
      title: 'Équipements',
      text: logement.equipments
    }
  ];

  return (
    <div className='logement'>
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

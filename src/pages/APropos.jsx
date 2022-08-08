import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

const APropos = () => {
  const bannerImage = {
    url: './assets/banners/kaBkci_8qcdvQ-unsplash.png',
    text: 'Beautiful landscape',
    printText: false
  };

  const aPropos = [
    {
      title: 'Fiabilié',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      text: 'Notre équipe est à votre écoute 7j/7 et 24h/24. N’hésitez pas à nous contacter pour toute question ou suggestion.'
    },
    {
      title: 'Sécurité',
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <>
      <div className="container">
        <Header />
        <Banner props={bannerImage} />
        <section className="apropos">
          {aPropos.map((item, index) => {
            return <Dropdown props={[item, index]} key={index} />;
          })}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default APropos;

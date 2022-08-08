import React from 'react';
import Carousel from '../components/Logement/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logement from '../components/Logement';

const FicheLogement = ({ props }) => {
  return (
    <>
      <div className="container">
        <Header />
        <Logement />
      </div>
      <Footer />
    </>
  );
};

export default FicheLogement;

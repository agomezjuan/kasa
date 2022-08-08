import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../sass/_notfound.sass';

const NotFound = ({}) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="NotFound">
          <h2>404</h2>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to={'/'}>Retourner sur la page d’accueil</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

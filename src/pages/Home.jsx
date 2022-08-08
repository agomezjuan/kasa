import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Banner from '../components/Banner';

const Home = () => {
  const bannerImage = {
    url: './assets/banners/banner.png',
    text: 'Chez vous, partout et ailleurs',
    printText: true
  };
  return (
    <>
      <div className="container">
        <Header />
        <Banner props={bannerImage} />
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Home;

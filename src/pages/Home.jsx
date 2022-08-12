import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import banner_main from '@banners/banner.png';

const Home = () => {
  const bannerImage = {
    url: banner_main,
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

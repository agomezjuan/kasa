import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  const logoUrl = '/assets/logos/LOGO.png';
  return (
    <header>
      <Logo url={logoUrl} />
      <Navigation />
    </header>
  );
};

export default Header;

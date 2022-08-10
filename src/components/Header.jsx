import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import logoUrl from '@logos/LOGO.png';

const Header = () => {
  return (
    <header>
      <Logo url={logoUrl} />
      <Navigation />
    </header>
  );
};

export default Header;

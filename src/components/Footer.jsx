import React from 'react';
import Logo from './Logo';
import logoUrl from '@logos/LOGO-FOOTER.png';

const Footer = () => {
  return (
    <footer>
      <Logo url={logoUrl} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const logoUrl = '../assets/logos/LOGO-FOOTER.png';
  return (
    <footer>
      <Logo url={logoUrl} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import APropos from '../pages/APropos';
import FicheLogement from '../pages/FicheLogement';
import NotFound from '../pages/NotFound';

import '../sass/styles.sass';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="apropos" element={<APropos />} />
      <Route path="FicheLogement/:id" element={<FicheLogement />} />
      <Route path="not-found" element={<NotFound />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

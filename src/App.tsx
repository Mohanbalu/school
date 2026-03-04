/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PrincipalMessage from './pages/PrincipalMessage';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import Careers from './pages/Careers';
import Alumni from './pages/Alumni';
import Events from './pages/Events';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="principal-message" element={<PrincipalMessage />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Home />} /> {/* Admissions is a section on Home, but can be a separate route if needed */}
          <Route path="campus-life" element={<CampusLife />} />
          <Route path="careers" element={<Careers />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Products from './Pages/Products.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />

           
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

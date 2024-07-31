

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Ecommerce } from './pages/ecommerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



    function App() {
      return (
        <>
          <Router>
            <Routes>
              <Route path='/' element={<Ecommerce />} />
            </Routes>
          </Router>
        </>
      )
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);


import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Form from './components/form';
import Categories from './components/categories';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
      <hr className="Line" />
      <Form />
    </div>
  </Router>
);

export default App;

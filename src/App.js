import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';
import Form from './components/form';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/bookstore" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
      <Form />
    </div>
  </Router>
);

export default App;

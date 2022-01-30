import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';
import './App.css'

const App = () => (
  <Router>
    <div className='bg'>
      <Navbar />
      <Routes>
        <Route exact path="/bookstore" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;

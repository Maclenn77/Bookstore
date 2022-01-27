import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="panel-bg">
    <h1 className="navbrand">Bookstore CMS</h1>
    <ul>
      <li className="BOOKS">
        <Link to="/books">BOOKS</Link>
      </li>
      <li className="CATEGORIES">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

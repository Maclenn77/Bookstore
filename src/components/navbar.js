import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="panel-bg">
    <h1 className="navbrand">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/bookstore" className="BOOKS">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" className="CATEGORIES">CATEGORIES</Link>
      </li>
    </ul>
    <div className="Oval"><span className="login">@</span></div>
  </nav>
  
);

export default Navbar;

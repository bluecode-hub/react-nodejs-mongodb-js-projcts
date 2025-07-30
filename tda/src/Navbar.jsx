import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './images.png'; // Make sure the path is correct and file exists

function Navbar() {
  return (
    <nav className="navmain">
      <div className="nav-left">
        <img src={logo} className="logo_image" alt="logo" />
      </div>
      <ul className="list_nav">
        <li><Link to="/" className="button">Home</Link></li>
        <li><Link to="/about" className="button">About</Link></li>
        <li><Link to="/projects" className="button">Projects</Link></li>
        <li><Link to="/events" className="button">Events</Link></li>
        <li><Link to="/team" className="button">Team</Link></li>
        <li><Link to="/contact" className="button">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

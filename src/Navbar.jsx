import { Link } from "react-router-dom";
import logo from './assets/logo.png'
export default function Navbar() {
  return (
    <nav className="navBar">
     

      <Link to="/">
          <img src={logo} alt="logo"></img>
      </Link>

      <Link to="/registration">
        <button className="registerButton">Register</button>
      </Link>
    </nav>
  );
}

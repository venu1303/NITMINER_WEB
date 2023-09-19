import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        <nav>
          <div className="nav-left">NITW Minor</div>
          <div className="nav-right">
            <li><NavLink to="/Home"> Home</NavLink></li>
            <li><NavLink to="/service"> Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact"> Contact</NavLink></li>
          </div>
        </nav>
        </>
     );
}
 
export default Navbar;
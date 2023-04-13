import navLogo from "../images/cropped-logo.png";
import titleLogo from '../images/title-logo.png';
import { NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <nav className="navbar" >
            <div className="navbar-logo-wrapper" >
                <img src={navLogo} alt="" className="navbar--logo" />
                <img src={titleLogo} alt="" className="navbar--title-logo" />
            </div>
        </nav>
    )
}
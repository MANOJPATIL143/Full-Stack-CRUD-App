import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import "../assets/navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div class="nav-container">
                <div class="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul class="nav-links">
                    <li ><Link className="nav-link" to="/">Home</Link></li>
                    <li> <Link className="nav-link" to="/add">Post Job</Link></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar

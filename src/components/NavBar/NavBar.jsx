import "./NavBar.css";
import imglogo from "../../assets/logo.png"
import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";




export const NavBar = () => {

    return (
        <nav className="navegation">
            <img className="logo" src={imglogo} alt="logo"/>
            <div className="list">
            <Link to="/inicio">
                <h3>Inicio</h3>
            </Link>
            <Link to="/nosotros">
                <h3>Nosotros</h3>
            </Link>
            <Link to="/tienda">
                <h3>Tienda</h3>
            </Link>
            </div>
            <CartWidget/>
        </nav>
    )
}
import "./NavBar.css";
import imglogo from "../../assets/logo.png"
import { CartWidget } from "../CartWidget/CartWidget.jsx";

export const NavBar = () => {
    return (
        <nav className="navegation">
            <img className="logo" src={imglogo} alt="logo"/>
            <ul className="list">
                <li><a href="">Inicio</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Tienda</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
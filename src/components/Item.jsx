import { FaArrowRight } from "react-icons/fa";

const Item = function ({marca, modelo, descripcion}) {
    return (
        <li>

            <img src="../" alt="imagen descriptiva" />
            <strong> Marca: {marca}</strong>
            <strong> Modelo: {modelo}</strong>
            <strong> Descripcion: {descripcion}</strong>
        </li>
    );
};

export default Item;
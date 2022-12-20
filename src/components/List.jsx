import React from "react";
import Item from "./Item";

const List = function ({list}) {
    return list.map(({id, marca, modelo, descripcion}) => (
        <Item key={id} marca={marca} modelo={modelo} descripcion={descripcion}/>
    ));
};

export default List;
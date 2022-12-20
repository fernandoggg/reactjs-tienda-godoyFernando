import "./ItemListContainer.css"
import { Route, Routes } from "react-router-dom";
import List from "../List";
import data from "../../data.json";

export const ItemListContainer = ({greeting})=>{
    const {tienda} = data;
    return(
        <div className="container">
            {greeting}
        <Routes>
            <Route path="/tienda" element={<List list={tienda}/>}/>
        </Routes>
        </div>
    )
}
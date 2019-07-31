import React from "react";
import "./Characters.css";

function Characters(props) {
    return (
        <div className="card col-md-3 col-12 m-2" onClick= {() => props.onClick(props.id)} style={{backgroundImage:`url(${props.image})`,backgroundRepeat:"no-repeat", borderRadius: "20px"}}>
        </div>
        // <div className="card col-md-3 col-12 m-0">
        //    <button><img alt={props.name} src={props.image} id= {props.id} onClick= {() => props.onClick(props.id)} /></button> 
        // </div>
    )
}



export default Characters;
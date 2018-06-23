import React from "react";
import "./Image.css";

const Image = props => (
<div className="image">
    <img id={props.id} src={props.url}
onClick={() => props.handleClickedFlower(props.id)} alt="clicky game" />
    </div>
);

export default Image;
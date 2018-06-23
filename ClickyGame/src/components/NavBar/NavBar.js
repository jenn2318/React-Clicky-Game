import React from "react";
import "./NavBar.css";

const NavBar = props => (

    <div className="nav nav-bar sticky-top bg-primary row gray">
<div className="col-sm" onClick={() => props.resetGame()}> {props.gameText} </div>
        <div className="col-sm"> Score: {props.currentScore} | Top Score: {props.highScore}</div>
</div>
);

export default NavBar;
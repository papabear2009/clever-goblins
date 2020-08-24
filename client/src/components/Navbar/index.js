import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="container-fluid">
        <div className="navbar-layout">
             <Link href="/play" className="link-text" id="pn"><Button variant=""  ></Button></Link>{' '}
             <Link href="/create" className="link-text" id="cd"><Button variant=""  ></Button></Link>{' '}
             <Link href="/stadium" className="link-text" id="es"><Button variant="" ></Button></Link>{' '}
        </div>
        </div>
    );
}

export default Navbar;